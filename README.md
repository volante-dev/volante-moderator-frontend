# Tournesol — site public

Présentation de Tournesol, l’espace de publication et de modération Instagram de
Studio Volante. Domaine canonique : **https://tournesol.vlnt.st**.

## Développement

Node 22.12 minimum ; dépendances gérées avec **npm** et `package-lock.json`.

```sh
npm ci
npm run dev
npm run storybook
```

Next.js : http://localhost:3000. Storybook : http://127.0.0.1:6006.
Le site public n’utilise aucune clé de l’application, aucune connexion Instagram
et aucune base de données.

## Architecture

| Répertoire | Responsabilité |
| --- | --- |
| `app/` | Pages serveur, métadonnées, robots, sitemap, icônes et image sociale |
| `theme/` | Tokens Tournesol, thème MUI et fournisseur partagé avec Storybook |
| `components/ui/` | Primitives MUI : boutons, surfaces, marque, sections, accordéons, dialogues |
| `components/product/` | Vues illustratives du produit et modération interactive de démonstration |
| `components/sections/` | Composition éditoriale de la page |
| `components/layout/` | Navigation et pied de page |
| `hooks/` | Parcours animé pilotable et calendrier au jour du visiteur |
| `stories/` | Fondations, variantes, états, interactions et compositions complètes |
| `lib/site.ts` | Identité publique, domaine et liens officiels |
| `tests/` | Contrôles navigateur, accessibilité et référencement |

Les composants visuels sont des dérivés ou des compositions de **MUI**. Les images
utilisent `next/image`. Aucun système concurrent, aucune dépendance au code ou au
thème de `volante-moderator-admin`.

Le design system appartient à Tournesol : Futura, cobalt, bleu nuit, violet rosé
et blanc légèrement grisé. Les mêmes couleurs sont déclinées dans l’admin,
qui conserve ses titres Bebas Light.
Le kit Adobe `mah7tat` fournit Futura PT 400 et 700. Les titres demandent 500 ;
le navigateur choisit actuellement la graisse 400 disponible, sans faux gras.
Ce repli est accepté par l’utilisateur. Ajouter Medium dans le kit suffira
à activer la vraie graisse sans modifier les composants.

La page et Storybook utilisent exactement le même `ThemeProvider`. Les valeurs
durables sont définies dans `theme/tokens.ts`, puis traduites en variantes et
états MUI dans `theme/theme.ts`. `DESIGN.md` décrit leurs règles d’emploi.

## Comportements

Une séquence de 8,2 secondes montre l’import d’une photo, son déplacement vers
la date du jour et son insertion dans une grille Instagram en 4:5. Le calendrier
contient d’autres publications fictives. Le profil Tournesol passe de 128 à 129
publications ; ses compteurs et son badge sont explicitement simulés.

Sur ordinateur, la lecture commence lorsque la scène atteint sa position de
lecture. Elle est cadrée dans la fenêtre et le scroll est temporairement bloqué
pendant les 8,2 secondes. Fin, pause, Échap, « Passer l’animation », focus extérieur
et changement vers une largeur mobile libèrent le défilement. Relecture et étapes
directes restent disponibles. Hors écran ou dans un onglet masqué, la séquence
se met en pause. Sur mobile, elle démarre à la demande sans bloquer le scroll.
Avec `prefers-reduced-motion`,
les étapes restent consultables sans déplacement animé. Sans JavaScript,
la présentation et les photos du profil restent lisibles.

`TournesolSymbol` garde la silhouette et le cœur fixes. Seul le dégradé cobalt–
violet rosé tourne dans les pétales, sur 18 secondes ; il s’arrête hors écran et
dans un onglet masqué. Le mouvement réduit, l’avatar Instagram et les icônes
exportées utilisent sa version statique. Les variantes sont dans Storybook.

La date suit le fuseau local du visiteur, avec mise à jour après minuit et au
retour sur l’onglet. Les stories peuvent fixer la date pour documenter les mois
de quatre, cinq ou six semaines. Aucun horaire de démonstration ne programme
une publication réelle.

La modération utilise uniquement un état React local. Masquer ou rétablir ses
commentaires synthétiques n’envoie aucune requête à Instagram. Les contrôles des
miniatures sont illustratifs, regroupés dans une image sémantique décrite.

## Vérification

```sh
npm run lint
npm run typecheck
npm run build
npm run build-storybook
npx playwright install chromium
npm run test:e2e
```

Les tests lancent le serveur de production sur 3117 si aucun serveur ne tourne.
`PLAYWRIGHT_BASE_URL` vise un serveur existant ;
`PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` permet de réutiliser un Chromium local.

Avec Storybook démarré, `npm run test:storybook` vérifie toutes les stories,
les scénarios de démonstration, le dialogue et son retour de focus.
Les avertissements Vite sur les directives `use client` concernent le catalogue
entièrement exécuté côté client ; Next.js conserve ces frontières dans le site.

## SEO et publication

- Contenu, titres et métadonnées présents dans le HTML initial.
- Un seul H1, `lang="fr"`, canonique centralisée, Open Graph et Twitter.
- `/robots.txt` et `/sitemap.xml` utilisent `lib/site.ts`.
- Les previews Vercel portent `noindex` et interdisent l’exploration.
- Les données structurées décrivent l’opérateur et l’application sans avis,
  tarifs ou certification inventés.
- Les images passent par l’optimisation Next.js ; icônes et image sociale
  statiques. `npm run assets:brand` les régénère depuis Storybook.

Sur Vercel : framework Next.js, racine du dépôt, installation `npm ci`, compilation
`npm run build`, Node 22, domaine `tournesol.vlnt.st`. Storybook est un artefact
séparé (`storybook-static`), absent du bundle public.

La page n’affirme ni approbation Meta ni activation générale de la publication.
Les captures marketing ne remplacent pas les enregistrements réels demandés
pour la revue Meta.
