/*____________________________________ GATHER EVERYTHING ____________________________________*/

/* Lorraine Ipsum Frontend */

var intro = document.getElementById("intro");
var content = document.getElementById("content");
var btnStart = document.getElementById("btn-start");

var generatedContent = document.getElementById("generated-content");
var inputParagraphes = document.getElementById("input-paragraphes");
var btnGenerate = document.getElementById("btn-generate");
var btnCopy = document.getElementById("btn-copy");
var copyButtonLabel = btnCopy.innerText;
var focusableSelector = [
  "a[href]",
  "button",
  "input",
  "select",
  "textarea",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

/* Helpers */

async function copyToClipboard(value) {
  var text = String(value);

  if (!navigator.clipboard || !window.isSecureContext) {
    return false;
  }

  await navigator.clipboard.writeText(text);

  return true;
}

function changeTitleOnBlur(string) {
  var originalTitle = document.title;

  window.addEventListener("focus", function () {
    document.title = originalTitle;
  });

  window.addEventListener("blur", function () {
    document.title = string;
  });
}

function isMobile() {
  if (
    navigator.userAgentData &&
    typeof navigator.userAgentData.mobile === "boolean"
  ) {
    return navigator.userAgentData.mobile;
  }

  if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) {
    return true;
  }

  return /android|iphone|ipad|ipod|mobile/i.test(navigator.userAgent || "");
}

function setSectionAvailability(section, isAvailable) {
  var focusableElements = section.querySelectorAll(focusableSelector);

  section.inert = !isAvailable;
  section.setAttribute("aria-hidden", String(!isAvailable));

  focusableElements.forEach(function (element) {
    if (isAvailable) {
      if ("previousTabindex" in element.dataset) {
        element.setAttribute("tabindex", element.dataset.previousTabindex);
        delete element.dataset.previousTabindex;
        return;
      }

      element.removeAttribute("tabindex");
      return;
    }

    if (element.hasAttribute("tabindex")) {
      element.dataset.previousTabindex = element.getAttribute("tabindex");
    }

    element.setAttribute("tabindex", "-1");
  });
}

/* Intro */

btnStart.addEventListener("click", () => {
  setSectionAvailability(content, true);
  document.body.classList.add("started");
  btnGenerate.focus({ preventScroll: true });
  setSectionAvailability(intro, false);

  setTimeout(() => {
    intro.style.display = "none";
  }, 800);
});

/* Process */

function changeContent() {
  document.body.classList.add("transition");

  setTimeout(() => {
    generatedContent.innerHTML =
      LorraineIpsum.generateParagraphs(getParagraphCount());
    document.body.classList.remove("transition");
  }, 600);
}

function copyGeneratedContent() {
  var textToCopy = generatedContent.innerText;

  if (typeof copyToClipboard === "function") {
    copyToClipboard(textToCopy)
      .then(function (copied) {
        if (!copied) {
          copyGeneratedContentFallback(textToCopy);
        }
      })
      .catch(function () {
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
  return true;
}

function setCopyFeedback() {
  btnCopy.innerText = "Copié !";
  btnCopy.setAttribute("aria-label", "Texte copié");

  setTimeout(function () {
    btnCopy.innerText = copyButtonLabel;
    btnCopy.setAttribute("aria-label", "Copier le texte généré");
  }, 1400);
}

function getParagraphCount() {
  var value = parseInt(inputParagraphes.value, 10);

  if (!Number.isFinite(value)) {
    return "random";
  }

  return Math.min(Math.max(value, 1), 99);
}

function limitParagraphInput() {
  inputParagraphes.value = inputParagraphes.value.slice(0, 2);
}

btnGenerate.addEventListener("click", () => {
  changeContent();
});

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    changeContent();
  }
});

inputParagraphes.addEventListener("input", limitParagraphInput);

btnCopy.addEventListener("click", () => {
  copyGeneratedContent();
  setCopyFeedback();
});

/* Init */

setSectionAvailability(intro, true);
setSectionAvailability(content, false);

document.addEventListener("DOMContentLoaded", function () {
  AsciiPrinter.printRandom();
  if (!isMobile()) {
    changeTitleOnBlur("A la royotte !");
  }
});
