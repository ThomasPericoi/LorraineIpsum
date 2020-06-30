/*____________________________________ GATHER EVERYTHING ____________________________________*/

/* Darkmode */

var btnDarkmode = document.getElementById("darkmode");
var darkmode = false;

function applyDarkmode() {
  if (darkmode) {
    document.body.classList.add("darkmode");
    btnDarkmode.innerHTML = "Allumer";
    console.log("On éteint les lumières...");
  } else {
    document.body.classList.remove("darkmode");
    btnDarkmode.innerHTML = "Éteindre";
    console.log("Et on allume les lumières !");
  }
}

btnDarkmode.addEventListener("click", () => {
  darkmode = !darkmode;
  applyDarkmode();
});

/* Lorraine Ipsum Frontend */

var btnLorraineIpsumSmall = document.getElementById("btn-lorraineIpsum-small");
var btnLorraineIpsumLarge = document.getElementById("btn-lorraineIpsum-large");
var btnLorraineIpsumRandom = document.getElementById(
  "btn-lorraineIpsum-random"
);
var btnCopy = document.getElementById("btn-copy");
var content = document.getElementById("content-lorraineIpsum");

btnLorraineIpsumSmall.addEventListener("click", () => {
  content.innerHTML = generateParagraph("small");
});

btnLorraineIpsumLarge.addEventListener("click", () => {
  content.innerHTML = generateParagraph("large");
});

btnLorraineIpsumRandom.addEventListener("click", () => {
  content.innerHTML = generateParagraph();
});

btnCopy.addEventListener("click", () => {
  copyToClipboard(content.innerHTML);
});

/* Init */

document.addEventListener("DOMContentLoaded", function () {
  printAsciiRandom();
  applyDarkmode();

  content.innerHTML = generateParagraph();
});
