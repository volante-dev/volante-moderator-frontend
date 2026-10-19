import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Section } from '@/components/ui/Section';
import { InfoAccordion } from '@/components/ui/InfoAccordion';
import { site } from '@/lib/site';

export function ControlSection() {
  return <Section aria-labelledby="control-title" sx={{ pt: { xs: 3, md: 7 }, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '.85fr 1.15fr' }, gap: { xs: 4, md: 10 } }}>
    <Typography variant="h2" id="control-title" sx={{ maxWidth: '12ch' }}>Le compte est à vous. Les décisions aussi.</Typography>
    <Box>
      <InfoAccordion id="formats" title="Photos, carrousels et Reels">
        <Typography>Préparez les médias et la légende dans un brouillon. Un avertissement de format vous aide à privilégier le 4:5 pour les publications et les couvertures de Reels, et le 9:16 pour les vidéos Reels.</Typography>
      </InfoAccordion>
      <InfoAccordion id="publication" title="Un brouillon reste un brouillon">
        <Typography>L’enregistrement n’envoie rien sur Instagram. La publication nécessite une programmation, les autorisations du compte et l’activation du service pour ce compte.</Typography>
      </InfoAccordion>
      <InfoAccordion id="connexion" title="Une connexion que vous autorisez">
        <Typography>Dans l’application, vous connectez votre compte Instagram professionnel et accordez les permissions nécessaires aux fonctions utilisées. Cette présentation publique n’accède à aucun compte Instagram.</Typography>
      </InfoAccordion>
      <InfoAccordion id="donnees" title="Vos données, expliquées simplement">
        <Typography>Les médias, les légendes et les commentaires servent aux fonctions de publication et de modération. La politique de confidentialité détaille leur utilisation, leur conservation et la demande de suppression.</Typography>
        <Link href={site.privacyUrl} sx={{ display: 'inline-block', mt: 2, py: 1 }}>Lire la politique de confidentialité</Link>
      </InfoAccordion>
    </Box>
  </Section>;
}
