![Logo de Lorraine Ipsum](https://github.com/ThomasPericoi/LorraineIpsum/blob/master/lorraineipsum.svg?raw=true)

# Lorraine Ipsum

Attention, ca routche ! Lorraine Ipsum est un generateur de faux texte inspire du
classique Lorem Ipsum, mais compose avec des noms de villes et communes de
Lorraine.

Le site permet de generer rapidement un ou plusieurs paragraphes de texte pour
remplir une maquette, tester une mise en page ou ajouter une petite touche
lorraine a un prototype.

## Le site

Le site propose une interface simple :

- un champ pour choisir le nombre de paragraphes ;
- un bouton pour generer un nouveau texte ;
- un bouton pour copier le resultat ;
- une introduction animee avant d'arriver sur le generateur.

La version publique est disponible ici :

<https://lorraineipsum.fr/>

## API JavaScript

Le generateur expose deux fonctions principales dans
`source/js/lorraine-ipsum/lorraine-ipsum.js`.

### `generateParagraph(size = "random", intro = true)`

Genere un paragraphe HTML contenant des noms de villes lorraines.

Parametres :

- `size` : nombre approximatif de mots a generer. Si la valeur est `"random"`,
  la taille est choisie aleatoirement.
- `intro` : ajoute ou non l'introduction `<b>Lorraine Ipsum</b>` au debut du
  paragraphe.

Exemple :

```js
generateParagraph(20);
```

Retourne une chaine HTML :

```html
<p><b>Lorraine Ipsum</b> Nancy Metz Verdun ...</p>
```

### `generateParagraphes(count = "random")`

Genere plusieurs paragraphes HTML.

Parametres :

- `count` : nombre de paragraphes a generer. Si la valeur est `"random"`, le
  nombre de paragraphes est choisi aleatoirement entre 1 et 5.

Exemple :

```js
generateParagraphes(3);
```

Retourne une chaine HTML contenant plusieurs balises `<p>`.

## Utilisation dans une page

Pour utiliser l'API dans une page HTML, il faut charger les dependances dans le
bon ordre :

```html
<script src="js/usefool.js"></script>
<script src="js/lorraine-ipsum/lorraine-ipsum-lib.js"></script>
<script src="js/lorraine-ipsum/lorraine-ipsum.js"></script>
```

Puis appeler le generateur :

```js
document.getElementById("content").innerHTML = generateParagraphes(3);
```

## Developpement

Installer les dependances :

```bash
npm install
```

Generer le site dans le dossier `build/` :

```bash
npx gulp build
```

Lancer le mode watch :

```bash
npx gulp
```

## Structure

- `source/index.html` : page HTML source ;
- `source/scss/` : styles SCSS ;
- `source/js/frontend.js` : interactions de l'interface ;
- `source/js/lorraine-ipsum/lorraine-ipsum-lib.js` : liste des villes ;
- `source/js/lorraine-ipsum/lorraine-ipsum.js` : API de generation ;
- `build/` : fichiers generes pour le site.

## Licence

ISC
