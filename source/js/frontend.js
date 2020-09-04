/*____________________________________ GATHER EVERYTHING ____________________________________*/

/* Lorraine Ipsum Frontend */

var intro = document.getElementById("intro");
var btnStart = document.getElementById("btn-start");

var generatedContent = document.getElementById("generated-content");
var inputWords = document.getElementById("input-words");
var btnGenerate = document.getElementById("btn-generate");
var btnCopy = document.getElementById("btn-copy");

/* Intro */

btnStart.addEventListener("click", () => {
  document.body.classList.add("started");

  setTimeout(() => {
    intro.style.display = "none";
  }, 800);
});

/* Process */

btnGenerate.addEventListener("click", () => {
  generatedContent.innerHTML = generateParagraph(parseInt(inputWords.value));
});

document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    generatedContent.innerHTML = generateParagraph(parseInt(inputWords.value));
  }
});

btnCopy.addEventListener("click", () => {
  copyToClipboard(content.textContent);
});

/* Init */

document.addEventListener("DOMContentLoaded", function () {
  printAsciiRandom();
});
