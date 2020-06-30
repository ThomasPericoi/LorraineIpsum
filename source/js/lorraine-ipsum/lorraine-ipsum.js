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
