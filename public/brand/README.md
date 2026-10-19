# Tournesol — by volante

Le symbole `tournesol-symbol.png` conserve la silhouette créée avec l’outil de
génération d’images puis recolorée le 19 octobre 2026. Les prompts successifs
sont dans `tournesol-symbol.prompt.txt` ; le PNG conserve sa provenance.

Le composant `TournesolSymbol` utilise l’alpha du PNG pour masquer le dégradé
cobalt et vert d’eau. Seules les couleurs des pétales tournent ; le
cœur bleu nuit et les points blancs restent fixes. Le mouvement réduit et les
exports utilisent une version statique. Le PNG source reste une matière de
construction du composant, distincte de l’icône exportée.

La palette courante associe cobalt `#3659D9`, bleu nuit `#17264B`, vert d’eau `#8DD9C2` et papier froid `#F5F6FA`. Les tokens du thème en sont la
source de vérité.

Dans le site public, `components/ui/BrandLogo.tsx` compose le symbole et le nom
Tournesol en Futura, avec la signature « by volante ». Les icônes et l’image
sociale sont exportées depuis les mêmes composants MUI sous Storybook avec
`scripts/brand-assets.mjs`. Voir `docs/brand-assets.md` pour leur provenance.
