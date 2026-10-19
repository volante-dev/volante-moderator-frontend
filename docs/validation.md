# Validation du site public — 19 octobre 2026

## Orchidée électrique — version préparée pour push

- Accent #E15EFF, fond clair #F6DCFF, survol #D659F7, communs au site et à
  l’admin. Contrastes avec le texte bleu nuit : 5,12:1, 11,73:1 et 4,69:1.
- Lint, TypeScript, builds Next.js des deux interfaces et build Storybook réussis.
- 23 scénarios publics passent dans Brave, avec trois exclusions selon
  l’appareil ; deux scénarios admin couvrent douze captures desktop/mobile.
- Les 38 stories se rendent ; interactions et accessibilité du dialogue validées.
- Icônes et image sociale réexportées depuis les mêmes composants MUI.
  Le PNG source du symbole reste la source de sa silhouette ; les pétales sont
  colorés par le dégradé du composant. La provenance des exports est embarquée.
- Captures et revue de finition `ship` dans `.impeccable/review/oct19-electric/`.
  Aucun débordement horizontal dans les trois formats publics contrôlés.

Les sections suivantes conservent l’historique des révisions précédentes.

## Décollage et pose — 19 octobre 2026

- Remplace l’essai de flou à la demande de l’utilisateur : aucun filtre sur
  la photo. Décollage jusqu’à 7%, transfert ease-in-out et ombre portée qui
  s’efface à la pose. La pause conserve la position et le relief courants.
- Lint, TypeScript et build de production réussis. Les cinq scénarios existants
  du parcours passent dans Brave, avec trois exclusions selon l’appareil.
- Captures desktop/mobile et mesures dans `.impeccable/review/oct19-lift/` :
  échelle 1,06466 au décollage capturé, ombre visible sur les deux trajets,
  aucun filtre pendant toute la séquence et aucune ombre résiduelle à l’arrivée.
- Mouvement réduit, pause/reprise, déblocage du scroll et accès mobile conservés.
  Aucune erreur JavaScript ni aucun débordement horizontal relevé.
- Revue de finition : `ship` dans `oct19-lift/finish-review.md`.

## Essai de flou de mouvement — retiré le 19 octobre 2026

Les mesures ci-dessous et le rapport associé décrivent l’essai antérieur,
remplacé par le décollage ; ils ne décrivent plus l’effet livré.

- Lint, TypeScript et build de production réussis après l’ajout.
- Cinq tests existants du parcours réussis dans Brave ; trois exclusions liées
  aux scénarios propres à l’ordinateur ou au mobile.
- Capture des deux trajets, de la pause, de l’arrivée et de la vue mobile dans
  `.impeccable/review/oct19-motion-blur/`. Les mesures relèvent environ 4,43 px
  et 4,78 px de flou à l’écran en transit, puis aucun filtre à la pause et à
  l’arrivée. Le téléphone et le calendrier restent nets.
- Mouvement réduit sans trajet ni flou ; aucun débordement horizontal ni erreur
  JavaScript dans les vues contrôlées. La prise de capture ne déplace pas la page,
  car une sortie de la position bloquée interrompt volontairement le parcours.
- Revue de finition : `ship`, rapport dans
  `.impeccable/review/oct19-motion-blur/finish-review.md`.

## Révision précédente : palette et pétales

- `npm run lint`, `npm run typecheck` et `npm run build` : réussis.
- `npm run build-storybook` : réussi, 38 stories.
- Playwright dans Brave 155.0.8059.85 : 23 scénarios réussis, trois exclusions
  correspondant aux scénarios propres à l’ordinateur ou au mobile.
- Build de production : quatre contrôles ciblés réussis (parcours dans
  une fenêtre de 1280 × 650, libération du scroll et animation des pétales), deux
  exclusions des scénarios propres à l’ordinateur sur le projet mobile.
- Axe : aucune violation WCAG A/AA détectée sur les vues desktop/mobile testées
  et dans le dialogue Storybook ouvert. Ceci ne remplace pas un audit humain.
- Catalogue : les 38 stories se rendent sans erreur JavaScript ; masquage,
  rétablissement, fermeture du dialogue par Échap et retour de focus vérifiés.
- Captures : 390, 1280 et 1440px ; aucun débordement horizontal constaté. Les
  scènes de 1280 × 650 et 1280 × 550 restent entièrement dans la fenêtre.
- Import visible, pause/reprise, relecture, calendrier de quatre à six semaines,
  année bissextile, passage au mois suivant à minuit et insertion unique du média
  vérifiés. Ratios mesurés des miniatures : 0,8 (4:5).
- Le scroll reste à la même position après une molette pendant la lecture.
  Fin, pause, Échap, saut de l’animation, focus extérieur, passage au mobile et
  préférence de mouvement réduit rendent le défilement. La lecture ne se relance
  pas automatiquement à la seconde visite de la section.
- La couleur des pétales tourne ; l’image et le cœur restent fixes. Hors écran
  et avec mouvement réduit, la rotation s’arrête. Les deux états capturés et les
  mesures sont dans `.impeccable/review/oct19-orchid/`.
- La revue précédente (`oct19/finish-review.md`) concernait la palette cyan.
  La revue indépendante de cette révision conclut `ship` : aucun correctif
  matériel dans la portée des captures, du code et des mesures examinés.
  Rapport : `.impeccable/review/oct19-orchid/finish-review.md`.
- Les six rasters livrés conservent une provenance embarquée.

Palette de l’admin : lint, TypeScript et build réussis ; deux contrôles navigateur
réussis couvrent navigation au clavier, vues ordinateur/mobile, calendrier,
menus, fenêtres frostées et connexion. Les données viennent des fixtures locales.
Le changement de couleur ne constitue pas un test de publication Instagram réelle.

Le site et l’admin n’ont pas été déployés au cours de cette révision.

L’audit du 18 octobre (`npm audit --omit=dev`) ne relevait aucune vulnérabilité
dans les dépendances de production. Aucune dépendance n’a changé le 19 octobre.
L’audit complet signalait cinq entrées liées à `braces` dans la chaîne
de développement ESLint/fast-glob/micromatch (GHSA-vfj7-8cjw-p6xm). Elles ne sont
pas incluses dans le runtime public. La solution automatique proposée rétrograde
ESLint Next à la version 14 ; elle n’a pas été appliquée à ce projet Next 16.

Futura Medium n’est pas encore fournie par le kit Adobe actuel. Le repli vers la
Futura disponible a été expressément accepté ; aucun fichier de police système
n’est redistribué et aucune graisse artificielle n’est générée.
