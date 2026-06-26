![Logo de Lorraine Ipsum](source/img/favicon.png)

# Lorraine Ipsum

Lorraine Ipsum est un générateur de faux texte façon Lorem Ipsum, composé de
noms de villes et communes de Lorraine.

Le projet tient volontairement dans un format compact : un site statique, une
petite API JavaScript documentée, un build Gulp moderne et peu de dépendances.

## Démo

<https://lorraineipsum.thomaspericoi.com/>

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

L'API expose des méthodes texte, des méthodes HTML et quelques helpers pour
accéder à la liste des villes. Les méthodes HTML retournent volontairement des
chaînes prêtes à être injectées dans une page. Le contenu généré repose
uniquement sur les données internes du projet.

### Quelle fonction utiliser ?

| Besoin                                      | Fonction                             |
| ------------------------------------------- | ------------------------------------ |
| Générer un paragraphe en texte brut         | `generateParagraphText(size, intro)` |
| Générer plusieurs paragraphes en texte brut | `generateParagraphTexts(count)`      |
| Générer un paragraphe HTML                  | `generateParagraph(size, intro)`     |
| Générer plusieurs paragraphes HTML          | `generateParagraphs(count)`          |
| Récupérer une ville aléatoire               | `getRandomCity()`                    |
| Récupérer une ville par index               | `getCityById(cityId)`                |
| Récupérer toutes les villes                 | `listCities()` ou `cities`           |
| Lire la version de l'API                    | `version`                            |

### Texte brut

Utilise les fonctions texte quand tu veux afficher le résultat avec le DOM, le
copier dans le presse-papiers, l'envoyer dans une API ou garder le contrôle sur
le HTML généré.

#### `LorraineIpsum.generateParagraphText(size = "random", intro = true)`

Génère un paragraphe en texte brut. `size` définit le nombre approximatif de
mots. `intro` ajoute ou retire l'introduction `Lorraine Ipsum`.

```js
LorraineIpsum.generateParagraphText(20);
// "Lorraine Ipsum Nancy Metz Verdun..."

LorraineIpsum.generateParagraphText(20, false);
// "Nancy Metz Verdun..."
```

#### `LorraineIpsum.generateParagraphTexts(count = "random")`

Génère plusieurs paragraphes en texte brut, sous forme de tableau.

```js
LorraineIpsum.generateParagraphTexts(3);
// ["Lorraine Ipsum ...", "Nancy Metz ...", "Verdun Toul ..."]
```

Si `count` vaut `"random"`, le générateur produit entre 1 et 5 paragraphes.

### HTML

Utilise les fonctions HTML quand tu veux intégrer rapidement le résultat dans
une page. Elles retournent des chaînes contenant des balises `<p>` et, pour le
premier paragraphe avec introduction, `<b>`.

#### `LorraineIpsum.generateParagraph(size = "random", intro = true)`

Génère un paragraphe HTML.

```js
LorraineIpsum.generateParagraph(20);
// "<p><b>Lorraine Ipsum</b> Nancy Metz Verdun...</p>"
```

`size` définit le nombre approximatif de mots. `intro` ajoute ou retire
l'introduction `<b>Lorraine Ipsum</b>`.

#### `LorraineIpsum.generateParagraphs(count = "random")`

Génère plusieurs paragraphes HTML.

```js
LorraineIpsum.generateParagraphs(3);
// "<p><b>Lorraine Ipsum</b> ...</p><p>...</p><p>...</p>"
```

Si `count` vaut `"random"`, le générateur produit entre 1 et 5 paragraphes.

### Villes

Utilise ces helpers si tu veux construire ta propre interface ou ton propre
format de sortie à partir de la liste des communes.

```js
LorraineIpsum.getRandomCity();
// "Nancy"

LorraineIpsum.getCityById(0);
// Première ville de la liste, ou null si l'index n'existe pas.

LorraineIpsum.listCities();
// Copie du tableau complet des villes.

LorraineIpsum.cities;
// Même résultat que listCities().
```

### Version

```js
LorraineIpsum.version;
// "1.0.0"
```

Pour réutiliser le générateur dans un autre projet, deux options sont
disponibles.

Charger les sources séparées :

```html
<script src="lorraine-ipsum-lib.js"></script>
<script src="lorraine-ipsum-functions.js"></script>
```

Ou charger la version all-in-one :

```html
<script src="dist/lorraine-ipsum.js"></script>
```

## Distribution

Le dossier `dist/` contient la version prête à réutiliser de l'API JavaScript.
Le fichier `dist/lorraine-ipsum.js` est généré par Gulp à partir de :

- `source/js/lorraine-ipsum/lorraine-ipsum-lib.js`
- `source/js/lorraine-ipsum/lorraine-ipsum-functions.js`

Il embarque donc la liste des villes et les fonctions de génération dans un
seul fichier autonome.

Exemple d'intégration :

```html
<script src="lorraine-ipsum.js"></script>
<script>
  // L'API retourne du HTML généré depuis les données internes du projet.
  document.body.innerHTML = LorraineIpsum.generateParagraphs(3);
</script>
```

## Utilisation

Installer les dépendances :

```bash
npm install
```

Le projet cible Node 20 ou plus récent. Avec `nvm`, la version recommandée peut
être activée avec :

```bash
nvm use
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
concatène la liste des villes et les fonctions de génération. Cette commande
garde les fichiers lisibles pour le développement.

Générer une version minifiée :

```bash
npm run build:prod
```

Cette commande produit les fichiers optimisés pour publication.

Formater les fichiers maintenus :

```bash
npm run format
```

Vérifier le formatage :

```bash
npm run lint
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
    _ui.scss
    _intro.scss
    _layout.scss
build/
dist/
  lorraine-ipsum.js
```

## Licence

Ce projet est distribué sous licence MIT. Voir le fichier `LICENSE`.
