---
name: Tournesol — site public
description: Un atelier lumineux pour présenter les contenus et les échanges Instagram.
colors:
  brand: "#3659D9"
  brand-deep: "#17264B"
  brand-light: "#5774E2"
  accent: "#E15EFF"
  accent-light: "#F6DCFF"
  accent-hover: "#D659F7"
  paper: "#F5F6FA"
  white: "#FFFFFF"
  ink: "#17264B"
  muted: "#59647B"
  line: "#DCE1ED"
  field: "#EBEEF5"
  error: "#A3382F"
  warning: "#6A4D1C"
  inverse-muted: "#CCD5F0"
  phone: "#222630"
  instagram: "#121212"
  native-line: "#E3E3E3"
  native-muted: "#575757"
typography:
  display:
    fontFamily: '"futura-pt", "Futura-Medium", Futura, "Helvetica Neue", sans-serif'
    fontSize: "clamp(3rem,6.25vw,6rem)"
    fontWeight: 500
    lineHeight: 0.99
    letterSpacing: "-.035em"
  headline:
    fontFamily: '"futura-pt", "Futura-Medium", Futura, "Helvetica Neue", sans-serif'
    fontSize: "clamp(2.5rem,4.6vw,4.5rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-.03em"
  title:
    fontFamily: '"futura-pt", "Futura-Medium", Futura, "Helvetica Neue", sans-serif'
    fontSize: "clamp(1.65rem,2.5vw,2.5rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-.02em"
  small-title:
    fontFamily: '"futura-pt", "Futura-Medium", Futura, "Helvetica Neue", sans-serif'
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: '"futura-pt", "Helvetica Neue", Arial, sans-serif'
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.55
  body-small:
    fontFamily: '"futura-pt", "Helvetica Neue", Arial, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: '"futura-pt", "Helvetica Neue", Arial, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    letterSpacing: "0"
  caption:
    fontFamily: '"futura-pt", "Helvetica Neue", Arial, sans-serif'
    fontSize: ".875rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  control: "4px"
  surface: "16px"
  dialog: "12px"
  phone: "44px"
  phone-screen: "36px"
spacing:
  half-unit: "4px"
  unit: "8px"
  double-unit: "16px"
  triple-unit: "24px"
  quadruple-unit: "32px"
  six-units: "48px"
  section-mobile: "64px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "10px 22px"
  button-primary-hover:
    backgroundColor: "{colors.brand-deep}"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.brand-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "10px 22px"
  button-accent-hover:
    backgroundColor: "{colors.accent-hover}"
  button-outlined:
    backgroundColor: "transparent"
    textColor: "{colors.brand}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "10px 22px"
  button-text:
    backgroundColor: "transparent"
    textColor: "{colors.brand}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "10px 22px"
  field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "16.5px 14px"
  surface-raised:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
  surface-flat:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
  surface-ink:
    backgroundColor: "{colors.brand-deep}"
    textColor: "{colors.white}"
    rounded: "{rounded.surface}"
  dialog:
    backgroundColor: "rgba(245,246,250,.88)"
    textColor: "{colors.ink}"
    rounded: "{rounded.dialog}"
  navigation:
    textColor: "{colors.ink}"
  tab-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.brand-deep}"
    rounded: "{rounded.control}"
  accordion:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "0"
  phone-preview:
    backgroundColor: "{colors.phone}"
    rounded: "{rounded.phone}"
  phone-screen:
    backgroundColor: "{colors.white}"
    textColor: "{colors.instagram}"
    rounded: "{rounded.phone-screen}"
---

# Design System: Tournesol — site public

## Overview

**Creative North Star: "Lumière Tournesol"**

Tournesol possède son propre système de design public. Le cobalt, le bleu nuit, le rose-violet et le papier froid soutiennent une présentation calme, ample et visuelle. Les photographies botaniques et le symbole floral aux pétales traversés par un dégradé cobalt et rose-violet donnent une présence reconnaissable au produit ; les grandes Futura en casse naturelle lui donnent sa voix.

La matière reste discrète : les panneaux émergent du fond commun par une lumière en haut et à gauche et une ombre souple en bas et à droite. Les commandes restent plates, les sélections sont lisibles et les dialogues utilisent un verre frosté. La préparation des contenus et la modération ont la même importance visuelle. Le mouvement accompagne la compréhension ; le contenu reste complet sans lui.

**Key Characteristics:**

- Un système Tournesol indépendant, sans dépendance au code du dépôt admin.
- Fond et faces des panneaux de même couleur, relief externe doux.
- Futura pour les titres et le corps ; repli de graisse documenté, sans faux gras.
- Commandes plates, sélections rose-violet et focus visible.
- Dégradé tournant dans les pétales fixes, centre bleu nuit immobile et variante statique.
- Compositions de produit MUI, photographies et données explicitement démonstratives.
- Même ThemeProvider dans Next.js et Storybook ; contenu accessible sans animation.

Le système public reste indépendant depuis la séparation approuvée le 18 octobre 2026. Le 19 octobre, le choix A Cobalt et le retrait de son jaune conduisent d’abord à une palette cobalt et cyan commune à l’admin. La révision approuvée ensuite remplace le cyan par le rose-violet et anime le dégradé des pétales ; la composition A et la typographie propres à chaque interface sont conservées. Les sources de vérité sont `theme/tokens.ts`, `theme/theme.ts`, `theme/ThemeProvider.tsx`, `app/globals.css`, les composants et leurs stories. Le domaine public est `https://tournesol.vlnt.st` ; les dépendances sont gérées avec npm. `PRODUCT.md` porte la vérité produit et `.impeccable/surfaces/app-page-tsx.md` la composition de la page. Les fichiers de `.impeccable/references/` sont des preuves historiques, pas l’autorité visuelle actuelle.

La [revue du 19 octobre](.impeccable/review/oct19/finish-review.md) conclut `ship` sur la précédente démonstration et la palette cyan des deux interfaces. Ses vingt captures publiques et admin, les états du parcours et l’image Open Graph restent des preuves historiques. La [revue indépendante de la révision rose-violet](.impeccable/review/oct19-orchid/finish-review.md), des pétales animés et du défilement temporairement bloqué conclut également `ship` ; les nouvelles captures sont dans `.impeccable/review/oct19-orchid/`. Les tests ciblés passent sur le public (23 réussis, 3 ignorés dans Brave) et l’admin (2 réussis). La revue s’appuie sur le code, les captures et les mesures, sans inspection vidéo ni requalification des preuves historiques.

## Colors

La palette associe un cobalt franc, un bleu nuit et un rose-violet lumineux à des neutres froids. Les valeurs normatives sont dans le frontmatter ; les noms ci-dessous décrivent leur usage. Les slugs documentaires `brand-deep`, `brand-light`, `accent-light`, `accent-hover` et `inverse-muted` correspondent aux tokens camelCase du thème.

### Primary

- **Cobalt Tournesol** (`brand`) : action principale, liens, progression active et focus global.
- **Bleu nuit** (`brand-deep`) : grands titres, surface encre, texte sur rose-violet, centre fixe du symbole et survol du bouton principal.
- **Cobalt clair** (`brand-light`) : contour de focus des boutons et barre de défilement.

### Secondary

- **Rose-violet Tournesol** (`accent`) : bouton secondaire contenu, onglet et jour sélectionnés, sélection de texte et couleur du dégradé des pétales.
- **Rose-violet clair** (`accent-light`) : teinte de fond disponible dans les fondations du système ; elle n’établit pas une nouvelle famille de surfaces dans la page.
- **Rose-violet au survol** (`accent-hover`) : réponse du bouton contenu rose-violet et couleur du dégradé des pétales.

### Neutral

- **Papier froid** (`paper`) : page, faces des panneaux et repli opaque du verre.
- **Blanc** (`white`) : texte sur cobalt ou bleu nuit et écran interne du téléphone.
- **Encre nuit** (`ink`) et **encre secondaire** (`muted`) : contenu principal et descriptions pleinement opaques.
- **Gris de séparation** (`line`) : contours de champs, grille, séparateurs de commentaires et accordéons.
- **Fond de champ** (`field`) : saisies MUI du catalogue.
- **Encre inverse atténuée** (`inverse-muted`) : texte secondaire sur le chapitre Studio au fond bleu nuit.
- **Cadre mat** (`phone`), **encre native** (`instagram`), **gris natif clair** (`native-line`) et **gris natif secondaire** (`native-muted`) : exclusivement la simulation de profil dans le téléphone.

Les couleurs sémantiques `error` et `warning` viennent du thème MUI. Elles ne sont pas des accents de marque. Le bleu du badge Instagram fictif appartient à la simulation publique, explicitement nommée ; il ne constitue pas une preuve de vérification Meta.

**The Shared Face Rule.** Le fond de page et les faces des panneaux relevés utilisent `paper`. Leur séparation vient du relief externe, pas d’un dégradé appliqué à la face.

Les dégradés restent des traitements de marque autorisés : halos rose-violet et cobalt derrière la scène produit et le symbole du chapitre Studio, dégradé conique dans les seuls pétales. Les halos ne remplissent ni les panneaux, ni les textes, ni les actions ; les faces et commandes conservent leurs aplats. Les rampes OKLCH du sidecar sont synthétisées pour l’aperçu documentaire ; elles ne créent pas de nouvelles couleurs de production.

## Typography

**Display Font:** Futura PT, puis Futura-Medium, Futura, Helvetica Neue et sans-serif. La demande de titres est Medium (500).

**Body Font:** Futura PT, puis Helvetica Neue, Arial et sans-serif, en Regular (400). La graisse forte (700) existe dans le kit ; elle ne remplace pas les titres demandés.

Le kit Adobe `mah7tat` est chargé par `app/layout.tsx` et `.storybook/preview-head.html`. Il fournit actuellement seulement 400 et 700. Dans la famille Futura PT, la demande CSS 500 se résout donc vers 400 ; l’utilisateur a explicitement accepté ce repli (« fais avec ce que tu as »). La chaîne de familles ne garantit pas que la fonte nommée Futura-Medium soit chargée. `MuiCssBaseline` applique `fontSynthesis: none`.

### Hierarchy

- **Display / MUI h1** : titre principal, échelle fluide et interligne très compact.
- **Headline / h2** : grands chapitres ; même famille, densité légèrement plus ouverte.
- **Title / h3** : titres de démonstration, marque et sous-ensembles.
- **Small title / h4** : étapes du parcours et titre du panneau de commentaires.
- **Body / body1** : texte courant ; **body-small / body2** : texte secondaire compact.
- **Label / button** : commandes en casse naturelle, sans espacement ajouté ; **caption** : légendes, identités de démonstration et mentions.

Les titres h1–h3 ont des retours équilibrés. Les largeurs de lecture sont choisies selon le contexte : descriptions de (35–48ch), contenu déplié d’accordéon jusqu’à (70ch). Le titre du dialogue utilise une taille locale de (28px), la navigation desktop (15px). Ces réglages de composition ne remplacent pas la rampe du thème.

**The Available Futura Rule.** Demander la graisse 500 pour les titres et conserver `fontSynthesis: none`. Tant que le kit ne fournit que 400 et 700, accepter le rendu 400 validé par l’utilisateur ; ne pas présenter ce repli comme une vraie fonte Medium chargée.

Le profil simulé utilise une pile native (`-apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif`) à l’intérieur du téléphone. Ses mesures en `cqw` évoluent avec sa largeur. Cette exception imite le produit représenté ; elle ne fournit aucune police de titre pour Tournesol.

## Layout

Le rythme vient de l’unité MUI (8px), avec des demi-pas quand nécessaire. Le composant `Section` utilise une largeur maximale de (1312px), une largeur de (85.42%) à partir de `md`, puis `calc(100% - 40px)` en dessous, soit des gouttières de (20px). Son espacement vertical par défaut est de (64px) sur petit écran et de (112px) à partir de `md` ; chaque chapitre peut l’ajuster explicitement.

Les breakpoints MUI sont conservés : `xs` (0px), `sm` (600px), `md` (900px), `lg` (1200px), `xl` (1536px). Le passage structurant est `md` : navigation horizontale et grande composition à trois objets au-dessus ; menu temporaire MUI et vues de produit sous onglets au-dessous. Le header mesure (84px) sur petit écran et (80px) à partir de `md` ; il n’est pas une barre fixe.

Les chapitres de modération et d’explication passent de `.85fr 1.15fr` à une colonne, avec un intervalle desktop de (80px). Le chapitre Studio au fond bleu nuit utilise `1.2fr .8fr`, puis s’empile. Ces grilles décrivent les compositions livrées, sans imposer la même répartition à chaque futur écran.

La scène du produit conserve un rapport (1312 / 567) et place le brouillon, le calendrier et le téléphone à des largeurs relatives. Les vues internes utilisent `cqw` ; elles représentent une interface sans fabriquer une rangée de petites commandes interactives. Sur mobile, les trois onglets donnent accès à un état lisible et à son texte explicatif. La légende de démonstration reste visible.

Le parcours est une séquence finie de (8.2s), pilotée par `requestAnimationFrame`. Sur ordinateur, à partir de (900px), il démarre automatiquement une seule fois en descendant lorsque le cadre atteint sa position de lecture centrée, ou le décalage de lecture d’une ancre. Le canvas est observé avec un seuil de (35%) ; ce seuil seul ne déclenche pas la lecture. La scène s’adapte aussi aux écrans peu hauts : sa largeur maximale est `calc((100svh - 140px) * 2.314)`. Le cadre comprend l’image produit, les commandes et la mention de simulation.

Pendant la lecture desktop, le cadre est centré avec une marge supérieure d’au moins (16px) et le défilement de page est temporairement bloqué. La fin, la pause, « Passer l’animation », une étape directe, Échap, le focus hors du parcours, un déplacement de page hors de la position retenue, la sortie d’écran, un onglet masqué, le passage sous (900px) ou le mouvement réduit libèrent ce blocage. Les propriétés de défilement initiales sont restaurées, y compris leur priorité CSS ; le zoom du navigateur reste possible. La reprise et la relecture restent volontaires après interruption. Sur mobile, la lecture est volontaire et ne bloque jamais le défilement. Avec mouvement réduit, le parcours présente l’état final statique et conserve l’accès direct aux étapes.

## Elevation & Depth

Les grandes faces mates partagent le fond de page. Le relief externe porte les panneaux ; le verre et le cadre du téléphone sont des matières distinctes. `Surface` dérive de MUI Paper, sans image de fond ni élévation MUI implicite.

### Shadow Vocabulary

- **Raised** : `-12px -12px 22px rgba(255,255,255,.98), 12px 14px 24px rgba(41,55,88,.13)` ; lumière continue en haut et à gauche, ombre douce en bas et à droite.
- **Glass** : `-8px -8px 24px rgba(255,255,255,.7), 16px 20px 42px rgba(23,38,75,.18)` ; dialogue et variante verre de Surface. Le filtre est `blur(24px) saturate(1.2)`, avec un repli opaque `paper` si le filtre n’est pas pris en charge.
- **Phone** : `10px 14px 24px rgba(24,36,62,.2), -2px -2px 3px rgba(255,255,255,.9)` ; réservé à l’objet téléphone.

**The Flat Control Rule.** Les boutons restent sans ombre au repos et au survol. Le relief appartient aux surfaces ; un focus visible ne doit pas être confondu avec une élévation.

Les boutons font évoluer le fond et la couleur en (180ms), avec `cubic-bezier(.16,1,.3,1)`. Les séparateurs des étapes utilisent (180ms ease). Le parcours révèle l’image importée, la transporte vers le calendrier, réarrange le fil puis insère la nouvelle photo. Les deux transferts utilisent une interpolation cubique ease-in-out ; le réarrangement du fil conserve son interpolation cubique sortante. Les tokens `normal` et `reveal` sont conservés dans le thème mais ne définissent pas la durée de cette séquence. Le mode mouvement réduit désactive le trajet, rend le scroll immédiat et réduit les transitions globales à leur état final.

La photo se décolle avant chaque transfert : agrandissement centré jusqu’à (7%), élévation de (12px) et ombre portée bleu nuit orientée vers le bas et la droite. Le trajet commence après les premiers (12%) de sa durée et finit à (88%), laissant le temps de décoller et de se poser. L’ombre atteint un décalage de (4px, 14px), une diffusion de (20px) et une opacité de (.22), compensés selon l’échelle FLIP. L’agrandissement et l’ombre disparaissent progressivement à la pose ; une pause conserve la position et l’élévation courantes. Le flou de mouvement précédemment essayé est retiré : la photo reste nette. Le mouvement réduit présente les étapes fixes sans décollage.

## Shapes

Le rayon de contrôle gouverne boutons, champs, onglets et petits contenants internes. Les panneaux utilisent le rayon de surface ; les dialogues, le rayon de verre. La largeur minimale des cibles ActionButton et IconButton est adaptée par MUI ; leurs hauteurs minimales sont de (44px), et IconButton a aussi une largeur minimale de (44px).

Le téléphone possède son rayon extérieur et son écran intérieur propres. Les avatars et les points de statut peuvent être circulaires. L’accordéon est sans arrondi, séparé par une seule ligne basse. Les contours fins servent l’organisation interne ; ils ne doivent pas se transformer en rebord embossé autour d’une face relevée.

Le token `radius.track` (8px) est présenté dans les fondations Storybook, mais les groupes d’onglets actuels n’emploient pas un conteneur arrondi distinct : ne pas leur attribuer la piste de l’ancien admin.

## Components

Tous les composants visuels sont des dérivés ou des compositions de MUI. `theme/ThemeProvider.tsx` inclut CssBaseline et sert à la fois Next.js et Storybook. Le catalogue est organisé en Fondations, Composants, Produit et Pages ; il inclut la page complète et les sections. `.storybook/preview.tsx` active les contrôles d’accessibilité avec `a11y.test: error`.

### Buttons

`ActionButton` est le dérivé unique de MUI Button. La variante par défaut est `contained`, avec élévation désactivée. Le bouton cobalt porte du texte blanc ; le bouton secondaire rose-violet porte du texte bleu nuit. `outlined` et `text` gardent le cobalt principal. La taille, les états `loading` et `disabled` et la sémantique de lien via `href` restent ceux de MUI. Les stories couvrent ces six états ou variantes.

Le focus du bouton utilise un contour cobalt clair de (3px), décalé de (4px). Les autres éléments focalisables reçoivent le cobalt principal. Les boutons restent plats au survol ; aucune translation de levée n’est ajoutée. Les variantes de taille et les usages locaux peuvent adapter le remplissage, comme les actions textuelles de la démo de modération.

### Cards / Containers

`Surface` expose `raised`, `flat`, `glass` et `ink`. Les variantes raised et flat partagent le fond papier ; seule raised porte l’ombre de panneau. Ink est un aplat bleu nuit avec texte blanc ; glass reprend la matière du dialogue. Le composant n’impose pas de padding : l’appelant choisit la densité, par exemple (20px) puis (32px) dans la modération. Ces surfaces ne changent pas d’élévation au survol.

### Inputs / Fields

Les champs sont des MUI TextField/OutlinedInput, présentés dans la story `Champs`. Le fond est `field`, le contour `line`, le rayon celui des contrôles. Au focus, MUI renforce le contour avec la couleur sémantique ; l’erreur conserve son libellé et son aide textuelle. Le champ désactivé conserve l’état natif. Les petits champs visibles dans la scène produit sont des représentations, pas des formulaires de saisie.

### Navigation and tabs

`SiteHeader` associe le symbole et la signature « by volante », deux liens d’ancrage et l’accès à l’application. Sur mobile, IconButton ouvre un Menu MUI avec les mêmes destinations. Il n’y a ni navigation latérale ni suivi automatique d’une rubrique active. Les liens ont un soulignement au survol ; le lien d’évitement apparaît au focus.

Les onglets sont des MUI Tabs/Tab : groupe d’au moins (48px), onglets d’au moins (44px), indicateur linéaire supprimé, sélection en aplat rose-violet et texte bleu nuit. Leur focus est un contour cobalt de (3px), intégré par un décalage de (-3px). Les labels, identifiants et panneaux associés portent les relations ARIA ; le clavier suit MUI. Aucune famille de chips n’est utilisée par le site livré.

### Frosted dialog

`GlassDialog` compose MUI Dialog, DialogTitle, DialogContent, DialogActions et IconButton. Il utilise `fullWidth`, `maxWidth="sm"`, un titre lié par `aria-labelledby`, une fermeture nommée « Fermer » et des actions qui peuvent revenir à la ligne. MUI possède le piège de focus, Échap et le retour de focus. Le composant est démontré dans Storybook ; aucun dialogue n’est ouvert par la page d’accueil actuelle. La capture documentaire du dialogue vérifie son rendu statique, pas une séquence filmée.

### Information accordion

`InfoAccordion` est plat et transparent. Le titre est de (21px), puis (24px) sur desktop ; un SVG plus MUI tourne de (45deg) à l’ouverture. Le contenu déplié utilise l’encre secondaire et une largeur de lecture contenue. Les frontières sémantiques entre question et réponse restent celles de MUI Accordion.

### Product demonstrations

`DraftPreview`, `CalendarPreview` et `PhonePreview` forment `ProductStage`. Les images photographiques de démonstration sont des assets raster livrés avec leur provenance ; le calendrier et le profil sont des compositions sémantiques MUI, pas une capture unique aplatie. Les détails de la scène sont regroupés comme une image descriptive accessible, sans faux tab stops. Le profil de démonstration utilise `tournesol` / « Tournesol », le symbole floral, un badge simulé et des compteurs fictifs explicitement autorisés pour cette présentation : (128 → 129) publications, (12,4 k) abonnés et (642) abonnements. « Compte de démonstration » figure dans le téléphone et « Simulation du produit · compte, activité et badge fictifs » reste visible sous la scène. Cette exception ne s’applique pas aux métadonnées de comptes dans l’admin.

Le calendrier suit le jour local du visiteur avec `useDemoDate`, rafraîchi toutes les (30s), au retour du focus et lors des changements de visibilité. Il affiche le mois complet sur quatre, cinq ou six semaines, avec d’autres publications fictives et la nouvelle photo dans la cellule d’aujourd’hui. Les coordonnées du trajet sont mesurées sur cette cellule réelle, sans date ni position figées.

Le fil commence avec huit photographies existantes distinctes de la nouvelle image : les tuiles 1 à 8 de la planche-contact, sans la tuile 0. Elles se déplacent pour libérer la première position, où arrive la photo importée. Toutes les vignettes du fil, anciennes et nouvelle, utilisent le rapport (4:5). Les étapes directes montrent des états stables ; la simulation ne déclenche aucun envoi réel.

`ModerationDemo` permet de masquer et de rétablir trois commentaires synthétiques. Les onglets Visibles/Masqués, l’état vide et le message `aria-live="polite"` rendent le résultat compréhensible. Les mutations restent dans l’état local du navigateur. Le site n’accède à aucun compte Instagram et ses vues n’attestent pas l’activation d’une publication ou une approbation Meta.

### Symbole Tournesol

`TournesolSymbol` conserve la silhouette et le centre du PNG généré `public/brand/tournesol-symbol.png`, ainsi que sa transparence et son prompt exact dans `public/brand/tournesol-symbol.prompt.txt`. Son alpha est croisé avec un masque excluant le disque central : seul le champ de couleur conique tourne à l’intérieur des pétales fixes. Le bleu nuit du centre et ses graines blanches restent immobiles. Le dégradé traverse cobalt, cobalt clair, rose-violet et rose-violet au survol sur un tour linéaire de (18s).

**The Fixed Flower Rule.** Animer la couleur des pétales, jamais la silhouette ni le centre du tournesol. Suspendre la rotation hors écran ou lorsque l’onglet est masqué ; conserver un dégradé statique en mouvement réduit ou avec `animated={false}`.

La marque du header et le symbole du chapitre Studio réutilisent ce composant. L’inclinaison fixe du symbole Studio reste un choix de composition, pas une rotation du logo. L’avatar du téléphone est statique. Les stories couvrent les pétales animés, le fond bleu nuit, la variante statique et l’icône. Les icônes exportées et l’image Open Graph sont statiques. `ShareCard` réutilise la marque, la typographie et ProductStage dans une composition (1200 × 630). La story partage le thème ; `npm run assets:brand` capture l’image sociale et les icônes avec mouvement réduit en conservant leur provenance. Les snippets du sidecar sont des transcriptions HTML/CSS autonomes pour le panneau documentaire ; les composants React et leurs stories restent l’autorité d’interaction.

## Do's and Don'ts

### Do:

- Do réutiliser `theme/tokens.ts`, `theme/theme.ts` et les dérivés ou compositions MUI, avec le même ThemeProvider dans la page et Storybook.
- Do conserver Futura, la casse naturelle et le repli 400 accepté pour la demande de titres 500, sans synthèse de graisse.
- Do garder les faces relevées de la couleur du fond, avec leur lumière supérieure et gauche, et les commandes plates.
- Do réserver les arrondis des dialogues et du téléphone à ces matières ; employer le rayon de contrôle pour les actions et sélections.
- Do rendre les états de démonstration compréhensibles au clavier et sans animation, avec leurs libellés explicites.
- Do conserver les pétales fixes au dégradé cobalt et rose-violet, le centre bleu nuit immobile, la signature « by volante » et la provenance des images publiées.
- Do laisser interrompre le parcours desktop et restaurer le défilement ; garder le parcours mobile volontaire et sans blocage.

### Don't:

- Don’t réintroduire Bebas ou les métriques de la maquette antérieure dans les titres du nouveau système Tournesol.
- Don’t importer le thème, la navigation latérale, les compteurs ou les règles de l’admin comme autorité du site public.
- Don’t remplacer MUI par un second système de composants visuels ni transformer les contrôles illustrés en faux boutons actifs.
- Don’t étendre les halos locaux aux fonds des panneaux, aux textes ou aux boutons.
- Don’t transformer les données de démonstration, les interactions locales ou une capture fixe en preuve d’accès Instagram réel, d’approbation Meta ou de lecture vidéo validée.


### Accent renforcé — 19 octobre 2026

Le dernier retour utilisateur demande un violet rosé plus vif. L’accent courant
est l’orchidée électrique #E15EFF, accompagné du fond #F6DCFF et du survol
#D659F7. Les contrastes avec le texte bleu nuit sont respectivement 5,12:1,
11,73:1 et 4,69:1. Les revues cyan et orchidée pastel citées plus haut restent
historiques. La revue de finition de cette retouche est conservée dans le dépôt
public sous `.impeccable/review/oct19-electric/finish-review.md` (`ship`).
