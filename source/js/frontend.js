/*____________________________________ GATHER EVERYTHING ____________________________________*/

/* Lorraine Ipsum Frontend */

var intro = document.getElementById("intro");
var btnStart = document.getElementById("btn-start");

var generatedContent = document.getElementById("generated-content");
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
  generatedContent.innerHTML = generateParagraph();
});

btnCopy.addEventListener("click", () => {
  copyToClipboard(content.textContent);
});

/* Init */

document.addEventListener("DOMContentLoaded", function () {
  printAsciiRandom();
});
