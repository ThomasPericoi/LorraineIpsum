/*____________________________________ GATHER EVERYTHING ____________________________________*/

/* Lorraine Ipsum Frontend */

var intro = document.getElementById("intro");
var btnStart = document.getElementById("btn-start");

var generatedContent = document.getElementById("generated-content");
var inputParagraphes = document.getElementById("input-paragraphes");
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

function changeContent() {
  document.body.classList.add("transition");

  setTimeout(() => {
    generatedContent.innerHTML = generateParagraphes(
      parseInt(inputParagraphes.value)
    );
    document.body.classList.remove("transition");
  }, 600);
}

btnGenerate.addEventListener("click", () => {
  changeContent();
});

document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    changeContent();
  }
});

btnCopy.addEventListener("click", () => {
  copyToClipboardRichText(generatedContent.innerText);
});

/* Init */

document.addEventListener("DOMContentLoaded", function () {
  printAsciiRandom();
  if (!isMobile()) {
    changeTitleOnBlur("A la royotte !");
  }
});
