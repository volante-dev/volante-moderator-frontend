export const tokens = {
  color: {
    paper: '#F5F6FA', white: '#FFFFFF', brand: '#3659D9', brandDeep: '#17264B',
    brandLight: '#5774E2', accent: '#8DD9C2', accentLight: '#DFF3EC',
    ink: '#17264B', muted: '#59647B', line: '#DCE1ED', field: '#EBEEF5',
    error: '#A3382F', warning: '#6A4D1C', phone: '#222630', instagram: '#121212',
    accentHover: '#72C7AE', inverseMuted: '#CCD5F0', nativeLine: '#E3E3E3', nativeMuted: '#575757',
  },
  font: {
    display: '"futura-pt", "Futura-Medium", Futura, "Helvetica Neue", sans-serif',
    body: '"futura-pt", "Helvetica Neue", Arial, sans-serif',
    native: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
  },
  // The current Adobe kit supplies 400 and 700. CSS resolves 500 to 400 until
  // Medium is added; the user approved this fallback on 18 October 2026.
  weight: { body: 400, heading: 500, strong: 700 },
  radius: { control: 4, track: 8, dialog: 12, surface: 16, phone: 44 },
  space: { unit: 8, section: 112, maxWidth: 1312 },
  shadow: {
    raised: '-12px -12px 22px rgba(255,255,255,.98), 12px 14px 24px rgba(41,55,88,.13)',
    glass: '-8px -8px 24px rgba(255,255,255,.7), 16px 20px 42px rgba(23,38,75,.18)',
  },
  motion: { quick: 180, normal: 320, reveal: 700, ease: 'cubic-bezier(.16,1,.3,1)' },
} as const;
