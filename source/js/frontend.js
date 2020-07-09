/*____________________________________ GATHER EVERYTHING ____________________________________*/

/* Lorraine Ipsum Frontend */

var btnSmall = document.getElementById("btn-small");
var btnLarge = document.getElementById("btn-large");
var btnRandom = document.getElementById("btn-random");
var btnCopy = document.getElementById("btn-copy");
var content = document.getElementById("content");

btnSmall.addEventListener("click", () => {
  content.innerHTML = generateParagraph("small");
});

btnLarge.addEventListener("click", () => {
  content.innerHTML = generateParagraph("large");
});

btnRandom.addEventListener("click", () => {
  content.innerHTML = generateParagraph();
});

btnCopy.addEventListener("click", () => {
  copyToClipboard(content.innerHTML);
});

/* Init */

document.addEventListener("DOMContentLoaded", function () {
  printAsciiRandom();
});
