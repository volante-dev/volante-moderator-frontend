import { tokens } from './tokens';

/** The selected direction follows production tokens; other proposals remain illustrative. */
export const paletteDirections = [
  { id: 'cobalt', name: 'Cobalt & vert d’eau', letter: 'A', description: 'Le choix retenu : cobalt, bleu nuit et vert d’eau.', primary: tokens.color.brand, deep: tokens.color.brandDeep, accent: tokens.color.accent, paper: tokens.color.paper, muted: tokens.color.muted, line: tokens.color.line, light: '#E9EDFC' },
  { id: 'glacier', name: 'Encre & glacier', letter: 'B', description: 'Une base bleu nuit et un cyan lumineux, plus technique.', primary: '#076C89', deep: '#142B3B', accent: '#5BE2ED', paper: '#F3F7F8', muted: '#526775', line: '#D5E2E7', light: '#DDF2F6' },
  { id: 'corail', name: 'Prune & corail', letter: 'C', description: 'Une prune profonde et un corail franc, plus créatif.', primary: '#6A4092', deep: '#30203F', accent: '#FFAC8E', paper: '#F8F5F7', muted: '#6D5F75', line: '#E6DDE8', light: '#EFE5F6' },
] as const;
