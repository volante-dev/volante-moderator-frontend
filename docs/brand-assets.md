# Identité cobalt et vert d’eau

La palette commune au site et à l’admin associe cobalt `#3659D9`, bleu nuit
`#17264B` et vert d’eau `#8DD9C2`, avec `#DFF3EC` en clair et `#72C7AE` au survol.
Le texte bleu nuit présente un contraste de 9,07:1 sur l’accent, 12,84:1 sur
le clair et 7,42:1 au survol. Cette révision remplace le rose à la demande de l’utilisateur.

Le raster source avait été recoloré avec l’outil intégré **image_gen** : pétales
violet rosé, cœur bleu nuit, silhouette et points blancs conservés, fond transparent.
Le prompt exact est conservé dans `public/brand/tournesol-symbol.prompt.txt`
et embarqué dans le PNG. Le même fichier est utilisé par l’admin.

Le composant MUI `TournesolSymbol` utilise l’alpha de ce raster pour la forme
exacte des pétales. Seul le cœur original est dessiné sous le masque, pour éviter
un liseré rose sur les bords alpha. Un masque exclut le cœur ; seul le champ de couleur du
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
