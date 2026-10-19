'use client';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddRounded from '@mui/icons-material/AddRounded';

export function InfoAccordion({ title, children, id }: { title: string; children: React.ReactNode; id: string }) {
  return <Accordion disableGutters elevation={0} sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, borderBottom: '1px solid', borderColor: 'divider', borderRadius: '0 !important', '&.Mui-expanded': { m: 0 } }}>
    <AccordionSummary id={`${id}-summary`} aria-controls={`${id}-content`} expandIcon={<AddRounded />} sx={{ px: 0, py: 1.5, gap: 2, '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': { transform: 'rotate(45deg)' } }}>
      <Typography component="span" sx={{ fontSize: { xs: 21, md: 24 }, pr: 2 }}>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails id={`${id}-content`} sx={{ px: 0, pb: 3, maxWidth: '70ch', color: 'text.secondary' }}>{children}</AccordionDetails>
  </Accordion>;
}
