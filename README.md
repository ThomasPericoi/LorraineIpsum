![Logo de Lorraine Ipsum](https://github.com/ThomasPericoi/LorraineIpsum/blob/master/lorraineipsum.svg?raw=true)

# Lorraine Ipsum

Lorraine Ipsum est un générateur de faux texte façon Lorem Ipsum, composé de
noms de villes et communes de Lorraine.

Le projet tient volontairement dans un format compact : un site statique, une
petite API JavaScript, un build Gulp moderne et peu de dépendances.

## Démo

<https://lorraineipsum.fr/>

## Fonctionnalités

- Génération d'un ou plusieurs paragraphes.
- Texte basé sur une liste de communes lorraines.
- Bouton de copie dans le presse-papiers.
- Interface statique légère, sans framework front-end.
- Bundle CSS et JavaScript généré dans `build/`.

## API JavaScript

Le générateur expose deux fonctions dans
`source/js/lorraine-ipsum/lorraine-ipsum.js`.

### `generateParagraph(size = "random", intro = true)`

Génère un paragraphe HTML.

```js
generateParagraph(20);
```

`size` définit le nombre approximatif de mots. `intro` ajoute ou retire
l'introduction `<b>Lorraine Ipsum</b>`.

### `generateParagraphes(count = "random")`

Génère plusieurs paragraphes HTML.

```js
generateParagraphes(3);
```

Si `count` vaut `"random"`, le générateur produit entre 1 et 5 paragraphes.

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

Générer une version minifiée :

```bash
npm run build:prod
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

## Structure

```text
source/
  index.html
  img/
  js/
    frontend.js
    lorraine-ipsum/
      lorraine-ipsum-lib.js
      lorraine-ipsum.js
  scss/
build/
```

## Licence

ISC
