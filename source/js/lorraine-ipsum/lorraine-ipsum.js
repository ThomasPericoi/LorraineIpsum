/*____________________________________ LORRAINE IPSUM FUNCTIONS ____________________________________*/

function generateParagraph(size = "random") {
  // Var(s)
  var paragraph = "Lorraine Ipsum ";
  if (Number.isInteger(size)) {
    var wordCount = size - 2;
  } else {
    var wordCount = getRandomIntBetween(5, 50);
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
  return paragraph;
}
