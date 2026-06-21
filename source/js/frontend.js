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

function copyGeneratedContent() {
  var textToCopy = generatedContent.innerText;

  if (typeof copyToClipboard === "function") {
    copyToClipboard(textToCopy).then(function (copied) {
      if (!copied) {
        copyGeneratedContentFallback(textToCopy);
      }
    }).catch(function () {
      copyGeneratedContentFallback(textToCopy);
    });
    return;
  }

  copyGeneratedContentFallback(textToCopy);
}

function copyGeneratedContentFallback(textToCopy) {
  var temporaryTextarea = document.createElement("textarea");

  temporaryTextarea.value = textToCopy;
  temporaryTextarea.setAttribute("readonly", "");
  temporaryTextarea.style.position = "fixed";
  temporaryTextarea.style.top = "-9999px";
  document.body.appendChild(temporaryTextarea);
  temporaryTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(temporaryTextarea);
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
  copyGeneratedContent();
});

/* Init */

document.addEventListener("DOMContentLoaded", function () {
  AsciiPrinter.printRandom();
  if (!isMobile()) {
    changeTitleOnBlur("A la royotte !");
  }
});
