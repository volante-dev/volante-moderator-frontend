'use client';
import Button, { type ButtonProps } from '@mui/material/Button';

/** The single action primitive: colors, focus and loading are owned by the MUI theme. */
export function ActionButton({ variant = 'contained', ...props }: ButtonProps) {
  return <Button variant={variant} disableElevation {...props} />;
}
