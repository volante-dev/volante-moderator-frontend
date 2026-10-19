'use client';
import Dialog, { type DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseRounded from '@mui/icons-material/CloseRounded';
import { useId } from 'react';

export interface GlassDialogProps extends Omit<DialogProps, 'title' | 'children'> {
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

/** MUI owns focus trapping, Escape, backdrop and return focus. The theme owns the material. */
export function GlassDialog({ title, children, actions, onClose, ...props }: GlassDialogProps) {
  const id = useId();
  return <Dialog fullWidth maxWidth="sm" aria-labelledby={id} onClose={onClose} {...props}>
    <DialogTitle id={id} sx={{ pr: 8, pt: 3, fontSize: 28 }}>{title}</DialogTitle>
    {onClose && <IconButton aria-label="Fermer" onClick={event => onClose(event, 'escapeKeyDown')} sx={{ position: 'absolute', right: 12, top: 16 }}><CloseRounded /></IconButton>}
    <DialogContent sx={{ pb: 3 }}>{children}</DialogContent>
    {actions && <DialogActions sx={{ px: 3, pb: 3, flexWrap: 'wrap', gap: 1 }}>{actions}</DialogActions>}
  </Dialog>;
}
