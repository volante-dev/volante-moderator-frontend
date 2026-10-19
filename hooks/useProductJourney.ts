'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { journeyPhase, type JourneyPhase } from '@/components/product/demo';

const clamp = (value: number) => Math.max(0, Math.min(1, value));
const ease = (value: number) => 1 - Math.pow(1 - clamp(value), 3);
const easeInOut = (value: number) => {
  const t = clamp(value);
  return t < .5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2;
};
const duration = 8200;
const positions = [.28, .54, 1];
type Rect = { x: number; y: number; width: number; height: number };
type Controller = { play: () => void; pause: () => void; showStep: (step: number) => void };

/** A finite sequence, framed and pinned on desktop until completion or interruption. */
export function useProductJourney(date: string | null) {
  const ref = useRef<HTMLElement>(null);
  const controller = useRef<Controller | null>(null);
  const [state, setState] = useState<{ phase: JourneyPhase; running: boolean; step: number; reduced: boolean }>({ phase: 'ready', running: false, step: 0, reduced: false });
  useEffect(() => {
    const element = ref.current;
    if (!element || !date) return;
    const root: HTMLElement = element;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktop = window.matchMedia('(min-width: 900px)');
    const stage = root.querySelector<HTMLElement>('.product-stage');
    const scene = root.querySelector<HTMLElement>('.journey-frame');
    const traveller = root.querySelector<HTMLElement>('.journey-traveller');
    let elapsed = 0, previousTime = 0, frame = 0, running = false, visible = false, started = false;
    let releaseScroll: (() => void) | null = null;
    let pinnedY = 0, lastScrollY = window.scrollY, movingDown = true;
    let points: Rect[] = [];
    let lastPhase = '';
    function unlock() { releaseScroll?.(); releaseScroll = null; root.dataset.scrollLocked = 'false'; }
    function pin() {
      if (!scene || !desktop.matches || media.matches || releaseScroll) return;
      const html = document.documentElement;
      const saved = [
        [html, 'overflow'], [html, 'scroll-behavior'], [document.body, 'overflow'],
      ].map(([element, property]) => {
        const node = element as HTMLElement, key = property as string;
        return { node, key, value: node.style.getPropertyValue(key), priority: node.style.getPropertyPriority(key) };
      });
      releaseScroll = () => saved.forEach(({ node, key, value, priority }) => value ? node.style.setProperty(key, value, priority) : node.style.removeProperty(key));
      html.style.setProperty('scroll-behavior', 'auto');
      const rect = scene.getBoundingClientRect();
      const top = Math.max(16, (window.innerHeight - rect.height) / 2);
      window.scrollTo({ top: window.scrollY + rect.top - top, behavior: 'instant' });
      pinnedY = window.scrollY;
      html.style.setProperty('overflow', 'hidden');
      document.body.style.setProperty('overflow', 'hidden');
      root.dataset.scrollLocked = 'true';
      visible = true;
    }
    function preventScroll(event: WheelEvent | TouchEvent) {
      // Preserve browser zoom; only page travel is held during the scene.
      if (releaseScroll && !('ctrlKey' in event && event.ctrlKey)) event.preventDefault();
    }
    function keydown(event: KeyboardEvent) {
      if (!releaseScroll) return;
      if (event.key === 'Escape') { pause(); return; }
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest('button, a, input, textarea, select, [contenteditable="true"]')) return;
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) event.preventDefault();
    }
    function focus(event: FocusEvent) {
      if (releaseScroll && event.target instanceof Node && !root.contains(event.target)) pause();
    }
    function measure() {
      if (!stage) return;
      const origin = stage.getBoundingClientRect();
      points = ['draft','calendar','feed'].map(key => {
        const target = stage!.querySelector<HTMLElement>(`[data-travel-target="${key}"]`);
        const rect = target?.getBoundingClientRect();
        return rect ? { x: rect.left - origin.left, y: rect.top - origin.top, width: rect.width, height: rect.height } : { x: 0, y: 0, width: 0, height: 0 };
      });
      if (traveller && points[0].width) { traveller.style.width = `${points[0].width}px`; traveller.style.height = `${points[0].height}px`; }
    }
    function render() {
      const p = clamp(elapsed / duration), phase = journeyPhase(p);
      const upload = clamp((p - .05) / .19);
      root.style.setProperty('--upload-mask', `${(1 - upload) * 100}%`);
      root.style.setProperty('--upload-progress', String(upload));
      root.style.setProperty('--calendar-arrival', p >= .47 ? '1' : '0');
      root.style.setProperty('--feed-shift', String(ease((p - .62) / .1)));
      root.style.setProperty('--feed-arrival', String(clamp((p - .88) / .04)));
      root.style.setProperty('--journey-progress', String(p));
      root.dataset.phase = phase;
      const step = p < .34 ? 0 : p < .62 ? 1 : 2;
      root.dataset.journeyStep = String(step);
      if (phase !== lastPhase) {
        lastPhase = phase;
        setState({ phase, running, step, reduced: media.matches });
      }
      if (traveller) {
        const segment = p >= .72 && p < .90 ? 1 : p >= .34 && p < .47 ? 0 : -1;
        const from = points[segment], to = points[segment + 1], base = points[0];
        if (segment < 0 || !from?.width || !to?.width || media.matches) { traveller.style.opacity = '0'; traveller.style.removeProperty('box-shadow'); return; }
        const travel = clamp(segment === 0 ? (p - .34) / .13 : (p - .72) / .18);
        // Pick up first, accelerate through the transfer, then settle onto the destination.
        const amount = easeInOut((travel - .12) / .76);
        const lift = easeInOut(travel / .16) * (1 - easeInOut((travel - .78) / .22));
        const enlargement = 1 + .07 * lift;
        const mix = (a: number, b: number) => a + (b - a) * amount;
        const width = mix(from.width, to.width), height = mix(from.height, to.height);
        const x = mix(from.x, to.x) - width * (enlargement - 1) / 2;
        const y = mix(from.y, to.y) - height * (enlargement - 1) / 2 - 12 * lift - Math.sin(amount * Math.PI) * 12;
        const scaleX = width / base.width * enlargement, scaleY = height / base.height * enlargement;
        // Keep the directional shadow in screen space while the photo changes size.
        const shadow = lift / Math.max(scaleX, scaleY, .1);
        traveller.style.boxShadow = `${4 * shadow}px ${14 * shadow}px ${20 * shadow}px rgb(var(--mui-palette-primary-darkChannel) / ${.22 * lift})`;
        traveller.style.transform = `translate3d(${x}px,${y}px,0) scale(${scaleX},${scaleY})`;
        traveller.style.opacity = '1';
      }
    }
    function tick(now: number) {
      frame = 0;
      if (!running || !visible || document.hidden) { previousTime = 0; return; }
      if (previousTime) elapsed = Math.min(duration, elapsed + Math.min(now - previousTime, 80));
      previousTime = now;
      if (elapsed >= duration) { running = false; unlock(); }
      render();
      if (running) frame = requestAnimationFrame(tick);
      else setState(value => ({ ...value, running: false }));
    }
    function schedule() { if (running && visible && !document.hidden && !frame) frame = requestAnimationFrame(tick); }
    function pause() { running = false; previousTime = 0; cancelAnimationFrame(frame); frame = 0; unlock(); setState(value => ({ ...value, running: false })); }
    function play() {
      started = true;
      if (elapsed >= duration) elapsed = 0;
      if (media.matches) { elapsed = duration; render(); return; }
      running = true; previousTime = 0; pin(); measure();
      setState(value => ({ ...value, running: true }));
      render(); schedule();
    }
    function showStep(step: number) { started = true; pause(); elapsed = positions[step] * duration; render(); }
    function resize() { if (releaseScroll) { unlock(); if (!desktop.matches) pause(); else if (running) pin(); } measure(); render(); }
    function preference() {
      if (media.matches) { pause(); elapsed = duration; }
      lastPhase = ''; render();
    }
    function visibility() { if (document.hidden) pause(); else { previousTime = 0; schedule(); } }
    function autoplay() {
      if (!scene || started || !desktop.matches || media.matches || !movingDown || document.hidden) return;
      const rect = scene.getBoundingClientRect();
      const top = Math.max(16, (window.innerHeight - rect.height) / 2);
      // Start when the scene reaches its reading position, not while it enters below the fold.
      const anchorInset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      if (rect.top <= Math.max(top, anchorInset) + 2 && rect.bottom > rect.height * .35) play();
    }
    function scroll() {
      movingDown = window.scrollY >= lastScrollY;
      lastScrollY = window.scrollY;
      // Anchor links, browser find and keyboard focus must always be able to leave.
      if (releaseScroll && Math.abs(window.scrollY - pinnedY) > 2) pause();
      else autoplay();
    }
    controller.current = { play, pause, showStep };
    const observer = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      previousTime = 0;
      if (!visible && running) pause();
      else { autoplay(); schedule(); }
    }, { threshold: .35 });
    // Observe only the product canvas, not the longer narrative section.
    const canvas = root.querySelector('.journey-canvas');
    if (canvas) observer.observe(canvas);
    const resizeObserver = new ResizeObserver(resize);
    if (stage) resizeObserver.observe(stage);
    media.addEventListener('change', preference);
    document.addEventListener('visibilitychange', visibility);
    document.addEventListener('keydown', keydown);
    document.addEventListener('focusin', focus);
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', resize);
    measure(); preference();
    return () => {
      unlock(); cancelAnimationFrame(frame); observer.disconnect(); resizeObserver.disconnect();
      document.removeEventListener('keydown', keydown); document.removeEventListener('focusin', focus);
      window.removeEventListener('wheel', preventScroll); window.removeEventListener('touchmove', preventScroll); window.removeEventListener('scroll', scroll);
      media.removeEventListener('change', preference); document.removeEventListener('visibilitychange', visibility); window.removeEventListener('resize', resize);
      controller.current = null;
    };
  }, [date]);
  return { ref, ...state, play: useCallback(() => controller.current?.play(), []), pause: useCallback(() => controller.current?.pause(), []), showStep: useCallback((step: number) => controller.current?.showStep(step), []) };
}
