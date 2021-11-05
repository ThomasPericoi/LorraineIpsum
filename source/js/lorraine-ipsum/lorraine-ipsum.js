/*____________________________________ LORRAINE IPSUM FUNCTIONS ____________________________________*/

function generateParagraph(size = "random", intro = true) {
  // Var(s)
  var paragraph = "";

  if (Number.isInteger(size)) {
    if (intro) {
      paragraph = "<b>Lorraine Ipsum</b> ";
      var wordCount = size - 2;
    } else {
      var wordCount = size;
    }
  } else {
    intro && (paragraph = "<b>Lorraine Ipsum</b> ");
    var wordCount = getRandomIntBetween(10, 50);
  }

  // Process
  for (let i = 0; i < wordCount; ) {
    var city = getRandomValueFromArray(villesLorraine);

    if (i == wordCount - 1) {
      var wordEnding = ".";
    } else {
      var wordEnding = probability(10) ? ", " : " ";
    }

    paragraph += city + wordEnding;

    i += 1 + countCharacter(city, " ");
  }

  // Output
  return `<p>${paragraph}</p>`;
}

function generateParagraphes(count = "random") {
  // Var(s)
  var paragraphes = "";
  Number.isInteger(count)
    ? (paragraphCount = count)
    : (paragraphCount = getRandomIntBetween(1, 5));

  // Process
  for (let i = 0; i < paragraphCount; i++) {
    i === 0
      ? (paragraphes += generateParagraph())
      : (paragraphes += generateParagraph("random", false));
  }

  return paragraphes;
}
