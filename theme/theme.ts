import { createTheme } from '@mui/material/styles';
import { tokens as t } from './tokens';

export const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light', primary: { main: t.color.brand, dark: t.color.brandDeep, light: t.color.brandLight },
    secondary: { main: t.color.accent, contrastText: t.color.brandDeep },
    background: { default: t.color.paper, paper: t.color.paper },
    text: { primary: t.color.ink, secondary: t.color.muted },
    divider: t.color.line, error: { main: t.color.error }, warning: { main: t.color.warning },
  },
  spacing: t.space.unit,
  shape: { borderRadius: t.radius.control },
  typography: {
    fontFamily: t.font.body, fontSize: 16,
    h1: { fontFamily: t.font.display, fontWeight: t.weight.heading, fontSize: 'clamp(3rem,6.25vw,6rem)', lineHeight: .99, letterSpacing: '-.035em', textWrap: 'balance' },
    h2: { fontFamily: t.font.display, fontWeight: t.weight.heading, fontSize: 'clamp(2.5rem,4.6vw,4.5rem)', lineHeight: 1.04, letterSpacing: '-.03em', textWrap: 'balance' },
    h3: { fontFamily: t.font.display, fontWeight: t.weight.heading, fontSize: 'clamp(1.65rem,2.5vw,2.5rem)', lineHeight: 1.15, letterSpacing: '-.02em', textWrap: 'balance' },
    h4: { fontFamily: t.font.display, fontWeight: t.weight.heading, fontSize: '1.5rem', lineHeight: 1.2 },
    body1: { fontSize: '1.1875rem', lineHeight: 1.55 },
    body2: { fontSize: '1rem', lineHeight: 1.5 },
    button: { fontSize: '1rem', fontWeight: 400, textTransform: 'none', letterSpacing: 0 },
    caption: { fontSize: '.875rem', lineHeight: 1.45 },
  },
  components: {
    MuiCssBaseline: { styleOverrides: { body: { WebkitFontSmoothing: 'antialiased', fontSynthesis: 'none' }, a: { textUnderlineOffset: '.25em' }, 'input, textarea': { caretColor: t.color.brand } } },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { minHeight: 44, borderRadius: t.radius.control, padding: '10px 22px', boxShadow: 'none', transition: `background-color ${t.motion.quick}ms ${t.motion.ease}, color ${t.motion.quick}ms ${t.motion.ease}`, '&:hover': { boxShadow: 'none' }, '&.Mui-focusVisible': { outline: `3px solid ${t.color.brandLight}`, outlineOffset: 4 }, '&.MuiButton-contained.MuiButton-colorSecondary:hover': { backgroundColor: t.color.accentHover } } },
    },
    MuiIconButton: { styleOverrides: { root: { borderRadius: t.radius.control, minWidth: 44, minHeight: 44 } } },
    MuiLink: { defaultProps: { underline: 'hover' }, styleOverrides: { root: { textUnderlineOffset: '.25em' } } },
    MuiPaper: { defaultProps: { elevation: 0 }, styleOverrides: { root: { backgroundImage: 'none' } } },
    MuiOutlinedInput: { styleOverrides: { root: { borderRadius: t.radius.control, backgroundColor: t.color.field }, notchedOutline: { borderColor: t.color.line } } },
    MuiDialog: { styleOverrides: { paper: { backgroundColor: 'rgba(245,246,250,.88)', backdropFilter: 'blur(24px) saturate(1.2)', borderRadius: t.radius.dialog, boxShadow: t.shadow.glass, '@supports not (backdrop-filter: blur(1px))': { backgroundColor: t.color.paper } } } },
    MuiTabs: { styleOverrides: { root: { minHeight: 48 }, indicator: { display: 'none' } } },
    MuiTab: { styleOverrides: { root: { minHeight: 44, textTransform: 'none', borderRadius: t.radius.control, '&.Mui-selected': { color: t.color.brandDeep, backgroundColor: t.color.accent }, '&.Mui-focusVisible': { outline: `3px solid ${t.color.brand}`, outlineOffset: -3 } } } },
  },
});
