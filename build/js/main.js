/*____________________________________ MUST-HAVE FUNCTIONS ____________________________________*/

/* Functions about random */

function getRandomIntBetween(min, max) {
  // Output
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomIdFromArray(arrayName) {
  // Output
  return Math.floor(Math.random() * arrayName.length);
}

function getRandomValueFromArray(arrayName) {
  // Output
  return arrayName[getRandomIdFromArray(arrayName)];
}

function probability(probability, on = 100) {
  // Var(s)
  happened = false;
  // Process
  getRandomIntBetween(0, on) <= probability
    ? (happened = true)
    : (happened = false);
  // Output
  return happened;
}

function getRandomColor() {
  // Var(s)
  var hexLetters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  var randomColor = "#";
  // Process
  for (var i = 0; i < 6; i++) {
    randomColor += getRandomValueFromArray(hexLetters);
  }
  // Output
  return randomColor;
}

/* Functions about formats */

function isConsonant(x) {
  // Output
  return (
    [
      "b",
      "c",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "m",
      "n",
      "p",
      "q",
      "r",
      "s",
      "t",
      "v",
      "w",
      "x",
      "z",
    ].indexOf(x.toLowerCase()) !== -1
  );
}

function isVowel(x) {
  // Output
  return ["a", "e", "i", "o", "u"].indexOf(x.toLowerCase()) !== -1;
}

function beautifyNumber(x) {
  // Output
  return x.toString().replace(/\B(?!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
}

/* Functions about styles */

function isLight(color) {
  // Var(s)
  const hex = color.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  // Process
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  // Output
  return brightness > 155;
}

function changeElementBgColor(element, color) {
  // Output
  element.style.backgroundColor = color;
}

function transformToBlob(element) {
  // Var(s)
  function randomRadius() {
    var percentage1 = getRandomIntBetween(25, 75);
    var percentage1bis = 100 - percentage1;
    var percentage2 = getRandomIntBetween(25, 75);
    var percentage2bis = 100 - percentage2;
    var percentage3 = getRandomIntBetween(25, 75);
    var percentage3bis = 100 - percentage3;
    var percentage4 = getRandomIntBetween(25, 75);
    var percentage4bis = 100 - percentage4;
    return `${percentage1}% ${percentage1bis}% ${percentage2bis}% ${percentage2}% / ${percentage3}% ${percentage4}% ${percentage4bis}% ${percentage3bis}%`;
  }
  // Output
  element.style.borderRadius = randomRadius();
}

/* Functions about clipboard */

function copyToClipboard(value) {
  // Var(s)
  var temporaryInput = document.createElement("input");
  // Process
  temporaryInput.setAttribute("value", value);
  document.body.appendChild(temporaryInput);
  temporaryInput.select();
  // Output
  document.execCommand("copy");
  console.log('%c"' + value + '" a été copié avec succès', "color: green");
  // Cleaning
  document.body.removeChild(temporaryInput);
}

/*____________________________________ GATHER EVERYTHING ____________________________________*/

/* Darkmode */

var btnDarkmode = document.getElementById("darkmode");
var darkmode = false;

function applyDarkmode() {
  if (darkmode) {
    document.body.classList.add("darkmode");
    btnDarkmode.innerHTML = "Allumer";
    console.log("On éteint les lumières...");
  } else {
    document.body.classList.remove("darkmode");
    btnDarkmode.innerHTML = "Éteindre";
    console.log("Et on allume les lumières !");
  }
}

btnDarkmode.addEventListener("click", () => {
  darkmode = !darkmode;
  applyDarkmode();
});

/* Lorraine Ipsum Frontend */

var btnLorraineIpsumSmall = document.getElementById("btn-lorraineIpsum-small");
var btnLorraineIpsumLarge = document.getElementById("btn-lorraineIpsum-large");
var btnLorraineIpsumRandom = document.getElementById(
  "btn-lorraineIpsum-random"
);
var btnCopy = document.getElementById("btn-copy");
var content = document.getElementById("content-lorraineIpsum");

btnLorraineIpsumSmall.addEventListener("click", () => {
  content.innerHTML = generateParagraph("small");
});

btnLorraineIpsumLarge.addEventListener("click", () => {
  content.innerHTML = generateParagraph("large");
});

btnLorraineIpsumRandom.addEventListener("click", () => {
  content.innerHTML = generateParagraph();
});

btnCopy.addEventListener("click", () => {
  copyToClipboard(content.innerHTML);
});

/* Init */

document.addEventListener("DOMContentLoaded", function () {
  printAsciiRandom();
  applyDarkmode();

  content.innerHTML = generateParagraph();
});

/*____________________________________ LORRAINE IPSUM LIBRARY ____________________________________*/

var villesLorraine = [
  "Abainville",
  "Abaucourt",
  "Abaucourt-Hautecourt",
  "Abbéville-lès-Conflans",
  "Les Ableuvenettes",
  "Aboncourt",
  "Aboncourt",
  "Aboncourt-sur-Seille",
  "Abreschviller",
  "Achain",
  "Achen",
  "Adaincourt",
  "Adelange",
  "Affléville",
  "Affracourt",
  "Agincourt",
  "Ahéville",
  "Aincreville",
  "Aingeray",
  "Aingeville",
  "Ainvelle",
  "Ajoncourt",
  "Alaincourt-la-Côte",
  "Albestroff",
  "Algrange",
  "Allain",
  "Allamont",
  "Allamps",
  "Allarmont",
  "Allondrelle-la-Malmaison",
  "Alsting",
  "Altrippe",
  "Altviller",
  "Alzing",
  "Amance",
  "Amanty",
  "Amanvillers",
  "Ambacourt",
  "Ambly-sur-Meuse",
  "Amel-sur-l'Étang",
  "Amelécourt",
  "Amenoncourt",
  "Ameuvelle",
  "Amnéville",
  "Ancemont",
  "Ancerville",
  "Ancerville",
  "Ancerviller",
  "Ancy-sur-Moselle",
  "Andernay",
  "Anderny",
  "Andilly",
  "Angevillers",
  "Anglemont",
  "Angomont",
  "Anould",
  "Anoux",
  "Ansauville",
  "Anthelupt",
  "Antilly",
  "Anzeling",
  "Aouze",
  "Apach",
  "Apremont-la-Forêt",
  "Arches",
  "Archettes",
  "Argancy",
  "Armaucourt",
  "Arnaville",
  "Aroffe",
  "Arracourt",
  "Arraincourt",
  "Arrancy-sur-Crusne",
  "Arraye-et-Han",
  "Arrentès-de-Corcieux",
  "Arriance",
  "Arry",
  "Ars-Laquenexy",
  "Ars-sur-Moselle",
  "Art-sur-Meurthe",
  "Arzviller",
  "Aspach",
  "Assenoncourt",
  "Athienville",
  "Attignéville",
  "Attigny",
  "Attilloncourt",
  "Atton",
  "Aube",
  "Auboué",
  "Aubréville",
  "Audun-le-Roman",
  "Audun-le-Tiche",
  "Augny",
  "Aulnois",
  "Aulnois-en-Perthois",
  "Aulnois-sur-Seille",
  "Aumetz",
  "Aumontzey",
  "Autigny-la-Tour",
  "Autrécourt-sur-Aire",
  "Autrepierre",
  "Autreville",
  "Autréville-Saint-Lambert",
  "Autreville-sur-Moselle",
  "Autrey",
  "Autrey",
  "Auzainvilliers",
  "Avillers",
  "Avillers",
  "Avillers-Sainte-Croix",
  "Avioth",
  "Avocourt",
  "Avrainville",
  "Avrainville",
  "Avranville",
  "Avricourt",
  "Avricourt",
  "Avril",
  "Ay-sur-Moselle",
  "Aydoilles",
  "Azannes-et-Soumazannes",
  "Azelot",
  "Azerailles",
  "Azoudange",
  "Baâlon",
  "Baccarat",
  "Bacourt",
  "Badménil-aux-Bois",
  "Badonviller",
  "Badonvilliers-Gérauvilliers",
  "Baerenthal",
  "La Baffe",
  "Bagneux",
  "Bains-les-Bains",
  "Bainville-aux-Miroirs",
  "Bainville-aux-Saules",
  "Bainville-sur-Madon",
  "Balléville",
  "Bambiderstroff",
  "Ban-de-Laveline",
  "Ban-de-Sapt",
  "Le Ban-Saint-Martin",
  "Ban-sur-Meurthe-Clefcy",
  "Bannay",
  "Bannoncourt",
  "Bantheville",
  "Bar-le-Duc",
  "Barbas",
  "Barbey-Seroux",
  "Barbonville",
  "Barchain",
  "Barisey-au-Plain",
  "Barisey-la-Côte",
  "Les Baroches",
  "Baronville",
  "Barst",
  "Barville",
  "Baslieux",
  "Basse-Ham",
  "Basse-Rentgen",
  "Basse-sur-le-Rupt",
  "Bassing",
  "Bathelémont",
  "Batilly",
  "Battexey",
  "Battigny",
  "Baudignécourt",
  "Baudonvilliers",
  "Baudrecourt",
  "Baudrémont",
  "Baudricourt",
  "Baulny",
  "Bauzemont",
  "Bayecourt",
  "Bayon",
  "Bayonville-sur-Mad",
  "Bazailles",
  "Bazegney",
  "Bazeilles-sur-Othain",
  "Bazien",
  "Bazincourt-sur-Saulx",
  "Bazoilles-et-Ménil",
  "Bazoilles-sur-Meuse",
  "Bazoncourt",
  "Beauclair",
  "Beaufort-en-Argonne",
  "Beaufremont",
  "Beaulieu-en-Argonne",
  "Beauménil",
  "Beaumont",
  "Beaumont-en-Verdunois",
  "Beausite",
  "Bébing",
  "Béchamps",
  "Béchy",
  "Begnécourt",
  "Behonne",
  "Behren-lès-Forbach",
  "Bellange",
  "Belleau",
  "Bellefontaine",
  "Belleray",
  "Belles-Forêts",
  "Belleville",
  "Belleville-sur-Meuse",
  "Belmont-lès-Darney",
  "Belmont-sur-Buttant",
  "Belmont-sur-Vair",
  "Belrain",
  "Belrupt",
  "Belrupt-en-Verdunois",
  "Belval",
  "Bénaménil",
  "Bénestroff",
  "Beney-en-Woëvre",
  "Béning-lès-Saint-Avold",
  "Benney",
  "Berg-sur-Moselle",
  "Bérig-Vintrange",
  "Berling",
  "Bermering",
  "Bernécourt",
  "Berthelming",
  "Bertrambois",
  "Bertrange",
  "Bertrichamps",
  "Bertrimoutier",
  "Berviller-en-Moselle",
  "Béthelainville",
  "Béthincourt",
  "Bettainvillers",
  "Bettange",
  "Bettborn",
  "Bettegney-Saint-Brice",
  "Bettelainville",
  "Betting",
  "Bettoncourt",
  "Bettviller",
  "Le Beulay",
  "Beurey-sur-Saulx",
  "Beuveille",
  "Beuvezin",
  "Beuvillers",
  "Beux",
  "Bey-sur-Seille",
  "Beyren-lès-Sierck",
  "Bezange-la-Grande",
  "Bezange-la-Petite",
  "Bezaumont",
  "Bezonvaux",
  "Bibiche",
  "Bickenholtz",
  "Bicqueley",
  "Bidestroff",
  "Biding",
  "Biécourt",
  "Biencourt-sur-Orge",
  "Bienville-la-Petite",
  "Biffontaine",
  "Billy-sous-Mangiennes",
  "Bining",
  "Bioncourt",
  "Bionville",
  "Bionville-sur-Nied",
  "Bislée",
  "Bisten-en-Lorraine",
  "Bistroff",
  "Bitche",
  "Blainville-sur-l'Eau",
  "Blâmont",
  "Blanche-Église",
  "Blanzée",
  "Blémerey",
  "Blémerey",
  "Blénod-lès-Pont-à-Mousson",
  "Blénod-lès-Toul",
  "Bleurville",
  "Blevaincourt",
  "Blies-Ébersing",
  "Blies-Guersviller",
  "Bliesbruck",
  "Bocquegney",
  "Boinville-en-Woëvre",
  "Bois-de-Champ",
  "Boismont",
  "Boncourt",
  "Boncourt-sur-Meuse",
  "Bonnet",
  "Bonviller",
  "Bonvillet",
  "Bonzée",
  "Borville",
  "Boucheporn",
  "Le Bouchon-sur-Saulx",
  "Bouconville-sur-Madt",
  "Boucq",
  "Bouillonville",
  "Boulaincourt",
  "Boulange",
  "Boulay-Moselle",
  "Bouligny",
  "Bouquemont",
  "Bourdonnay",
  "Boureuilles",
  "Bourgaltroff",
  "La Bourgonce",
  "Bourscheid",
  "Bousbach",
  "Bousse",
  "Bousseviller",
  "Boust",
  "Boustroff",
  "Bouvron",
  "Bouxières-aux-Bois",
  "Bouxières-aux-Chênes",
  "Bouxières-aux-Dames",
  "Bouxières-sous-Froidmont",
  "Bouxurulles",
  "Bouzanville",
  "Bouzemont",
  "Bouzonville",
  "Bovée-sur-Barboure",
  "Boviolles",
  "Brabant-en-Argonne",
  "Brabant-le-Roi",
  "Brabant-sur-Meuse",
  "Brainville",
  "Bralleville",
  "Brandeville",
  "Brantigny",
  "Braquis",
  "Bras-sur-Meuse",
  "Bratte",
  "Brauvilliers",
  "Brechainville",
  "Bréhain",
  "Bréhain-la-Ville",
  "Bréhéville",
  "Breidenbach",
  "Breistroff-la-Grande",
  "Bréménil",
  "Brémoncourt",
  "La Bresse",
  "Brettnach",
  "Breux",
  "Brieulles-sur-Meuse",
  "Briey",
  "Brillon-en-Barrois",
  "Brin-sur-Seille",
  "Brixey-aux-Chanoines",
  "Brizeaux",
  "Brocourt-en-Argonne",
  "Bronvaux",
  "Brouck",
  "Brouderdorff",
  "Brouennes",
  "Broussey-en-Blois",
  "Broussey-Raulecourt",
  "Brouvelieures",
  "Brouville",
  "Brouviller",
  "Brû",
  "Brulange",
  "Bruley",
  "Bruville",
  "Bruyères",
  "Buchy",
  "Buding",
  "Budling",
  "Buhl-Lorraine",
  "Buissoncourt",
  "Bulgnéville",
  "Bulligny",
  "Bult",
  "Bure",
  "Bures",
  "Burey-en-Vaux",
  "Burey-la-Côte",
  "Buriville",
  "Burlioncourt",
  "Burthecourt-aux-Chênes",
  "Burtoncourt",
  "Bussang",
  "Buxières-sous-les-Côtes",
  "Buzy-Darmont",
  "Cappel",
  "Carling",
  "Cattenom",
  "Ceintrey",
  "Celles-sur-Plaine",
  "Certilleux",
  "Cerville",
  "Cesse",
  "Chaillon",
  "Chailly-lès-Ennery",
  "Chalaines",
  "Chaligny",
  "Chamagne",
  "Chambley-Bussières",
  "Chambrey",
  "Champ-le-Duc",
  "Champdray",
  "Champenoux",
  "Champey-sur-Moselle",
  "Champigneulles",
  "Champneuville",
  "Champougny",
  "Chanteheux",
  "Chanteraine",
  "Chantraine",
  "Chanville",
  "Chaouilley",
  "La Chapelle-aux-Bois",
  "La Chapelle-devant-Bruyères",
  "Chardogne",
  "Charency-Vezin",
  "Charey",
  "Charleville-sous-Bois",
  "Charly-Oradour",
  "Charmes",
  "Charmes-la-Côte",
  "Charmois",
  "Charmois-devant-Bruyères",
  "Charmois-l'Orgueilleux",
  "Charny-sur-Meuse",
  "Charpentry",
  "Chassey-Beaupré",
  "Châtas",
  "Château-Bréhain",
  "Château-Rouge",
  "Château-Salins",
  "Château-Voué",
  "Châtel-Saint-Germain",
  "Châtel-sur-Moselle",
  "Châtenois",
  "Châtillon-sous-les-Côtes",
  "Châtillon-sur-Saône",
  "Chattancourt",
  "Chaudeney-sur-Moselle",
  "Chauffecourt",
  "Chaumont-devant-Damvillers",
  "Chaumont-sur-Aire",
  "Chaumousey",
  "Chauvency-le-Château",
  "Chauvency-Saint-Hubert",
  "Chauvoncourt",
  "Chavelot",
  "Chavigny",
  "Chazelles-sur-Albe",
  "Chef-Haut",
  "Chémery-les-Deux",
  "Cheminot",
  "Chenevières",
  "Chenicourt",
  "Chenières",
  "Cheniménil",
  "Chenois",
  "Cheppy",
  "Chérisey",
  "Chermisey",
  "Chesny",
  "Chicourt",
  "Chieulles",
  "Choloy-Ménillot",
  "Chonville-Malaumont",
  "Cierges-sous-Montfaucon",
  "Circourt",
  "Circourt-sur-Mouzon",
  "Cirey-sur-Vezouze",
  "Le Claon",
  "Claudon",
  "Clayeures",
  "Clémery",
  "Clérey-la-Côte",
  "Clérey-sur-Brenon",
  "Le Clerjus",
  "Clermont-en-Argonne",
  "Cléry-le-Grand",
  "Cléry-le-Petit",
  "Cleurie",
  "Clézentaine",
  "Clouange",
  "Cocheren",
  "Coin-lès-Cuvry",
  "Coin-sur-Seille",
  "Coinches",
  "Coincourt",
  "Coincy",
  "Colligny",
  "Colmen",
  "Colmey",
  "Colombey-les-Belles",
  "Colroy-la-Grande",
  "Combles-en-Barrois",
  "Combres-sous-les-Côtes",
  "Combrimont",
  "Commercy",
  "Condé-Northen",
  "Conflans-en-Jarnisy",
  "Cons-la-Grandville",
  "Consenvoye",
  "Conthil",
  "Contrexéville",
  "Contrisson",
  "Contz-les-Bains",
  "Corcieux",
  "Cornimont",
  "Corny-sur-Moselle",
  "Cosnes-et-Romain",
  "Coume",
  "Courbesseaux",
  "Courcelles",
  "Courcelles-Chaussy",
  "Courcelles-en-Barrois",
  "Courcelles-sous-Châtenois",
  "Courcelles-sur-Aire",
  "Courcelles-sur-Nied",
  "Courouvre",
  "Cousances-les-Forges",
  "Cousances-lès-Triconville",
  "Coussey",
  "Couvertpuis",
  "Couvonges",
  "Coyviller",
  "Craincourt",
  "Crainvilliers",
  "Crantenoy",
  "Créhange",
  "Crépey",
  "Creutzwald",
  "Crévéchamps",
  "Crévic",
  "Crézilles",
  "Crion",
  "Croismare",
  "La Croix-aux-Mines",
  "Crusnes",
  "Cuisy",
  "Cumières-le-Mort-Homme",
  "Cunel",
  "Custines",
  "Cutry",
  "Cutting",
  "Cuvry",
  "Dabo",
  "Dagonville",
  "Dainville-Bertheléville",
  "Dalem",
  "Dalhain",
  "Dalstein",
  "Damas-aux-Bois",
  "Damas-et-Bettegney",
  "Damblain",
  "Damelevières",
  "Damloup",
  "Dammarie-sur-Saulx",
  "Dampvitoux",
  "Damvillers",
  "Danne-et-Quatre-Vents",
  "Dannelbourg",
  "Dannevoux",
  "Darney",
  "Darney-aux-Chênes",
  "Darnieulles",
  "Deinvillers",
  "Delme",
  "Delouze-Rosières",
  "Delut",
  "Demange-aux-Eaux",
  "Deneuvre",
  "Denipaire",
  "Denting",
  "Derbamont",
  "Desseling",
  "Destord",
  "Destry",
  "Deuxville",
  "Deycimont",
  "Deyvillers",
  "Diane-Capelle",
  "Diarville",
  "Diebling",
  "Dieppe-sous-Douaumont",
  "Diesen",
  "Dieue-sur-Meuse",
  "Dieulouard",
  "Dieuze",
  "Diffembach-lès-Hellimer",
  "Dignonville",
  "Dinozé",
  "Distroff",
  "Docelles",
  "Dogneville",
  "Dolaincourt",
  "Dolcourt",
  "Dolving",
  "Dombasle-devant-Darney",
  "Dombasle-en-Argonne",
  "Dombasle-en-Xaintois",
  "Dombasle-sur-Meurthe",
  "Dombras",
  "Dombrot-le-Sec",
  "Dombrot-sur-Vair",
  "Domèvre-en-Haye",
  "Domèvre-sous-Montfort",
  "Domèvre-sur-Avière",
  "Domèvre-sur-Durbion",
  "Domèvre-sur-Vezouze",
  "Domfaing",
  "Domgermain",
  "Domjevin",
  "Domjulien",
  "Dommarie-Eulmont",
  "Dommartemont",
  "Dommartin-aux-Bois",
  "Dommartin-la-Chaussée",
  "Dommartin-la-Montagne",
  "Dommartin-lès-Remiremont",
  "Dommartin-lès-Toul",
  "Dommartin-lès-Vallois",
  "Dommartin-sous-Amance",
  "Dommartin-sur-Vraine",
  "Dommary-Baroncourt",
  "Domnom-lès-Dieuze",
  "Dompaire",
  "Dompcevrin",
  "Dompierre",
  "Dompierre-aux-Bois",
  "Domprix",
  "Domptail",
  "Domptail-en-l'Air",
  "Domremy-la-Canne",
  "Domrémy-la-Pucelle",
  "Domvallier",
  "Doncières",
  "Doncourt-aux-Templiers",
  "Doncourt-lès-Conflans",
  "Doncourt-lès-Longuyon",
  "Donjeux",
  "Donnelay",
  "Dornot",
  "Douaumont",
  "Doulcon",
  "Dounoux",
  "Drouville",
  "Dugny-sur-Meuse",
  "Dun-sur-Meuse",
  "Duzey",
  "Ébersviller",
  "Éblange",
  "Écouviez",
  "Écrouves",
  "Écurey-en-Verdunois",
  "Éguelshardt",
  "Eincheville",
  "Einvaux",
  "Einville-au-Jard",
  "Eix",
  "Éloyes",
  "Elvange",
  "Elzange",
  "Emberménil",
  "Enchenberg",
  "Ennery",
  "Entrange",
  "Entre-deux-Eaux",
  "Les Éparges",
  "Épiez-sur-Chiers",
  "Épiez-sur-Meuse",
  "Épinal",
  "Épinonville",
  "Éply",
  "Epping",
  "Erbéviller-sur-Amezule",
  "Erching",
  "Érize-la-Brûlée",
  "Érize-la-Petite",
  "Érize-Saint-Dizier",
  "Ernestviller",
  "Erneville-aux-Bois",
  "Errouville",
  "Erstroff",
  "Escherange",
  "Escles",
  "Esley",
  "Esnes-en-Argonne",
  "Essegney",
  "Essey-et-Maizerais",
  "Essey-la-Côte",
  "Essey-lès-Nancy",
  "Estrennes",
  "Étain",
  "Les Étangs",
  "Étival-Clairefontaine",
  "Éton",
  "Étraye",
  "Étreval",
  "Etting",
  "Etzling",
  "Eulmont",
  "Euvezin",
  "Euville",
  "Évaux-et-Ménil",
  "Évrange",
  "Èvres",
  "Failly",
  "Fains-Véel",
  "Falck",
  "Fameck",
  "Farébersviller",
  "Farschviller",
  "Faucompierre",
  "Fauconcourt",
  "Faulquemont",
  "Faulx",
  "Favières",
  "Fays",
  "Fécocourt",
  "Fénétrange",
  "Fenneviller",
  "Ferdrupt",
  "Ferrières",
  "Fèves",
  "Féy",
  "Fey-en-Haye",
  "Fignévelle",
  "Fillières",
  "Filstroff",
  "Fiménil",
  "Fixem",
  "Flainval",
  "Flassigny",
  "Flastroff",
  "Flavigny-sur-Moselle",
  "Fleisheim",
  "Flétrange",
  "Fleury",
  "Fleury-devant-Douaumont",
  "Fléville-devant-Nancy",
  "Fléville-Lixières",
  "Flévy",
  "Flin",
  "Flirey",
  "Flocourt",
  "Florange",
  "Florémont",
  "Foameix-Ornel",
  "Folkling",
  "Folschviller",
  "Fomerey",
  "Fontaines-Saint-Clair",
  "Fontenay",
  "Fontenoy-la-Joûte",
  "Fontenoy-le-Château",
  "Fontenoy-sur-Moselle",
  "Fonteny",
  "Fontoy",
  "Forbach",
  "Forcelles-Saint-Gorgon",
  "Forcelles-sous-Gugney",
  "La Forge",
  "Les Forges",
  "Forges-sur-Meuse",
  "Fossieux",
  "Foucaucourt-sur-Thabas",
  "Fouchécourt",
  "Fouchères-aux-Bois",
  "Foug",
  "Foulcrey",
  "Fouligny",
  "Foville",
  "Fraimbois",
  "Frain",
  "Fraisnes-en-Saintois",
  "Fraize",
  "Francaltroff",
  "Francheville",
  "Franconville",
  "Frapelle",
  "Fraquelfing",
  "Frauenberg",
  "Frebécourt",
  "Freistroff",
  "Fréménil",
  "Frémeréville-sous-les-Côtes",
  "Frémery",
  "Frémestroff",
  "Fremifontaine",
  "Frémonville",
  "Frenelle-la-Grande",
  "Frenelle-la-Petite",
  "Frénois",
  "Fresnes-au-Mont",
  "Fresnes-en-Saulnois",
  "Fresnes-en-Woëvre",
  "Fresnois-la-Montagne",
  "Fresse-sur-Moselle",
  "Fréville",
  "Freybouse",
  "Freyming-Merlebach",
  "Friauville",
  "Fribourg",
  "Frizon",
  "Froidos",
  "Frolois",
  "Fromeréville-les-Vallons",
  "Fromezey",
  "Frouard",
  "Froville",
  "Futeau",
  "Gandrange",
  "Garrebourg",
  "Gavisse",
  "Gélacourt",
  "Gélaucourt",
  "Gellenoncourt",
  "Gelucourt",
  "Gelvécourt-et-Adompt",
  "Gemaingoutte",
  "Gemmelaincourt",
  "Gémonville",
  "Gendreville",
  "Génicourt-sur-Meuse",
  "Gérardmer",
  "Gerbamont",
  "Gerbécourt",
  "Gerbécourt-et-Haplemont",
  "Gerbépal",
  "Gerbéviller",
  "Gercourt-et-Drillancourt",
  "Germiny",
  "Germonville",
  "Géry",
  "Gesnes-en-Argonne",
  "Geville",
  "Gézoncourt",
  "Gibeaumeix",
  "Gignéville",
  "Gigney",
  "Gimécourt",
  "Gincrey",
  "Girancourt",
  "Giraumont",
  "Girauvoisin",
  "Gircourt-lès-Viéville",
  "Girecourt-sur-Durbion",
  "Giriviller",
  "Girmont",
  "Girmont-Val-d'Ajol",
  "Gironcourt-sur-Vraine",
  "Givrauval",
  "Givrycourt",
  "Glatigny",
  "Glonville",
  "Godoncourt",
  "Goetzenbruck",
  "Gogney",
  "Goin",
  "Golbey",
  "Gomelange",
  "Gondrecourt-Aix",
  "Gondrecourt-le-Château",
  "Gondreville",
  "Gondrexange",
  "Gondrexon",
  "Gorcy",
  "Gorhey",
  "Gorze",
  "Gosselming",
  "Gouraincourt",
  "Goussaincourt",
  "Goviller",
  "Grand",
  "Grand-Failly",
  "La Grande-Fosse",
  "Grandrupt",
  "Grandrupt-de-Bains",
  "Grandvillers",
  "Granges-sur-Vologne",
  "Gravelotte",
  "Grémecey",
  "Gremilly",
  "Gréning",
  "Greux",
  "Grignoncourt",
  "Grimaucourt-en-Woëvre",
  "Grimaucourt-près-Sampigny",
  "Grimonviller",
  "Grindorff-Bizing",
  "Gripport",
  "Griscourt",
  "Gros-Réderching",
  "Grosbliederstroff",
  "Grosrouvres",
  "Grostenquin",
  "Gruey-lès-Surance",
  "Grundviller",
  "Guebenhouse",
  "Guébestroff",
  "Guéblange-lès-Dieuze",
  "Guébling",
  "Guénange",
  "Guenviller",
  "Guermange",
  "Guerpont",
  "Guerstling",
  "Guerting",
  "Guessling-Hémering",
  "Gugnécourt",
  "Gugney",
  "Gugney-aux-Aulx",
  "Guinglange",
  "Guinkirchen",
  "Guinzeling",
  "Guntzviller",
  "Gussainville",
  "Gye",
  "Hablainville",
  "Haboudange",
  "Hadigny-les-Verrières",
  "Hadol",
  "Hagécourt",
  "Hagen",
  "Hagéville",
  "Hagnéville-et-Roncourt",
  "Hagondange",
  "Haigneville",
  "Haillainville",
  "Haironville",
  "Hallering",
  "Halles-sous-les-Côtes",
  "Halloville",
  "Halstroff",
  "Ham-sous-Varsberg",
  "Hambach",
  "Hammeville",
  "Hamonville",
  "Hampont",
  "Han-devant-Pierrepont",
  "Han-lès-Juvigny",
  "Han-sur-Meuse",
  "Han-sur-Nied",
  "Hangviller",
  "Hannocourt",
  "Hannonville-sous-les-Côtes",
  "Hannonville-Suzémont",
  "Hanviller",
  "Haraucourt",
  "Haraucourt-sur-Seille",
  "Harbouey",
  "Harchéchamp",
  "Hardancourt",
  "Haréville",
  "Hargarten-aux-Mines",
  "Harmonville",
  "Harol",
  "Haroué",
  "Harprich",
  "Harreberg",
  "Harsault",
  "Hartzviller",
  "Harville",
  "Haselbourg",
  "Haspelschiedt",
  "Hatrize",
  "Hattigny",
  "Hauconcourt",
  "Haucourt-Moulaine",
  "Haudainville",
  "Haudiomont",
  "Haudonville",
  "Haumont-près-Samogneux",
  "Haussonville",
  "Haut-Clocher",
  "Haute-Kontz",
  "Haute-Vigneulles",
  "Hautmougey",
  "Les Hauts-de-Chée",
  "Havange",
  "Hayange",
  "La Haye",
  "Hayes",
  "Hazembourg",
  "Heillecourt",
  "Heining-lès-Bouzonville",
  "Heippes",
  "Hellering-lès-Fénétrange",
  "Hellimer",
  "Helstroff",
  "Hémilly",
  "Héming",
  "Hénaménil",
  "Hennecourt",
  "Hennemont",
  "Hennezel",
  "Henridorff",
  "Henriville",
  "Hérange",
  "Herbeuville",
  "Herbéviller",
  "Hergugney",
  "Hériménil",
  "Hermelange",
  "Herméville-en-Woëvre",
  "Herny",
  "Herpelmont",
  "Herserange",
  "Hertzing",
  "Hesse",
  "Hestroff",
  "Hettange-Grande",
  "Heudicourt-sous-les-Côtes",
  "Hévilliers",
  "Hilbesheim",
  "Hilsprich",
  "Hinckange",
  "Hoéville",
  "Holacourt",
  "Holling",
  "Holving",
  "Hombourg-Budange",
  "Hombourg-Haut",
  "Homécourt",
  "Hommarting",
  "Hommert",
  "Honskirch",
  "L'Hôpital",
  "Horville-en-Ornois",
  "Hoste",
  "Hottviller",
  "Houdelaincourt",
  "Houdelmont",
  "Houdemont",
  "Houdreville",
  "Houécourt",
  "Houéville",
  "Housseras",
  "Housséville",
  "La Houssière",
  "Hudiviller",
  "Hultehouse",
  "Hundling",
  "Hunting",
  "Hurbache",
  "Hussigny-Godbrange",
  "Hymont",
  "Ibigny",
  "Igney",
  "Igney",
  "Illange",
  "Imling",
  "Inglange",
  "Inor",
  "Insming",
  "Insviller",
  "Ippécourt",
  "Ippling",
  "Iré-le-Sec",
  "Isches",
  "Les Islettes",
  "Jaillon",
  "Jainvillotte",
  "Jallaucourt",
  "Jametz",
  "Jarménil",
  "Jarny",
  "Jarville-la-Malgrange",
  "Jaulny",
  "Jeandelaincourt",
  "Jeandelize",
  "Jeanménil",
  "Jésonville",
  "Jeuxey",
  "Jevoncourt",
  "Jezainville",
  "Jœuf",
  "Jolivet",
  "Jonville-en-Woëvre",
  "Joppécourt",
  "Jorxey",
  "Jouaville",
  "Joudreville",
  "Jouy-aux-Arches",
  "Jouy-en-Argonne",
  "Jubainville",
  "Julvécourt",
  "Jury",
  "Jussarupt",
  "Jussy",
  "Juvaincourt",
  "Juvelize",
  "Juvigny-en-Perthois",
  "Juvigny-sur-Loison",
  "Juville",
  "Juvrecourt",
  "Kalhausen",
  "Kanfen",
  "Kappelkinger",
  "Kédange-sur-Canner",
  "Kemplich",
  "Kerbach",
  "Kerling-lès-Sierck",
  "Kerprich-aux-Bois",
  "Kirsch-lès-Sierck",
  "Kirschnaumen",
  "Kirviller",
  "Klang",
  "Knutange",
  "Kœnigsmacker",
  "Kœur-la-Grande",
  "Kœur-la-Petite",
  "Kuntzig",
  "Labeuville",
  "Labry",
  "Lachalade",
  "Lachambre",
  "Lachapelle",
  "Lachaussée",
  "Lacroix-sur-Meuse",
  "Lafrimbolle",
  "Lagarde",
  "Lagney",
  "Lahaymeix",
  "Lahayville",
  "Laheycourt",
  "Laimont",
  "Laître-sous-Amance",
  "Laix",
  "Lalœuf",
  "Lamarche",
  "Lamath",
  "Lambach",
  "Lamorville",
  "Lamouilly",
  "Landange",
  "Landaville",
  "Landécourt",
  "Landrecourt-Lempire",
  "Landremont",
  "Landres",
  "Landroff",
  "Laneuvelotte",
  "Laneuveville-aux-Bois",
  "Laneuveville-derrière-Foug",
  "Laneuveville-devant-Bayon",
  "Laneuveville-devant-Nancy",
  "Laneuveville-en-Saulnois",
  "Laneuveville-lès-Lorquin",
  "Laneuville-au-Rupt",
  "Laneuville-sur-Meuse",
  "Lanfroicourt",
  "Langatte",
  "Langley",
  "Languimberg",
  "Lanhères",
  "Laning",
  "Lantéfontaine",
  "Laquenexy",
  "Laronxe",
  "Latour-en-Woëvre",
  "Laudrefang",
  "Laumesfeld",
  "Launstroff",
  "Laval-sur-Vologne",
  "Lavallée",
  "Laveline-devant-Bruyères",
  "Laveline-du-Houx",
  "Lavincourt",
  "Lavoye",
  "Laxou",
  "Lay-Saint-Christophe",
  "Lay-Saint-Remy",
  "Lebeuville",
  "Légéville-et-Bonfays",
  "Leintrey",
  "Lelling",
  "Lemainville",
  "Lemberg",
  "Leménil-Mitry",
  "Lemmecourt",
  "Lemmes",
  "Lemoncourt",
  "Lemud",
  "Lengelsheim",
  "Léning",
  "Lenoncourt",
  "Lépanges-sur-Vologne",
  "Lérouville",
  "Lerrain",
  "Lesménils",
  "Lesse",
  "Lesseux",
  "Lessy",
  "Létricourt",
  "Levoncourt",
  "Lexy",
  "Ley",
  "Leyr",
  "Leyviller",
  "Lezey",
  "Lhor",
  "Lidrezing",
  "Liederschiedt",
  "Liéhon",
  "Liézey",
  "Liffol-le-Grand",
  "Lignéville",
  "Lignières-sur-Aire",
  "Ligny-en-Barrois",
  "Limey-Remenauville",
  "Lindre-Basse",
  "Lindre-Haute",
  "Liny-devant-Dun",
  "Liocourt",
  "Lion-devant-Dun",
  "Lironcourt",
  "Lironville",
  "Lisle-en-Barrois",
  "Lisle-en-Rigault",
  "Lissey",
  "Liverdun",
  "Lixheim",
  "Lixing-lès-Rouhling",
  "Lixing-lès-Saint-Avold",
  "Loisey-Culey",
  "Loison",
  "Loisy",
  "Lommerange",
  "Longchamp",
  "Longchamp-sous-Châtenois",
  "Longchamps-sur-Aire",
  "Longeaux",
  "Longeville-en-Barrois",
  "Longeville-lès-Metz",
  "Longeville-lès-Saint-Avold",
  "Longlaville",
  "Longuyon",
  "Longwy",
  "Lorey",
  "Loromontzey",
  "Lorquin",
  "Lorry-lès-Metz",
  "Lorry-Mardigny",
  "Lostroff",
  "Loudrefing",
  "Loupershouse",
  "Loupmont",
  "Louppy-le-Château",
  "Louppy-sur-Loison",
  "Loutzviller",
  "Louvemont-Côte-du-Poivre",
  "Louvigny",
  "Lubécourt",
  "Lubey",
  "Lubine",
  "Lucey",
  "Lucy",
  "Ludres",
  "Lunéville",
  "Lupcourt",
  "Luppy",
  "Lusse",
  "Luttange",
  "Lutzelbourg",
  "Luvigny",
  "Luzy-Saint-Martin",
  "Macheren",
  "Maconcourt",
  "Madecourt",
  "Madegney",
  "Madonne-et-Lamerey",
  "Magnières",
  "Le Magny",
  "Maidières",
  "Mailly-sur-Seille",
  "Mainvillers",
  "Mairy-Mainville",
  "Maixe",
  "Maizeray",
  "Maizeroy",
  "Maizery",
  "Maizey",
  "Maizières",
  "Maizières-lès-Metz",
  "Maizières-lès-Vic",
  "Malaincourt",
  "Malancourt",
  "Malaucourt-sur-Seille",
  "Malavillers",
  "Malleloy",
  "Malling",
  "Malroy",
  "Malzéville",
  "Mamey",
  "Mance",
  "Mancieulles",
  "Manderen",
  "Mandray",
  "Mandres-aux-Quatre-Tours",
  "Mandres-en-Barrois",
  "Mandres-sur-Vair",
  "Mangiennes",
  "Mangonville",
  "Manheulles",
  "Manhoué",
  "Manom",
  "Manoncourt-en-Vermois",
  "Manoncourt-en-Woëvre",
  "Manonville",
  "Manonviller",
  "Many",
  "Marainville-sur-Madon",
  "Marainviller",
  "Marange-Silvange",
  "Marange-Zondrange",
  "Marbache",
  "Marchéville-en-Woëvre",
  "Marey",
  "Marieulles",
  "Marimont-lès-Bénestroff",
  "Marly",
  "Maron",
  "Maroncourt",
  "Marre",
  "Mars-la-Tour",
  "Marsal",
  "Marsilly",
  "Marson-sur-Barboure",
  "Marthemont",
  "Marthille",
  "Martigny-les-Bains",
  "Martigny-les-Gerbonvaux",
  "Martincourt",
  "Martincourt-sur-Meuse",
  "Martinvelle",
  "Marville",
  "Mattaincourt",
  "Mattexey",
  "Maucourt-sur-Orne",
  "Maulan",
  "Mauvages",
  "La Maxe",
  "Maxéville",
  "Maxey-sur-Meuse",
  "Maxey-sur-Vaise",
  "Maxstadt",
  "Mazeley",
  "Mazerulles",
  "Mazirot",
  "Mécleuves",
  "Mécrin",
  "Médonville",
  "Mégange",
  "Méhoncourt",
  "Meisenthal",
  "Méligny-le-Grand",
  "Méligny-le-Petit",
  "Méménil",
  "Ménarmont",
  "Menaucourt",
  "Le Ménil",
  "Ménil-aux-Bois",
  "Ménil-de-Senones",
  "Ménil-en-Xaintois",
  "Ménil-la-Horgne",
  "Ménil-la-Tour",
  "Ménil-sur-Belvitte",
  "Ménil-sur-Saulx",
  "Menskirch",
  "Mercy-le-Bas",
  "Mercy-le-Haut",
  "Méréville",
  "Merles-sur-Loison",
  "Merschweiller",
  "Merten",
  "Merviller",
  "Messein",
  "Métairies-Saint-Quirin",
  "Metting",
  "Metz",
  "Metzeresche",
  "Metzervisse",
  "Metzing",
  "Mexy",
  "Mey",
  "Midrevaux",
  "Mignéville",
  "Millery",
  "Milly-sur-Bradon",
  "Minorville",
  "Mirecourt",
  "Mittelbronn",
  "Mittersheim",
  "Mogeville",
  "Mognéville",
  "Moineville",
  "Moirey-Flabas-Crépion",
  "Moivrons",
  "Molring",
  "Momerstroff",
  "Moncel-lès-Lunéville",
  "Moncel-sur-Seille",
  "Moncel-sur-Vair",
  "Moncheux",
  "Moncourt",
  "Mondelange",
  "Mondorff",
  "Monneren",
  "Le Mont",
  "Mont-Bonvillers",
  "Mont-devant-Sassey",
  "Mont-l'Étroit",
  "Mont-le-Vignoble",
  "Mont-lès-Lamarche",
  "Mont-lès-Neufchâteau",
  "Mont-Saint-Martin",
  "Mont-sur-Meurthe",
  "Montauville",
  "Montblainville",
  "Montbras",
  "Montbronn",
  "Montdidier",
  "Montenach",
  "Montenoy",
  "Montfaucon-d'Argonne",
  "Les Monthairons",
  "Monthureux-le-Sec",
  "Monthureux-sur-Saône",
  "Montiers-sur-Saulx",
  "Montigny",
  "Montigny-devant-Sassey",
  "Montigny-lès-Metz",
  "Montigny-lès-Vaucouleurs",
  "Montigny-sur-Chiers",
  "Montmédy",
  "Montmotier",
  "Montois-la-Montagne",
  "Montoy-Flanville",
  "Montplonne",
  "Montreux",
  "Montsec",
  "Montzéville",
  "Moranville",
  "Morelmaison",
  "Morfontaine",
  "Morgemoulin",
  "Morhange",
  "Moriville",
  "Moriviller",
  "Morizécourt",
  "Morley",
  "Morsbach",
  "Mortagne",
  "Morville",
  "Morville-lès-Vic",
  "Morville-sur-Nied",
  "Morville-sur-Seille",
  "Mouacourt",
  "Mouaville",
  "Mouilly",
  "Moulainville",
  "Moulins-lès-Metz",
  "Moulins-Saint-Hubert",
  "Moulotte",
  "Moussey",
  "Moussey",
  "Mousson",
  "Mouterhouse",
  "Moutiers",
  "Moutrot",
  "Mouzay",
  "Moyemont",
  "Moyen",
  "Moyenmoutier",
  "Moyenvic",
  "Moyeuvre-Grande",
  "Moyeuvre-Petite",
  "Mulcey",
  "Munster",
  "Murvaux",
  "Murville",
  "Muzeray",
  "Naives-en-Blois",
  "Naives-Rosières",
  "Naix-aux-Forges",
  "Nançois-le-Grand",
  "Nançois-sur-Ornain",
  "Nancy",
  "Nant-le-Grand",
  "Nant-le-Petit",
  "Nantillois",
  "Nantois",
  "Narbéfontaine",
  "Nayemont-les-Fosses",
  "Nébing",
  "Nelling",
  "Nepvant",
  "Nettancourt",
  "Neufchâteau",
  "Neufchef",
  "Neufgrange",
  "Neufmaisons",
  "Neufmoulins",
  "Le Neufour",
  "Neufvillage",
  "Neunkirchen-lès-Bouzonville",
  "Neuves-Maisons",
  "La Neuveville-devant-Lépanges",
  "La Neuveville-sous-Châtenois",
  "La Neuveville-sous-Montfort",
  "Neuville-en-Verdunois",
  "Neuville-lès-Vaucouleurs",
  "Neuville-sur-Ornain",
  "Neuviller-lès-Badonviller",
  "Neuviller-sur-Moselle",
  "Neuvillers-sur-Fave",
  "Neuvilly-en-Argonne",
  "Nicey-sur-Aire",
  "Niderhoff",
  "Niderviller",
  "Niederstinzel",
  "Niedervisse",
  "Nilvange",
  "Nitting",
  "Nixéville-Blercourt",
  "Noisseville",
  "Nomeny",
  "Nomexy",
  "Nompatelize",
  "Nonhigny",
  "Nonsard-Lamarche",
  "Nonville",
  "Nonzeville",
  "Norroy",
  "Norroy-le-Sec",
  "Norroy-le-Veneur",
  "Norroy-lès-Pont-à-Mousson",
  "Nossoncourt",
  "Nouillonpont",
  "Nouilly",
  "Nousseviller-lès-Bitche",
  "Nousseviller-Saint-Nabor",
  "Novéant-sur-Moselle",
  "Noviant-aux-Prés",
  "Noyers-Auzécourt",
  "Nubécourt",
  "Oberdorff",
  "Obergailbach",
  "Oberstinzel",
  "Obervisse",
  "Obreck",
  "Ochey",
  "Oëlleville",
  "Œting",
  "Offroicourt",
  "Ogéviller",
  "Ognéville",
  "Ogy",
  "Olizy-sur-Chiers",
  "Ollainville",
  "Olley",
  "Omelmont",
  "Ommeray",
  "Oncourt",
  "Onville",
  "Oriocourt",
  "Ormersviller",
  "Ormes-et-Ville",
  "Ornes",
  "Orny",
  "Oron",
  "Ortoncourt",
  "Osches",
  "Othe",
  "Ottange",
  "Ottonville",
  "Oudrenne",
  "Ourches-sur-Meuse",
  "Ozerailles",
  "Padoux",
  "Pagney-derrière-Barine",
  "Pagny-la-Blanche-Côte",
  "Pagny-lès-Goin",
  "Pagny-sur-Meuse",
  "Pagny-sur-Moselle",
  "Pair-et-Grandrupt",
  "Pallegney",
  "Pange",
  "Pannes",
  "Pareid",
  "Parey-Saint-Césaire",
  "Parey-sous-Montfort",
  "Parfondrupt",
  "Pargny-sous-Mureau",
  "Les Paroches",
  "Parroy",
  "Parux",
  "Peltre",
  "Petit-Failly",
  "Petit-Réderching",
  "Petit-Tenquin",
  "La Petite-Fosse",
  "La Petite-Raon",
  "Petite-Rosselle",
  "Petitmont",
  "Pettoncourt",
  "Pettonville",
  "Peuvillers",
  "Pévange",
  "Pexonne",
  "Phalsbourg",
  "Philippsbourg",
  "Phlin",
  "Piblange",
  "Piennes",
  "Pierre-la-Treiche",
  "Pierre-Percée",
  "Pierrefitte",
  "Pierrefitte-sur-Aire",
  "Pierrepont",
  "Pierrepont-sur-l'Arentèle",
  "Pierreville",
  "Pierrevillers",
  "Pillon",
  "Pintheville",
  "Plaine-de-Walsch",
  "Plainfaing",
  "Plappeville",
  "Plesnois",
  "Pleuvezain",
  "Plombières-les-Bains",
  "Pommérieux",
  "Pompey",
  "Pompierre",
  "Pont-à-Mousson",
  "Pont-lès-Bonfays",
  "Pont-Saint-Vincent",
  "Pont-sur-Madon",
  "Pont-sur-Meuse",
  "Pontoy",
  "Pontpierre",
  "Porcelette",
  "Port-sur-Seille",
  "Portieux",
  "Postroff",
  "Pouilly",
  "Pouilly-sur-Meuse",
  "Les Poulières",
  "Pournoy-la-Chétive",
  "Pournoy-la-Grasse",
  "Poussay",
  "Pouxeux",
  "Praye",
  "Prény",
  "Pretz-en-Argonne",
  "Preutin-Higny",
  "Prévocourt",
  "Prey",
  "Provenchères-lès-Darney",
  "Provenchères-sur-Fave",
  "Le Puid",
  "Pulligny",
  "Pulney",
  "Pulnoy",
  "Punerot",
  "Puttelange-aux-Lacs",
  "Puttelange-lès-Thionville",
  "Puttigny",
  "Puxe",
  "Puxieux",
  "Puzieux",
  "Puzieux",
  "Quevilloncourt",
  "Quincy-Landzécourt",
  "Racécourt",
  "Racrange",
  "Rahling",
  "Rainville",
  "Raival",
  "Rambervillers",
  "Rambluzin-et-Benoite-Vaux",
  "Rambucourt",
  "Ramecourt",
  "Ramonchamp",
  "Rancourt",
  "Rancourt-sur-Ornain",
  "Ranguevaux",
  "Ranzières",
  "Raon-aux-Bois",
  "Raon-l'Étape",
  "Raon-lès-Leau",
  "Raon-sur-Plaine",
  "Rapey",
  "Rarécourt",
  "Raucourt",
  "Raves",
  "Raville",
  "Raville-sur-Sânon",
  "Rebeuville",
  "Réchicourt-la-Petite",
  "Réchicourt-le-Château",
  "Récicourt",
  "Réclonville",
  "Récourt-le-Creux",
  "Rédange",
  "Réding",
  "Reffroy",
  "Regnévelle",
  "Regnéville-sur-Meuse",
  "Regney",
  "Rehaincourt",
  "Rehainviller",
  "Rehaupal",
  "Reherrey",
  "Réhon",
  "Reillon",
  "Relanges",
  "Rembercourt-Sommaisne",
  "Rembercourt-sur-Mad",
  "Rémelfang",
  "Rémelfing",
  "Rémeling",
  "Remennecourt",
  "Remenoville",
  "Réméréville",
  "Rémering",
  "Rémering-lès-Puttelange",
  "Remicourt",
  "Rémilly",
  "Remiremont",
  "Remoiville",
  "Remomeix",
  "Remoncourt",
  "Remoncourt",
  "Removille",
  "Renauvoid",
  "Réning",
  "Repaix",
  "Repel",
  "Resson",
  "Retonfey",
  "Rettel",
  "Revigny-sur-Ornain",
  "Réville-aux-Bois",
  "Reyersviller",
  "Rezonville",
  "Rhodes",
  "Riaville",
  "Ribeaucourt",
  "Richardménil",
  "Riche",
  "Richecourt",
  "Richeling",
  "Richemont",
  "Richeval",
  "Rigny-la-Salle",
  "Rigny-Saint-Martin",
  "Rimling",
  "Ritzing",
  "Robécourt",
  "Robert-Espagne",
  "Rochesson",
  "Rochonvillers",
  "Rocourt",
  "Rodalbe",
  "Rodemack",
  "Rogéville",
  "Rohrbach-lès-Bitche",
  "Les Roises",
  "Rolbing",
  "Rollainville",
  "Romagne-sous-les-Côtes",
  "Romagne-sous-Montfaucon",
  "Romain",
  "Romain-aux-Bois",
  "Rombas",
  "Romelfing",
  "Romont",
  "Roncourt",
  "Ronvaux",
  "Roppeviller",
  "Rorbach-lès-Dieuze",
  "Rosbruck",
  "Rosières-aux-Salines",
  "Rosières-en-Haye",
  "Rosselange",
  "Les Rouges-Eaux",
  "Rouhling",
  "Le Roulier",
  "Roupeldange",
  "Roussy-le-Village",
  "Rouves",
  "Rouvres-en-Woëvre",
  "Rouvres-en-Xaintois",
  "Rouvres-la-Chétive",
  "Rouvrois-sur-Meuse",
  "Rouvrois-sur-Othain",
  "Roville-aux-Chênes",
  "Roville-devant-Bayon",
  "Royaumeix",
  "Rozelieures",
  "Rozérieulles",
  "Rozerotte",
  "Rozières-sur-Mouzon",
  "Rugney",
  "Rumont",
  "Ruppes",
  "Rupt-aux-Nonains",
  "Rupt-devant-Saint-Mihiel",
  "Rupt-en-Woëvre",
  "Rupt-sur-Moselle",
  "Rupt-sur-Othain",
  "Rurange-lès-Thionville",
  "Russange",
  "Rustroff",
  "Saffais",
  "Sailly-Achâtel",
  "Saint-Ail",
  "Saint-Amand-sur-Ornain",
  "Saint-Amé",
  "Saint-André-en-Barrois",
  "Saint-Aubin-sur-Aire",
  "Saint-Avold",
  "Saint-Baslemont",
  "Saint-Baussant",
  "Saint-Benoît-la-Chipotte",
  "Saint-Boingt",
  "Saint-Clément",
  "Saint-Dié-des-Vosges",
  "Saint-Epvre",
  "Saint-Étienne-lès-Remiremont",
  "Saint-Firmin",
  "Saint-François-Lacroix",
  "Saint-Genest",
  "Saint-Georges",
  "Saint-Germain",
  "Saint-Germain-sur-Meuse",
  "Saint-Gorgon",
  "Saint-Hilaire-en-Woëvre",
  "Saint-Hubert",
  "Saint-Jean-d'Ormont",
  "Saint-Jean-de-Bassel",
  "Saint-Jean-Kourtzerode",
  "Saint-Jean-lès-Buzy",
  "Saint-Jean-lès-Longuyon",
  "Saint-Jean-Rohrbach",
  "Saint-Joire",
  "Saint-Julien",
  "Saint-Julien-lès-Gorze",
  "Saint-Julien-lès-Metz",
  "Saint-Julien-sous-les-Côtes",
  "Saint-Jure",
  "Saint-Laurent-sur-Othain",
  "Saint-Léonard",
  "Saint-Louis",
  "Saint-Louis-lès-Bitche",
  "Saint-Marcel",
  "Saint-Mard",
  "Saint-Martin",
  "Saint-Maurice-aux-Forges",
  "Saint-Maurice-sous-les-Côtes",
  "Saint-Maurice-sur-Mortagne",
  "Saint-Maurice-sur-Moselle",
  "Saint-Max",
  "Saint-Médard",
  "Saint-Menge",
  "Saint-Michel-sur-Meurthe",
  "Saint-Mihiel",
  "Saint-Nabord",
  "Saint-Nicolas-de-Port",
  "Saint-Ouen-lès-Parey",
  "Saint-Pancré",
  "Saint-Paul",
  "Saint-Pierremont",
  "Saint-Pierrevillers",
  "Saint-Prancher",
  "Saint-Privat-la-Montagne",
  "Saint-Quirin",
  "Saint-Remimont",
  "Saint-Remimont",
  "Saint-Remy",
  "Saint-Rémy-aux-Bois",
  "Saint-Remy-la-Calonne",
  "Saint-Sauveur",
  "Saint-Stail",
  "Saint-Supplet",
  "Saint-Vallier",
  "Sainte-Barbe",
  "Sainte-Barbe",
  "Sainte-Geneviève",
  "Sainte-Hélène",
  "Sainte-Marguerite",
  "Sainte-Marie-aux-Chênes",
  "Sainte-Pôle",
  "Sainte-Ruffine",
  "Saizerais",
  "La Salle",
  "Salmagne",
  "Salonnes",
  "Samogneux",
  "Sampigny",
  "Sanchey",
  "Sancy",
  "Sandaucourt",
  "Sanry-lès-Vigy",
  "Sanry-sur-Nied",
  "Sans-Vallois",
  "Sanzey",
  "Sapois",
  "Sarralbe",
  "Sarraltroff",
  "Sarrebourg",
  "Sarreguemines",
  "Sarreinsming",
  "Sartes",
  "Sassey-sur-Meuse",
  "Saudrupt",
  "Le Saulcy",
  "Saulcy-sur-Meurthe",
  "Saulmory-et-Villefranche",
  "Saulnes",
  "Saulny",
  "Saulvaux",
  "Saulx-lès-Champlon",
  "Saulxerotte",
  "Saulxures-lès-Bulgnéville",
  "Saulxures-lès-Nancy",
  "Saulxures-lès-Vannes",
  "Saulxures-sur-Moselotte",
  "Sauvigny",
  "Sauville",
  "Sauvoy",
  "Savigny",
  "Savonnières-devant-Bar",
  "Savonnières-en-Perthois",
  "Saxon-Sion",
  "Schalbach",
  "Schmittviller",
  "Schneckenbusch",
  "Schœneck",
  "Schorbach",
  "Schwerdorff",
  "Schweyen",
  "Scy-Chazelles",
  "Secourt",
  "Seichamps",
  "Seicheprey",
  "Seigneulles",
  "Seingbouse",
  "Selaincourt",
  "Semécourt",
  "Senaide",
  "Senon",
  "Senoncourt-les-Maujouy",
  "Senones",
  "Senonges",
  "Septsarges",
  "Sepvigny",
  "Seranville",
  "Seraumont",
  "Sercœur",
  "Serécourt",
  "Serémange-Erzange",
  "Serocourt",
  "Serres",
  "Serrouville",
  "Servigny-lès-Raville",
  "Servigny-lès-Sainte-Barbe",
  "Seuil-d'Argonne",
  "Seuzey",
  "Sexey-aux-Forges",
  "Sexey-les-Bois",
  "Sierck-les-Bains",
  "Siersthal",
  "Sillegny",
  "Silly-en-Saulnois",
  "Silly-sur-Nied",
  "Silmont",
  "Sionne",
  "Sionviller",
  "Sivry",
  "Sivry-la-Perche",
  "Sivry-sur-Meuse",
  "Socourt",
  "Solgne",
  "Sommedieue",
  "Sommeilles",
  "Sommelonne",
  "Sommerviller",
  "Soncourt",
  "Sorbey",
  "Sorbey",
  "Sorcy-Saint-Martin",
  "Sornéville",
  "Sotzeling",
  "Soucht",
  "Les Souhesmes-Rampont",
  "Souilly",
  "Soulosse-sous-Saint-Élophe",
  "Spicheren",
  "Spincourt",
  "Sponville",
  "Stainville",
  "Stenay",
  "Stiring-Wendel",
  "Stuckange",
  "Sturzelbronn",
  "Suisse",
  "Suriauville",
  "Le Syndicat",
  "Taillancourt",
  "Taintrux",
  "Talange",
  "Tanconville",
  "Tannois",
  "Tantonville",
  "Tarquimpol",
  "Tellancourt",
  "Tendon",
  "Tenteling",
  "Terville",
  "Téterchen",
  "Teting-sur-Nied",
  "Thaon-les-Vosges",
  "Théding",
  "Thélod",
  "They-sous-Montfort",
  "They-sous-Vaudemont",
  "Thézey-Saint-Martin",
  "Thiaucourt-Regniéville",
  "Thiaville-sur-Meurthe",
  "Thicourt",
  "Thiébauménil",
  "Thiéfosse",
  "Thierville-sur-Meuse",
  "Thil",
  "Thillombois",
  "Thillot",
  "Le Thillot",
  "Thimonville",
  "Thionville",
  "Thiraucourt",
  "Le Tholy",
  "Thonne-la-Long",
  "Thonne-le-Thil",
  "Thonne-les-Près",
  "Thonnelle",
  "Les Thons",
  "Thonville",
  "Thorey-Lyautey",
  "Thuilley-aux-Groseilles",
  "Thuillières",
  "Thumeréville",
  "Tiercelet",
  "Tignécourt",
  "Tilleux",
  "Tilly-sur-Meuse",
  "Tincry",
  "Tollaincourt",
  "Tomblaine",
  "Tonnoy",
  "Torcheville",
  "Totainville",
  "Toul",
  "Tragny",
  "Tramont-Émy",
  "Tramont-Lassus",
  "Tramont-Saint-André",
  "Trampot",
  "Tranqueville-Graux",
  "Tremblecourt",
  "Trémery",
  "Trémont-sur-Saulx",
  "Trémonzey",
  "Trésauvaux",
  "Tressange",
  "Tréveray",
  "Trieux",
  "Tritteling-Redlach",
  "Les Trois-Domaines",
  "Troisfontaines",
  "Tromborn",
  "Trondes",
  "Tronville",
  "Tronville-en-Barrois",
  "Troussey",
  "Troyon",
  "Tucquegnieux",
  "Turquestein-Blancrupt",
  "Ubexy",
  "Uckange",
  "Ugny",
  "Ugny-sur-Meuse",
  "Uriménil",
  "Uruffe",
  "Urville",
  "Uxegney",
  "Uzemain",
  "Vacherauville",
  "La Vacheresse-et-la-Rouillie",
  "Vacqueville",
  "Vadelaincourt",
  "Vadonville",
  "Vagney",
  "Vahl-Ebersing",
  "Vahl-lès-Bénestroff",
  "Vahl-lès-Faulquemont",
  "Le Val-d'Ajol",
  "Val-d'Ornain",
  "Val-de-Bride",
  "Le Val-de-Guéblange",
  "Val-et-Châtillon",
  "Valbois",
  "Valfroicourt",
  "Valhey",
  "Vallerange",
  "Valleroy",
  "Valleroy-aux-Saules",
  "Valleroy-le-Sec",
  "Vallois",
  "Les Vallois",
  "Valmestroff",
  "Valmont",
  "Valmunster",
  "Le Valtin",
  "Vandelainville",
  "Vandeléville",
  "Vandières",
  "Vandœuvre-lès-Nancy",
  "Vannecourt",
  "Vannes-le-Châtel",
  "Vantoux",
  "Vany",
  "Varangéville",
  "Varennes-en-Argonne",
  "Varize",
  "Varmonzey",
  "Varnéville",
  "Varsberg",
  "Vasperviller",
  "Vassincourt",
  "Vathiménil",
  "Vatimont",
  "Vaubecourt",
  "Vaubexy",
  "Vaucouleurs",
  "Vaucourt",
  "Vaudémont",
  "Vaudeville",
  "Vaudéville",
  "Vaudeville-le-Haut",
  "Vaudigny",
  "Vaudoncourt",
  "Vaudoncourt",
  "Vaudreching",
  "Vauquois",
  "Vaux",
  "Vaux-devant-Damloup",
  "Vaux-lès-Palameix",
  "Vavincourt",
  "Vaxainville",
  "Vaxoncourt",
  "Vaxy",
  "Veckersviller",
  "Veckring",
  "Vecoux",
  "Vého",
  "Velaine-en-Haye",
  "Velaine-sous-Amance",
  "Velaines",
  "Velle-sur-Moselle",
  "Velosnes",
  "Velotte-et-Tatignécourt",
  "Velving",
  "Veney",
  "Vennezey",
  "Ventron",
  "Verdenal",
  "Verdun",
  "Vergaville",
  "Le Vermont",
  "Verneuil-Grand",
  "Verneuil-Petit",
  "Vernéville",
  "Verny",
  "Vervezelle",
  "Véry",
  "Vescheim",
  "Vexaincourt",
  "Vézelise",
  "Vibersviller",
  "Vic-sur-Seille",
  "Vicherey",
  "Vienville",
  "Vieux-Lixheim",
  "Vieux-Moulin",
  "Viéville-en-Haye",
  "Vigneul-sous-Montmédy",
  "Vigneulles",
  "Vigneulles-lès-Hattonchâtel",
  "Vignot",
  "Vigny",
  "Vigy",
  "Vilcey-sur-Trey",
  "Villacourt",
  "Ville-au-Montois",
  "Ville-au-Val",
  "Ville-devant-Belrain",
  "Ville-devant-Chaumont",
  "Ville-en-Vermois",
  "Ville-en-Woëvre",
  "Ville-Houdlémont",
  "Ville-sur-Cousances",
  "Ville-sur-Illon",
  "Ville-sur-Saulx",
  "Ville-sur-Yron",
  "Villecey-sur-Mad",
  "Villécloye",
  "Viller",
  "Villeroy-sur-Méholle",
  "Villers",
  "Villers-aux-Vents",
  "Villers-devant-Dun",
  "Villers-en-Haye",
  "Villers-la-Chèvre",
  "Villers-la-Montagne",
  "Villers-le-Rond",
  "Villers-le-Sec",
  "Villers-lès-Mangiennes",
  "Villers-lès-Moivrons",
  "Villers-lès-Nancy",
  "Villers-sous-Pareid",
  "Villers-sous-Prény",
  "Villers-Stoncourt",
  "Villers-sur-Meuse",
  "Villers-sur-Nied",
  "Villerupt",
  "Villette",
  "Villey-le-Sec",
  "Villey-Saint-Étienne",
  "Villing",
  "Villoncourt",
  "Villotte",
  "Villotte-devant-Louppy",
  "Villotte-sur-Aire",
  "Villouxel",
  "Vilosnes-Haraumont",
  "Vilsberg",
  "Viménil",
  "Vincey",
  "Viocourt",
  "Vioménil",
  "Vionville",
  "Virecourt",
  "Virming",
  "Viterne",
  "Vitrey",
  "Vitrimont",
  "Vitry-sur-Orne",
  "Vittarville",
  "Vittel",
  "Vittersbourg",
  "Vittoncourt",
  "Vittonville",
  "Viviers",
  "Viviers-le-Gras",
  "Viviers-lès-Offroicourt",
  "Viviers-sur-Chiers",
  "Vœlfling-lès-Bouzonville",
  "Void-Vacon",
  "Voimhaut",
  "Voinémont",
  "La Voivre",
  "Les Voivres",
  "Volmerange-lès-Boulay",
  "Volmerange-les-Mines",
  "Volmunster",
  "Volstroff",
  "Vomécourt",
  "Vomécourt-sur-Madon",
  "Vouthon-Bas",
  "Vouthon-Haut",
  "Vouxey",
  "Voyer",
  "Vrécourt",
  "Vroncourt",
  "Vroville",
  "Vry",
  "Vulmont",
  "Waldhouse",
  "Waldweistroff",
  "Waldwisse",
  "Walschbronn",
  "Walscheid",
  "Waltembourg",
  "Waly",
  "Warcq",
  "Watronville",
  "Waville",
  "Wavrille",
  "Wiesviller",
  "Willeroncourt",
  "Willerwald",
  "Wintersbourg",
  "Wisembach",
  "Wiseppe",
  "Wittring",
  "Woël",
  "Wœlfling-lès-Sarreguemines",
  "Woimbey",
  "Woippy",
  "Woustviller",
  "Wuisse",
  "Xaffévillers",
  "Xammes",
  "Xamontarupt",
  "Xanrey",
  "Xaronval",
  "Xermaménil",
  "Xertigny",
  "Xeuilley",
  "Xirocourt",
  "Xivray-et-Marvoisin",
  "Xivry-Circourt",
  "Xocourt",
  "Xonrupt-Longemer",
  "Xonville",
  "Xouaxange",
  "Xousse",
  "Xures",
  "Yutz",
  "Zarbeling",
  "Zetting",
  "Zilling",
  "Zimming",
  "Zincourt",
  "Zommange",
  "Zoufftgen",
];

/*____________________________________ LORRAINE IPSUM FUNCTIONS ____________________________________*/

function generateParagraph(size = "random") {
  // Var(s)
  var paragraph = "Lorraine Ipsum ";
  if (Number.isInteger(size)) {
    var wordCount = size;
  } else if (size === "small") {
    var wordCount = 10;
  } else if (size === "large") {
    var wordCount = 50;
  } else {
    var wordCount = getRandomIntBetween(5, 40);
  }

  // Process
  for (let i = 0; i < wordCount - 1; i++) {
    var wordEnding = probability(10) ? ", " : " ";
    paragraph += getRandomValueFromArray(villesLorraine) + wordEnding;
  }
  paragraph += getRandomValueFromArray(villesLorraine) + ".";

  // Output
  return paragraph;
}

/*____________________________________ ASCIIS LIBRAIRY ____________________________________*/

var asciis = [
  {
    name: "anteater",
    type: "animal",
    color: "LightSlateGray",
    art: String.raw` 
       _.---._    /\\
    ./'       "--'\//
  ./              o \
 /./\  )______   \__ \
./  / /\ \   | \ \  \ \
   / /  \ \  | |\ \  \7
    "     "    "  "
    `,
    author: "VK",
  },

  {
    name: "armadillo",
    type: "animal",
    color: "RosyBrown",
    art: String.raw` 
             _.-----__    
          ,:::://///,:::-. 
         /:''/////// \\:::;/|/
        /'   ||||||     :://''\
      .' ,   ||||||     ./(  e \
-===~__-'\__X_'''''\_____/~'-.__'0
           ~~        ~~       
    `,
    author: "Seal do Mar",
  },

  {
    name: "bat",
    type: "animal",
    color: "DimGray",
    art: String.raw` 
  /\                 /\
 / \'._   (\_/)   _.'/ \
/_.''._'--('.')--'_.''._\
| \_ / ';=/ " \=;' \ _/ |
 \/ '\__|'\___/'|__/'  \/
         \(/|\)/
          " ' "
    `,
    author: "jgs",
  },

  {
    name: "beaver",
    type: "animal",
    color: "DarkGoldenrod",
    art: String.raw` 
            ___
         .="   "=._.---.
       ."         c ' Y' p
      /   ,       '.  w_/
      |   '-.   /     /
_,..._|      )_-\ \_=.\
'-....-''------)))'=-'"''"
    `,
    author: "jgs",
  },

  {
    name: "cat",
    type: "animal",
    color: "DarkSlateGrey",
    art: String.raw` 
 )\   _,
 | "^" (
 (e  a )
=-\Y  -=
   T"^)   _
  /   (  ((
 /     )  ';,
(      ) )  \\
 \ Y  '  /  ))
  || ;  /   //
  )| ( (__,</
c{{i.}}=oo-^
    `,
    author: "",
  },

  {
    name: "crab",
    type: "animal",
    color: "Red",
    art: String.raw` 
   __       __    
  / <'     '> \
 (  / @   @ \  )
  \(_ _\_/_ _)/
(\ '-/     \-' /)
 "===\     /==="
  .==')___('==.
 ' .='     '=. '
    `,
    author: "",
  },

  {
    name: "deer",
    type: "animal",
    color: "Tan",
    art: String.raw` 
    (      )
    ))    ((
   //      \\
  | \\____// |
 \~/ ~    ~\/~~/
  (|    _/o  ~~
   /  /     ,|
  (~~~)__.-\ |
   ''~~    | |
    |      | |
    |        |
   /          \
  '\          /'
    '\_    _/'
       ~~~~
    `,
    author: "",
  },

  {
    name: "dog",
    type: "animal",
    color: "Tan",
    art: String.raw` 
            /)-_-(\
             (o o)
     .-----__/\o/
    /  __      /
\__/\ /  \_\ |/
     \\     ||
     //     ||
     |\     |\
    `,
    author: "",
  },

  {
    name: "duck",
    type: "animal",
    color: "DarkGray",
    art: String.raw` 
      ,~~.
     (  9 )-_,
(\___ )=='-'
 \ .   ) )
  \ '-' /
   '~j-'  
     "=:
    `,
    author: "",
  },

  {
    name: "elephant",
    type: "animal",
    color: "Silver",
    art: String.raw` 
   ___      ___
  /   \____/   \
 /    / __ \    \
/    |  ..  |    \
\___/|      |\___/\
   | |_|  |_|      \
   | |/|__|\|       )\
   |   |__|         | \
   | @ |  | @ || @ |/  m
   |   |~~|   ||   |
   'ooo'  'ooo''ooo'
    `,
    author: "Hamilton Furtado",
  },

  {
    name: "fish",
    type: "animal",
    color: "MediumTurquoise",
    art: String.raw` 
      /'·.¸
     /¸...¸':·
 ¸.·'  ¸   '·.¸.·°)
: © ):´;      ¸  {
 °·.¸¸'·  ¸.·´\'·¸)
      \\´´\¸.·´
    `,
    author: "",
  },

  {
    name: "flamingo",
    type: "animal",
    color: "Pink",
    art: String.raw` 
         __
        /('o
  ,-,  //  \\
 (,,,) ||   V
(,,,,)\//
(,,,/w)-'
\,,/w)
 V/uu
/ |
| |
o o
\ |
 \|
    `,
    author: "",
  },

  {
    name: "fox",
    type: "animal",
    color: "DarkOrange",
    art: String.raw` 
 /\   /\
//\\_//\\     __/\
\_     _/    /   /
 / . . \    /^^^]
 \_\ /_/    [   ]
  / ° \_    [   /
  \     \_  /  /
   [ [ /  \/ _/
  _[ [ \  /_/
    `,
    author: "",
  },

  {
    name: "frog",
    type: "animal",
    color: "SpringGreen",
    art: String.raw` 
       _   _
      (o)-(o)
   .-(   "   )-.
  /  /;'-=-';\  \
__\ _\ \___/ /_ /__
  /|  /|\ /|\  |\
    `,
    author: "",
  },

  {
    name: "hippo",
    type: "animal",
    color: "DarkGray",
    art: String.raw` 
     c~~p ,---------.
,---'oo  )           \
( O O                  )/
'=^='                 /
      \    ,     .   /
      \\  |-----'|  /
      ||__|    |_|__|
    `,
    author: "",
  },

  {
    name: "lion",
    type: "animal",
    color: "Peru",
    art: String.raw` 
            o00000000o
           o0/\0000/\0o
          o00\c "" J/00o
o.       0000/ b  d \000
'00.     0000    _  |000
 '00     '0000(=_Y_=)00'
 //       ;0000'\7/000'
((       /  '0000000'
 \\    .'          |
  \\  /       \  | |
   \\/         ) | |
    \         /_ | |__
    (___________)))))))
    `,
    author: "jgs",
  },

  {
    name: "marmot",
    type: "animal",
    color: "DarkGoldenrod",
    art: String.raw` 
       (>\---/<)
       ,'     '.
      /  q   p  \
     (  >(_Y_)<  )
      >-' '-' '-<-.
     /  _.== ,=.,- \
    /,    )'  '(    )
   / '._.'      '--<
c /    \         |  |
  \      )       ;_/
   '._ _/_  ___.'-\\\
      '--\\\
    `,
    author: "",
  },

  {
    name: "mouse",
    type: "animal",
    color: "Grey",
    art: String.raw` 
 
(q\_/p)
 /. .\.-""""-.      __
=\_t_/=    /  '\   (
  )\ ))__ _\    |___)
 nn-nn'  'nn---'
    `,
    author: "",
  },

  {
    name: "parrot",
    type: "animal",
    color: "DodgerBlue",
    art: String.raw` 
                          .
                          | \/|
  (\   _                  ) )|/|
      (/            _----. /.'.'
.-._________..      .' @ _\  .'
'.._______.   '.   /    (_| .')
  '._____.  /   '-/      | _.'
   '.______ (         ) ) \
     '..____ '._       )  )
        .' __.--\  , ,  // ((
        '.'     |  \/   (_.'(
                |   \ .'
                 \   (
                  \   '.
                   \ \ '.)
                    '-'-'
    `,
    author: "",
  },

  {
    name: "pig",
    type: "animal",
    color: "Pink",
    art: String.raw` 
       9
  ,--.-'-,--.
  \  /-~-\  /
 / )' a a '( \
( (  ,---.  ) )
 \ '(_o_o_)' /
  \   '-'   /
   | |---| |
   [_]   [_]
    `,
    author: "",
  },

  {
    name: "pinguin",
    type: "animal",
    color: "Black",
    art: String.raw` 
   __
-=(o '.
   '.-.\
   /|  \\
   '|  ||
    _\_):,_
    `,
    author: "",
  },

  {
    name: "teckel",
    type: "animal",
    color: "DarkGoldenrod",
    art: String.raw` 
                        __
 ,                    ," e'--o
((                   (  | __,'
\\~----------------' \_;/
(                      /
 /) ._______________. )
(( (              (( (
'' '               ''-'
    `,
    author: "hjw",
  },

  {
    name: "turtle",
    type: "animal",
    color: "LimeGreen",
    art: String.raw` 
                __
     .,-;-;-,. /'_\
   _/_/_/_|_\_\) /
'-<_><_><_><_>=/\
  '/_/    /_/  \_\
   ""     ""    ""
    `,
    author: "",
  },

  {
    name: "whale",
    type: "animal",
    color: "RoyalBlue",
    art: String.raw` 
       .
      ":"
    ___:____     |"\/"|
  ,'        '.    \  /
  |  O        \___/  |
~^~^~^~^~^~^~^~^~^~^~^~^~
    `,
    author: "",
  },

  {
    name: "flintstones",
    type: "character",
    color: "DarkOrange",
    art: String.raw` 
  \/________________ 
 /     _____________)
/     /     /   \ |
\/\/\/     (O) (O)|
  |           ------, 
  |  _       ______/ 
  | (_      /   \  \
  |        /  ___\_ \
  |        \      / /
__|_________\______/
\______________\./__\
    `,
    author: "",
  },

  {
    name: "homer",
    type: "character",
    color: "Gold",
    art: String.raw` 
    ___
   //_\\_
 ."\\    ".
/          \
|           \_
|       ,--.-.)
 \     /  o \o\
 /\/\  \    /_/
  (_.   '--'__)
   |     .-'  \
   |  .-'.     )
   | (  _/--.-'
   |  '.___.'
         (
    `,
    author: "",
  },

  {
    name: "maryPoppins",
    type: "character",
    color: "Black",
    art: String.raw` 
         _
      .-' '-.
     /       \
    |,-,-,-,-,|
   ___   |
  _)_(_  |
  (/ \)  |
  _\_/_  /)
 / \_/ \//
 |(   )\/
 ||)_( 
 |/   \
 n|   |
/ \   |
|_|___|
   \|/
  _/L\_
    `,
    author: "",
  },

  {
    name: "pinkPanther",
    type: "character",
    color: "Pink",
    art: String.raw` 
 .--.             .--.
( ('\\.---------.//') )
 '-.    __   __    .-'
  /    /__\ /__\    \
 |     \ 0/ \ 0/     |
  \     _/   \_     /
   '-.  /-"""-\  .-'
     /  '.___.'  \
     \     I     /
      ';--'''--;'
        '.___.'
          | |
    `,
    author: "",
  },

  {
    name: "r2d2",
    type: "character",
    color: "Blue",
    art: String.raw`
    .---.
  .'_:___".
  |__ --==|
  [  ]  :[|
  |__| I=[|
  / / ____|
 |-/.____.'
/___\ /___\  
    `,
    author: "",
  },

  {
    name: "sonic",
    type: "character",
    color: "Blue",
    art: String.raw`
          .,
.      _,'f----.._
|\ ,-'"/  |     ,'
|,_  ,--.      /
/,-. ,''.     (_
f  o|  o|__     "'-.
,-._.,--'_ '.   _.,-'
'"' ___.,'' j,-'
  '-.__.,--'
    `,
    author: "",
  },

  {
    name: "spaceInvader",
    type: "character",
    color: "Chartreuse",
    art: String.raw`
         __
       _|  |_
     _|      |_
    |  _    _  |
    | |_|  |_| |
 _  |  _    _  |  _
|_|_|_| |__| |_|_|_|
  |_|_        _|_|
    |_|      |_|
    `,
    author: "",
  },

  {
    name: "squidward",
    type: "character",
    color: "Grey",
    art: String.raw` 
     .--'''''''''--.
   '      .---.      '.
 /    .-----------.    \
/        .-----.        \
|       .-.   .-.       |
|      /___\ /___\      |
 \    | .-. | .-. |    /
  '-._| | | | | | |_.-'
      | '-' | '-' |
       \___/ \___/
    _.-'  /   \  '-._
  .' _.--|     |--._ '.
  ' _...-|     |-..._ '
         |     |
         '.___.'
    `,
    author: "",
  },

  {
    name: "tweetieBird",
    type: "character",
    color: "Orange",
    art: String.raw` 
    .-"-.
   /  - -\
   \  @ @/
    (_ <_)
    _)(
,_('_))\
 "-\)__/
  __|||__
 ((__|__))
    `,
    author: "",
  },

  {
    name: "yosemiteSam",
    type: "character",
    color: "Red",
    art: String.raw` 
        ___ 
    .-''   ''-.
  .'           '.
 /               \
|      __ __      |
'      /\_/\      '
 \  ___\O_O/___  /
  \/    ___    \/
  (    (___)    )
   \   /\_/\   /
    \  |._.|  /
     \ |   | /
      \/   \/
    `,
    author: "",
  },
];

/*____________________________________ ASCIIS FUNCTIONS ____________________________________*/

function printAsciiById(asciiId) {
  // Output
  console.log(
    `%c${asciis[asciiId].art}`,
    `color: ${asciis[asciiId].color}; font-family: monospace;`
  );
}

function printAsciiByName(asciiName) {
  // Process
  selectedAscii = asciis.findIndex(ascii => ascii.name === asciiName); // Select ascii according the name
  // Output
  printAsciiById(selectedAscii);
}

function printAsciiRandom(criteria = "all") {
  // Process
  var selectedAsciis = asciis.filter(ascii => ascii.type === criteria); // Select the asciis matching the criteria
  selectedAsciis.length < 1 && (selectedAsciis = Object.values(asciis)); // If empty or nothing is matching, select them all
  randomAscii = getRandomValueFromArray(selectedAsciis);
  // Output
  printAsciiByName(randomAscii.name);
}
