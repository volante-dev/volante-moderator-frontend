'use client';
import { useId } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ButtonBase from '@mui/material/ButtonBase';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Pause from '@mui/icons-material/Pause';
import Replay from '@mui/icons-material/Replay';
import SkipNext from '@mui/icons-material/SkipNext';
import { ActionButton } from '@/components/ui/ActionButton';
import { ProductStage } from '@/components/product/ProductStage';
import { DraftPreview } from '@/components/product/DraftPreview';
import { CalendarPreview } from '@/components/product/CalendarPreview';
import { PhonePreview } from '@/components/product/PhonePreview';
import { phaseLabels } from '@/components/product/demo';
import { tokens } from '@/theme/tokens';
import { useProductJourney } from '@/hooks/useProductJourney';
import { useDemoDate } from '@/hooks/useDemoDate';

export const journeySteps = [
  { title: 'Préparez.', label: 'Brouillon', text: 'Une photo, un carrousel ou un Reel. Vos médias et votre légende prennent forme, à votre rythme.' },
  { title: 'Choisissez le moment.', label: 'Calendrier', text: 'Déposez un contenu dans le calendrier, puis choisissez son horaire. Le planning garde une vue d’ensemble.' },
  { title: 'Imaginez votre fil.', label: 'Aperçu', text: 'Visualisez la place de votre contenu dans le profil Instagram avant sa publication.' },
] as const;

export function ProductJourney() {
  const id = useId();
  const date = useDemoDate();
  const { ref: journeyRef, step: active, phase, running, reduced, play, pause, showStep } = useProductJourney(date);
  return <Box component="section" ref={journeyRef} id="produit" aria-label="Du brouillon au fil Instagram" data-phase={phase} data-reduced={reduced} data-running={running} className="product-journey" sx={{ pb: { xs: 8, md: 4 } }}>
    <Box sx={{ width: { xs: 'calc(100% - 40px)', md: '85.42%' }, maxWidth: tokens.space.maxWidth, mx: 'auto' }}>
      <Box className="journey-frame">
      <Box className="journey-canvas">
        <Box className="journey-desktop" sx={{ display: { xs: 'none', md: 'block' }, position: 'relative', maxWidth: 'calc((100svh - 140px) * 2.314)', mx: 'auto', '&:before': { content: '""', position: 'absolute', inset: '-4% -6% -8%', background: `radial-gradient(ellipse at 8% 50%,${tokens.color.accent}1A,transparent 60%), radial-gradient(ellipse at 60% 85%,${tokens.color.brand}0D,transparent 55%)`, pointerEvents: 'none' } }}><ProductStage animated phase={phase} date={date ?? undefined} /></Box>
        <Box sx={{ display: { md: 'none' } }}>
          <Tabs value={active} onChange={(_, value: number) => showStep(value)} variant="fullWidth" aria-label="Étapes de la publication" sx={{ mb: 4, bgcolor: 'background.paper' }}>
            {journeySteps.map((step, index) => <Tab key={step.label} label={step.label} id={`${id}-tab-${index}`} aria-controls={`${id}-panel-${index}`} />)}
          </Tabs>
          {journeySteps.map((step, index) => <Box key={step.label} role="tabpanel" id={`${id}-panel-${index}`} aria-labelledby={`${id}-tab-${index}`} hidden={active !== index}>
            <Box role="img" aria-label={`Démonstration : ${step.text}`} sx={{ maxWidth: index === 1 ? 650 : index === 2 ? 260 : 290, mx: 'auto', height: { xs: 480, sm: 520 }, display: 'flex', alignItems: 'center' }}>
              <Box aria-hidden="true" sx={{ width: '100%' }}>{index === 0 ? <DraftPreview animated phase={phase} /> : index === 1 ? <CalendarPreview date={date ?? undefined} animated /> : <PhonePreview animated published={phase === 'published'} />}</Box>
            </Box>
            <Typography variant="h3" component="h2" sx={{ mt: 4, mb: 1 }}>{step.title}</Typography>
            <Typography color="text.secondary">{step.text}</Typography>
          </Box>)}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', columnGap: 3, rowGap: 1, mt: { xs: 3, md: 2 } }}>
        <Typography aria-live={running ? 'off' : 'polite'} sx={{ fontSize: 16, color: 'text.secondary', minWidth: { md: 260 } }}>{phaseLabels[phase]}</Typography>
        {!reduced && <ActionButton variant="text" size="small" startIcon={running ? <Pause /> : phase === 'published' ? <Replay /> : <PlayArrow />} onClick={running ? pause : play}>{running ? 'Mettre en pause' : phase === 'published' ? 'Rejouer le parcours' : 'Lire le parcours'}</ActionButton>}
        {!reduced && <ActionButton variant="text" size="small" startIcon={<SkipNext />} disabled={phase === 'published'} onClick={() => showStep(2)}>Passer l’animation</ActionButton>}
      </Box>
      <Typography sx={{ textAlign: 'center', color: 'text.secondary', fontSize: 14, mt: 1 }}>Simulation du produit · compte, activité et badge fictifs</Typography>
      </Box>
      <Box component="ol" className="journey-steps" sx={{ display: { xs: 'none', md: 'grid' }, gridTemplateColumns: 'repeat(3,1fr)', gap: 6, listStyle: 'none', p: 0, mt: 4, mb: 0 }}>
        {journeySteps.map((step, index) => <Box component="li" key={step.label}>
          <ButtonBase onClick={() => showStep(index)} aria-pressed={active === index} sx={{ display: 'block', width: '100%', textAlign: 'left', pt: 2.5, pb: 1, borderTop: '2px solid', borderColor: active === index ? 'primary.main' : 'divider', transition: 'border-color 180ms ease', '&:focus-visible': { outline: '2px solid', outlineColor: 'primary.main', outlineOffset: 4 } }}>
            <Typography component="h2" variant="h4" sx={{ mb: 1 }}>{step.title}</Typography>
            <Typography color="text.secondary" sx={{ fontSize: 17, maxWidth: '35ch' }}>{step.text}</Typography>
          </ButtonBase>
        </Box>)}
      </Box>
    </Box>
  </Box>;
}
