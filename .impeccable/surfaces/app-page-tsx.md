---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/globals.css","app/layout.tsx","components/sections/ProductJourney.tsx","components/sections/StudioSection.tsx","components/product/ProductStage.tsx","components/ui/TournesolSymbol.tsx","hooks/useProductJourney.ts","hooks/useDemoDate.ts","components/product/ModerationDemo.tsx","theme/tokens.ts","theme/theme.ts","stories/TournesolSymbol.stories.tsx",".storybook/preview.tsx"]
---

# Présentation publique de Tournesol

Mode : Persuade. Route : `/`. Le visiteur découvre les deux activités du produit,
comprend qui l’exploite et peut rejoindre l’application. Site indépendant de l’admin.

## Direction contract

THESIS: Un même contenu traverse le brouillon, le calendrier et la projection du
profil ; l’expérience montre le produit plutôt qu’une grille de promesses.

OWN-WORLD: Papier froid, cobalt, bleu nuit et rose-violet ; titres Futura Medium demandés
avec repli 400 accepté, surfaces mates relevées en haut et à gauche, commandes
plates, téléphone lisible. La palette A Cobalt avec l’accent rose-violet remplace
les couleurs de la maquette initiale. Un dégradé cobalt et rose-violet tourne
dans les pétales fixes du symbole ; son centre bleu nuit reste immobile.

STORY: Préparer, choisir un moment, visualiser son fil ; puis examiner les échanges,
comprendre l’usage des données et découvrir Studio Volante avant de se connecter.

FIRST VIEWPORT: Navigation fine, titre central monumental sur deux lignes ; grand
calendrier au centre, brouillon à gauche, iPhone à droite. « Se connecter » en haut
à droite ; « Découvrir Tournesol » sous l’introduction. Données de démonstration nommées.

FORM: A — Du brouillon au fil, candidat 4, seed ba42df64. Maquette approuvée :
`.impeccable/mocks/decision/tournesol-public/a-draft-to-feed.png`.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Signature interaction

Une séquence finie de 8,2 secondes révèle l’image importée, la transporte vers
la cellule d’aujourd’hui du calendrier, réarrange le fil et l’insère en première
position. Sur ordinateur dès 900 px, la lecture automatique unique commence
en descendant lorsque le cadre atteint sa position de lecture centrée ou le
décalage d’une ancre. Le seuil de visibilité du canvas (35 %) ne suffit pas à
déclencher la lecture. Le cadre est centré et sa scène s’ajuste à la hauteur
disponible, avec une largeur maximale de `calc((100svh - 140px) * 2.314)`.

La photo reste nette : le flou de mouvement essayé est retiré. Chaque transfert
commence par un décollage (agrandissement centré jusqu’à 7%, élévation de 12 px,
ombre bleu nuit portée vers le bas et la droite), puis accélère et ralentit en
ease-in-out cubique. Le déplacement occupe les 12–88% du segment ; l’image
retrouve son échelle et perd son ombre à la pose. La pause fige le décollage en
cours ; le mouvement réduit conserve les étapes fixes sans cet effet.

Le défilement desktop est temporairement bloqué pendant la lecture. La fin,
la pause, « Passer l’animation », une étape directe, Échap, le focus hors du
parcours, un déplacement de page hors de la position retenue, la sortie d’écran,
un onglet masqué, le passage sous 900 px ou le mouvement réduit libèrent le
blocage et restaurent les styles de défilement initiaux. Le zoom navigateur
reste possible. La reprise et la relecture sont volontaires après interruption.
Sur mobile, la lecture est volontaire et sans blocage. Le mouvement réduit
présente le résultat final statique avec accès direct aux étapes.

Le dégradé des pétales réalise un tour linéaire en 18 secondes, dans l’alpha
original du PNG croisé avec l’extérieur du disque central. Le tournesol et son
centre ne tournent pas. La rotation se suspend hors écran et dans un onglet
masqué ; le mouvement réduit, l’avatar du téléphone et les icônes exportées
conservent un dégradé statique. Les halos restent des traitements de marque.

Le calendrier suit le jour local du visiteur, actualisé toutes les 30 secondes et
au retour du focus ou de visibilité. Il couvre le mois complet sur 4/5/6 semaines
et contient d’autres publications fictives. Le fil commence avec huit anciennes
photos distinctes de la nouvelle image, puis toutes ses vignettes en 4:5 se
décalent pour lui laisser la première place. Les compteurs fictifs passent de
128 à 129 publications, avec 12,4 k abonnés et 642 abonnements. Le profil
`tournesol` / Tournesol, son avatar et son badge simulé sont accompagnés de
« Compte de démonstration » et d’une mention visible des données et du badge fictifs.

## Approved constraints

Conserver la composition A, la Futura demandée le 18 octobre et les aplats de boutons. Le téléphone,
les champs et le calendrier doivent être du contenu sémantique et accessible,
pas une capture plate de la maquette. Les photos de démonstration sont des images.
Les détails du calendrier et les dates doivent être cohérents. Aucun contrôle de
la présentation ne publie réellement sur Instagram.

## Architecture confirmed

Design system documenté sous Storybook, composants dérivés de MUI, tokens
centralisés et même thème dans la page et le catalogue. Rendu Next.js sur le
serveur, métadonnées, URL canoniques, données structurées factuelles, sitemap,
optimisation des images et du mouvement. Domaine : https://tournesol.vlnt.st.
Gestion des dépendances avec npm.

## Updated visual authority

Le 18 octobre, l’utilisateur sépare le DS Tournesol de Studio Volante et demande
Futura Medium pour les titres. Le kit Adobe contient seulement 400/700 ; son
utilisation en repli est explicitement acceptée (« fais avec ce que tu as »).
La maquette A reste la référence de composition. Le 19 octobre, l’utilisateur
choisit A Cobalt puis demande de remplacer le jaune par un autre accent. La
révision suivante remplace le cyan par le rose-violet #E15EFF, accompagné du
clair #F6DCFF et du survol #D659F7 ; le cobalt #3659D9, le bleu nuit #17264B
et le papier #F5F6FA restent inchangés. Les tokens de thème sont l’autorité
courante. Le PNG original transparent et son prompt exact restent dans
`public/brand/` ; `TournesolSymbol` définit le traitement animé de ses pétales.
La palette et le symbole sont aussi appliqués à l’admin, qui conserve ses titres
Bebas Light 300. La composition A reste inchangée.

## Review boundary

Les contenus Meta de preuve restent des enregistrements réels distincts du site
de présentation.

La revue `.impeccable/review/oct19/finish-review.md` et ses captures conservent
le verdict `ship` de l’étape cyan précédente. La revue indépendante de la révision
rose-violet, des pétales animés et du blocage desktop conclut également `ship` ;
son rapport et les captures courantes sont dans `.impeccable/review/oct19-orchid/`.
Les tests publics ciblés comptent 23 réussites et 3 cas ignorés dans Brave.
La revue s’appuie sur le code, les captures et les mesures, sans inspection
vidéo ni requalification des preuves historiques.


### Accent renforcé — 19 octobre 2026

Le dernier retour utilisateur demande un violet rosé plus vif. L’accent courant
est l’orchidée électrique #E15EFF, accompagné du fond #F6DCFF et du survol
#D659F7. Les contrastes avec le texte bleu nuit sont respectivement 5,12:1,
11,73:1 et 4,69:1. Les revues cyan et orchidée pastel citées plus haut restent
historiques. La revue de finition de cette retouche est conservée dans le dépôt
public sous `.impeccable/review/oct19-electric/finish-review.md` (`ship`).
