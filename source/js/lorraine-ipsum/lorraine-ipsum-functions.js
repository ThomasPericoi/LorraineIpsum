(function (global) {
  var LORRAINE_IPSUM_VERSION = "1.0.0";
  var LORRAINE_IPSUM_INTRO = "Lorraine Ipsum";
  var MIN_RANDOM_WORDS = 10;
  var MAX_RANDOM_WORDS = 50;
  var MIN_RANDOM_PARAGRAPHS = 1;
  var MAX_RANDOM_PARAGRAPHS = 5;

  /*____________________________________ UTILITY FUNCTIONS ____________________________________*/

  function getRandomIntBetween(min, max) {
    min = Math.ceil(Number(min));
    max = Math.floor(Number(max));

    if (!Number.isFinite(min) || !Number.isFinite(max)) {
      return NaN;
    }

    if (min > max) {
      var oldMin = min;
      min = max;
      max = oldMin;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomIdFromArray(array) {
    return Math.floor(Math.random() * array.length);
  }

  function getRandomValueFromArray(array) {
    return array[getRandomIdFromArray(array)];
  }

  function probability(chance, max = 100) {
    chance = Number(chance);
    max = Number(max);

    if (!Number.isFinite(chance) || !Number.isFinite(max) || max <= 0) {
      return false;
    }

    chance = Math.max(0, Math.min(chance, max));

    return Math.random() * max < chance;
  }

  function countCharacter(string, character) {
    return String(string).split(character).length - 1;
  }

  function isValidInteger(value) {
    return Number.isInteger(value) && value > 0;
  }

  function normalizeCount(value, fallbackMin, fallbackMax) {
    return isValidInteger(value)
      ? value
      : getRandomIntBetween(fallbackMin, fallbackMax);
  }

  /*____________________________________ LORRAINE IPSUM FUNCTIONS ____________________________________*/

  function listCities() {
    return villesLorraine.slice();
  }

  function getCityById(cityId) {
    return villesLorraine[cityId] || null;
  }

  function getRandomCity() {
    return getRandomValueFromArray(villesLorraine);
  }

  function generateParagraphText(size = "random", intro = true) {
    var paragraph = intro ? LORRAINE_IPSUM_INTRO + " " : "";
    var wordCount = normalizeCount(size, MIN_RANDOM_WORDS, MAX_RANDOM_WORDS);

    if (intro) {
      wordCount = Math.max(1, wordCount - 2);
    }

    for (var i = 0; i < wordCount; ) {
      var city = getRandomCity();
      var isLastWord = i >= wordCount - 1;
      var wordEnding = isLastWord ? "." : probability(10) ? ", " : " ";

      paragraph += city + wordEnding;
      i += 1 + countCharacter(city, " ");
    }

    return paragraph;
  }

  function generateParagraphTexts(count = "random") {
    var paragraphCount = normalizeCount(
      count,
      MIN_RANDOM_PARAGRAPHS,
      MAX_RANDOM_PARAGRAPHS,
    );
    var paragraphs = [];

    for (var i = 0; i < paragraphCount; i++) {
      paragraphs.push(generateParagraphText("random", i === 0));
    }

    return paragraphs;
  }

  function generateParagraph(size = "random", intro = true) {
    var paragraph = generateParagraphText(size, intro);

    if (intro) {
      paragraph = paragraph.replace(
        LORRAINE_IPSUM_INTRO,
        `<b>${LORRAINE_IPSUM_INTRO}</b>`,
      );
    }

    return `<p>${paragraph}</p>`;
  }

  function generateParagraphs(count = "random") {
    return generateParagraphTexts(count)
      .map(function (paragraph, index) {
        if (index === 0) {
          paragraph = paragraph.replace(
            LORRAINE_IPSUM_INTRO,
            `<b>${LORRAINE_IPSUM_INTRO}</b>`,
          );
        }

        return `<p>${paragraph}</p>`;
      })
      .join("");
  }

  /*____________________________________ LORRAINE IPSUM API ____________________________________*/

  global.LorraineIpsum = {
    version: LORRAINE_IPSUM_VERSION,
    get cities() {
      return listCities();
    },
    getCityById: getCityById,
    getRandomCity: getRandomCity,
    listCities: listCities,
    generateParagraphText: generateParagraphText,
    generateParagraphTexts: generateParagraphTexts,
    generateParagraph: generateParagraph,
    generateParagraphs: generateParagraphs,
  };
})(globalThis);
