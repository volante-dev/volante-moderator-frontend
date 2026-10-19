# Identité cobalt et orchidée

La direction A a été retenue le 19 octobre 2026, avec remplacement explicite du
jaune par une autre couleur. La déclinaison utilise le cobalt `#3659D9`, le bleu
nuit `#17264B` et, après le retour utilisateur, le violet rosé `#E15EFF` dans le
site et l’admin. Le fond d’accent est `#F6DCFF`, son survol `#D659F7`.

L’accent a été renforcé à la demande de l’utilisateur : orchidée électrique,
plus saturé que le pastel précédent. Texte bleu nuit : contraste de 5,12:1
sur l’accent, 4,69:1 au survol et 11,73:1 sur le fond clair.

Le symbole existant a été recoloré avec l’outil intégré **image_gen** : pétales
violet rosé, cœur bleu nuit, silhouette et points blancs conservés, fond transparent.
Le prompt exact est conservé dans `public/brand/tournesol-symbol.prompt.txt`
et embarqué dans le PNG. Le même fichier est utilisé par l’admin.

Le composant MUI `TournesolSymbol` utilise l’alpha de ce raster pour la forme
exacte des pétales. Un masque exclut le cœur ; seul le champ de couleur du
dégradé conique tourne, en 18 secondes. Hors écran et onglet masqué, il se met
en pause. Avec mouvement réduit et dans l’avatar Instagram, il reste statique.
La géométrie d’exclusion correspond au cœur du raster de 1254 × 1254 px ; elle
doit être ajustée si cet asset est remplacé par une autre composition.

`scripts/brand-assets.mjs` capture les icônes 192/180 px depuis la story statique
du même symbole, puis le composant MUI `ShareCard` pour Open Graph en 1200 × 630.
L’admin utilise la même icône dans `public/brand/tournesol-icon.png`.
Après régénération,
conserver dans les PNG leur provenance (outil `impeccable embed-prompt`).
Les images de démonstration existantes n’ont pas changé ; `GalleryTile` recadre
leurs vues en CSS sans étirement. La tuile semblable à la nouvelle photo est
exclue du profil initial afin de rendre l’insertion immédiatement reconnaissable.
