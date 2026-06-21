![Logo de Lorraine Ipsum](https://github.com/ThomasPericoi/LorraineIpsum/blob/master/lorraineipsum.svg?raw=true)

# Lorraine Ipsum

Lorraine Ipsum est un générateur de faux texte façon Lorem Ipsum, composé de
noms de villes et communes de Lorraine.

Le projet tient volontairement dans un format compact : un site statique, une
petite API JavaScript documentée, un build Gulp moderne, un test minimal et peu
de dépendances.

## Démo

<https://lorraineipsum.fr/>

## Fonctionnalités

- Génération d'un ou plusieurs paragraphes.
- Texte basé sur une liste de communes lorraines.
- Bouton de copie dans le presse-papiers.
- Interface statique légère, sans framework front-end.
- Retour visuel après copie du texte.
- Bundle CSS et JavaScript généré dans `build/`.
- API all-in-one générée dans `dist/`.

## API JavaScript

Le générateur expose un objet global `LorraineIpsum` dans
`source/js/lorraine-ipsum/lorraine-ipsum-functions.js`.

### `LorraineIpsum.generateParagraph(size = "random", intro = true)`

Génère un paragraphe HTML.

```js
LorraineIpsum.generateParagraph(20);
```

`size` définit le nombre approximatif de mots. `intro` ajoute ou retire
l'introduction `<b>Lorraine Ipsum</b>`.

### `LorraineIpsum.generateParagraphs(count = "random")`

Génère plusieurs paragraphes HTML.

```js
LorraineIpsum.generateParagraphs(3);
```

Si `count` vaut `"random"`, le générateur produit entre 1 et 5 paragraphes.

Pour réutiliser le générateur dans un autre projet, deux options sont
disponibles.

Charger les sources séparées :

```html
<script src="lorraine-ipsum-lib.js"></script>
<script src="lorraine-ipsum-functions.js"></script>
```

Ou charger la version all-in-one générée par Gulp :

```html
<script src="dist/lorraine-ipsum.js"></script>
```

## Utilisation

Installer les dépendances :

```bash
npm install
```

Lancer le mode développement :

```bash
npm run dev
```

Générer le site :

```bash
npm run build
```

Le build produit aussi `dist/lorraine-ipsum.js`, une version autonome qui
concatène la liste des villes et les fonctions de génération.

Générer une version minifiée :

```bash
npm run build:prod
```

Formater les fichiers maintenus :

```bash
npm run format
```

Vérifier le formatage :

```bash
npm run lint
```

Lancer le test de l'API :

```bash
npm test
```

Vérifier le build :

```bash
npm run check
```

## Stack

- HTML, SCSS et JavaScript vanilla.
- Gulp 5 pour copier, compiler et concaténer les sources.
- Dart Sass via `gulp-sass`.
- `gulp-clean-css` pour minifier le CSS.
- `gulp-terser` pour minifier le JavaScript.
- Prettier pour garder un style cohérent.
- Test Node natif avec `node:assert`.

## Structure

```text
source/
  index.html
  img/
  js/
    frontend.js
    lorraine-ipsum/
      lorraine-ipsum-lib.js
      lorraine-ipsum-functions.js
  scss/
    _settings.scss
    _reset.scss
    _animations.scss
    _components.scss
    _intro.scss
    _layout.scss
build/
dist/
  lorraine-ipsum.js
```

## Licence

ISC
