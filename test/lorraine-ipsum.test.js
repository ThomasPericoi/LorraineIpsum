const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const context = {
  Math,
  Number,
  String,
};

vm.createContext(context);

[
  "source/js/lorraine-ipsum/lorraine-ipsum-lib.js",
  "source/js/lorraine-ipsum/lorraine-ipsum-functions.js",
].forEach(function (file) {
  vm.runInContext(fs.readFileSync(file, "utf8"), context, { filename: file });
});

assert.ok(Array.isArray(context.LorraineIpsum.cities));
assert.ok(context.LorraineIpsum.cities.length > 0);
assert.equal(context.LorraineIpsum.version, "1.0.0");
assert.equal(
  context.LorraineIpsum.getCityById(0),
  context.LorraineIpsum.cities[0],
);
assert.ok(context.LorraineIpsum.listCities().length > 0);
assert.ok(
  context.LorraineIpsum.cities.includes(context.LorraineIpsum.getRandomCity()),
);

const paragraph = context.LorraineIpsum.generateParagraph(20);
assert.match(paragraph, /^<p><b>Lorraine Ipsum<\/b> .+<\/p>$/);

const paragraphs = context.LorraineIpsum.generateParagraphs(3);
assert.equal((paragraphs.match(/<p>/g) || []).length, 3);
