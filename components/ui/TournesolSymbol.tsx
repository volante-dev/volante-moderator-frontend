'use client';
import { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import sunflower from '@/public/brand/tournesol-symbol.png';
import { tokens } from '@/theme/tokens';

/** The original raster supplies the exact petal contour; only its color field rotates. */
export function TournesolSymbol({ size = 52, animated = true }: { size?: number | string; animated?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || !animated) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    const update = () => { element.dataset.motion = String(visible && !document.hidden && !motion.matches); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); });
    observer.observe(element);
    document.addEventListener('visibilitychange', update);
    motion.addEventListener('change', update);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', update); motion.removeEventListener('change', update); };
  }, [animated]);
  return <Box component="span" ref={ref} aria-hidden="true" data-tournesol-symbol data-motion="false" sx={{ display: 'inline-block', position: 'relative', width: size, aspectRatio: '1', flexShrink: 0, verticalAlign: 'middle',
    '@keyframes tournesol-petal-colors': { to: { transform: 'rotate(360deg)' } },
    '&[data-motion="true"] .tournesol-petal-gradient': { animationPlayState: 'running' },
    '@media (prefers-reduced-motion: reduce)': { '& .tournesol-petal-gradient': { animation: 'none' } },
  }}>
    <Image src={sunflower} alt="" width={400} height={400} sizes="(max-width: 899px) 220px, 400px" style={{ display: 'block', width: '100%', height: '100%', clipPath: 'ellipse(21.3% 21.2% at 50% 51.04%)' }} />
    <Box data-petal-mask sx={{ position: 'absolute', inset: 0, pointerEvents: 'none',
      // Intersect the original alpha with the outside of its circular center.
      // Only the original center is drawn underneath, preventing old petal colors at alpha edges.
      maskImage: `url("${sunflower.src}"), radial-gradient(ellipse 21.3% 21.2% at 50% 51.04%, transparent 99.5%, #000 100%)`,
      maskSize: '100% 100%', maskRepeat: 'no-repeat', maskComposite: 'intersect',
      WebkitMaskComposite: 'source-in',
      overflow: 'hidden',
    }}><Box className="tournesol-petal-gradient" sx={{ position: 'absolute', inset: '-22%',
      background: `conic-gradient(from 25deg, ${tokens.color.brand}, ${tokens.color.brandLight} 80deg, ${tokens.color.accent} 170deg, ${tokens.color.accentHover} 250deg, ${tokens.color.brand} 360deg)`,
      animation: animated ? 'tournesol-petal-colors 18s linear infinite paused' : 'none',
    }} /></Box>
  </Box>;
}
