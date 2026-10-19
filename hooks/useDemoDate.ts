'use client';
import { useSyncExternalStore } from 'react';
/** The demo follows the visitor's local day, including a tab left open overnight. */
function snapshot() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
function subscribe(update: () => void) {
  const timer = window.setInterval(update, 30_000);
  window.addEventListener('focus', update);
  document.addEventListener('visibilitychange', update);
  return () => { clearInterval(timer); window.removeEventListener('focus', update); document.removeEventListener('visibilitychange', update); };
}
const serverSnapshot = () => null;
export function useDemoDate(fixedDate?: string) {
  const date = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  return fixedDate ?? date;
}
