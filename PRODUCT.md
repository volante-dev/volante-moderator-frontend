# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Les visiteurs découvrent Tournesol, ses fonctions Instagram et l’entreprise qui
l’exploite. Les utilisateurs habilités rejoignent ensuite l’application existante.
La présentation publique sert aussi à expliquer l’activité de Studio Volante lors
de la vérification Tech Provider auprès de Meta.

## Product Purpose

Présenter Tournesol, un espace de préparation des publications Instagram et de
modération des commentaires. Les deux activités ont la même importance.

## Operating Context

Site public indépendant, dans le dépôt `volante-dev/volante-moderator-frontend`.
Le projet Next.js a été initialisé par l’utilisateur. L’application est accessible
sur `https://moderator.vlnt.st` et conserve ses contrôles d’accès. Studio Volante
est la marque de l’opérateur WR EURL.

## Capabilities and Constraints

- Photos, carrousels et Reels : préparation de brouillons, médias et légendes.
- Calendrier de programmation et aperçu du profil Instagram.
- Examen des commentaires, masquage et rétablissement, règles de modération.
- Enregistrer un brouillon ne déclenche pas une publication.
- La publication effective dépend des autorisations du compte et de l’activation
  du service. L’ouverture générale reste à qualifier ; le site ne la présume pas.
- Le site présente le produit ; il n’accède pas aux comptes Instagram des visiteurs.
- Interface en français, sur ordinateur et mobile.
- Domaine public confirmé : `https://tournesol.vlnt.st`.
- Design system centralisé sous Storybook ; les composants visuels sont des
  dérivés ou des compositions de MUI. Pas de système concurrent de composants.
- Référencement prévu dans l’architecture Next.js : HTML rendu sur le serveur,
  métadonnées, URL canonique, sitemap, partage social et images optimisées.
- Installation et gestion des dépendances avec npm, selon la demande du 18 octobre.

## Brand Commitments

Tournesol, avec la signature « by volante » et le symbole de tournesol transparent.
Design system indépendant de Studio Volante, demandé le 18 octobre 2026. Le
19 octobre, l’utilisateur choisit A Cobalt, retire le jaune, puis retient le vert d’eau après les essais cyan et rose : cobalt #3659D9, bleu nuit #17264B, vert d’eau
#8DD9C2 et papier froid #F5F6FA forment l’identité actuelle, appliquée aussi à
l’admin. Le clair #DFF3EC et le survol #72C7AE accompagnent cet accent. Chaque
interface conserve sa typographie et sa composition approuvées.
Les dégradés restent autorisés dans les traitements de marque. Celui des pétales
tourne dans la silhouette originale fixe ; le centre bleu nuit reste immobile.
La rotation se suspend hors écran et dans un onglet masqué ; le mouvement réduit,
l’avatar du téléphone et les icônes exportées utilisent une variante statique.
Titres Futura Medium (500), corps Futura PT (400). Le kit Adobe actuel ne fournit
que 400 et 700 ; le repli vers la Futura disponible est accepté par l’utilisateur
(« fais avec ce que tu as »). Aucun faux gras ne simule Medium. Conserver les reliefs subtils
des panneaux, les boutons plats et les fenêtres frostées de l’application.
La présentation est très visuelle et animée, inspirée du rythme des pages produit
iPhone, avec une identité propre à Tournesol.

## Evidence on Hand

- Identité et contraintes confirmées dans la conversation.
- Références de l’application dans `.impeccable/references/`.
- Trois maquettes conservées avec leurs prompts exacts dans
  `.impeccable/mocks/decision/tournesol-public/` ; A choisie le 18 octobre 2026.
- Symbole de marque et provenance dans `public/brand/`.
- Les données mises en scène sont synthétiques et signalées comme démonstration.
  Le compte Tournesol, ses compteurs et son badge simulé sont autorisés uniquement
  dans la démonstration publique et portent une mention visible de fiction.
- Aucun témoignage, logo client, indicateur commercial, tarif ou certification Meta
  réelle n’a été fourni et ne doit être inventé. Le badge fictif de la simulation
  n’atteste ni une certification de Tournesol ni une approbation Tech Provider.
- La revue du 19 octobre, les captures du parcours et l’image Open Graph sont
  conservées dans `.impeccable/review/oct19/` ; son verdict `ship` porte sur
  l’étape cyan précédente. La revue indépendante de la révision rose-violet,
  des pétales animés et du défilement temporairement bloqué conclut également
  `ship` ; son rapport et ses captures sont dans `.impeccable/review/oct19-orchid/`.
  Les tests publics ciblés comptent 23 réussites et 3 cas ignorés dans Brave.

## Product Principles

- Expliquer les fonctions par des vues du produit en situation.
- Donner la même place aux contenus et aux échanges.
- Distinguer les démonstrations des données et résultats réels.
- Identifier clairement le service et son opérateur.
- Préserver la lisibilité et l’accès au contenu sans animation.

## Accessibility & Inclusion

Navigation au clavier, focus visible, mise en page mobile, respect de la préférence
de mouvement réduit et absence de dépendance au défilement animé pour comprendre
le produit. La démonstration offre pause, passage à la fin, relecture et étapes
directes. Sur ordinateur, le défilement est retenu pendant sa lecture et libéré
à la fin ou dès interruption, notamment avec Échap ou le focus hors du parcours.
Sa lecture sur mobile reste volontaire et sans blocage du défilement, avec un
état final statique en mouvement réduit.

Le 19 octobre, le dernier ajustement demandé remplace le rose par le vert d’eau #8DD9C2
dans les deux interfaces ; l’identité et les fonctions restent celles décrites
ci-dessus. Les icônes et l’image sociale suivent cette palette.
