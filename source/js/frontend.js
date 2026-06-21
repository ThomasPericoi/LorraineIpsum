/*____________________________________ GATHER EVERYTHING ____________________________________*/

/* Lorraine Ipsum Frontend */

var intro = document.getElementById("intro");
var content = document.getElementById("content");
var btnStart = document.getElementById("btn-start");

var generatedContent = document.getElementById("generated-content");
var paragraphInput = document.getElementById("input-paragraphes");
var btnGenerate = document.getElementById("btn-generate");
var btnCopy = document.getElementById("btn-copy");
var copyStatus = document.getElementById("copy-status");
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

function startGenerator() {
  setSectionAvailability(content, true);
  document.body.classList.add("started");
  btnGenerate.focus({ preventScroll: true });
  setSectionAvailability(intro, false);

  setTimeout(() => {
    intro.style.display = "none";
  }, 800);
}

/* Process */

function generateContent() {
  document.body.classList.add("transition");

  setTimeout(() => {
    renderGeneratedContent(
      LorraineIpsum.generateParagraphTexts(getParagraphCount()),
    );
    document.body.classList.remove("transition");
  }, 600);
}

function renderGeneratedContent(paragraphs) {
  generatedContent.replaceChildren();

  paragraphs.forEach(function (paragraph, index) {
    var paragraphElement = document.createElement("p");

    if (index === 0 && paragraph.startsWith("Lorraine Ipsum ")) {
      var introElement = document.createElement("b");
      var intro = "Lorraine Ipsum";

      introElement.textContent = intro;
      paragraphElement.appendChild(introElement);
      paragraphElement.append(
        document.createTextNode(paragraph.slice(intro.length)),
      );
    } else {
      paragraphElement.textContent = paragraph;
    }

    generatedContent.appendChild(paragraphElement);
  });
}

async function copyGeneratedContent() {
  if (!navigator.clipboard || !window.isSecureContext) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(generatedContent.innerText);
    return true;
  } catch {
    return false;
  }
}

function setCopyFeedback() {
  btnCopy.innerText = "Copié !";
  btnCopy.setAttribute("aria-label", "Texte copié");
  copyStatus.innerText = "Le texte généré a été copié.";

  setTimeout(function () {
    btnCopy.innerText = copyButtonLabel;
    btnCopy.setAttribute("aria-label", "Copier le texte généré");
    copyStatus.innerText = "";
  }, 1400);
}

function setCopyErrorFeedback() {
  copyStatus.innerText = "La copie du texte a échoué.";

  setTimeout(function () {
    copyStatus.innerText = "";
  }, 1800);
}

function getParagraphCount() {
  var value = parseInt(paragraphInput.value, 10);

  if (!Number.isFinite(value)) {
    return "random";
  }

  return Math.min(Math.max(value, 1), 99);
}

function limitParagraphInput() {
  paragraphInput.value = paragraphInput.value.slice(0, 2);
}

function bindEvents() {
  btnStart.addEventListener("click", startGenerator);

  btnGenerate.addEventListener("click", generateContent);

  paragraphInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      generateContent();
    }
  });

  paragraphInput.addEventListener("input", limitParagraphInput);

  btnCopy.addEventListener("click", function () {
    copyGeneratedContent().then(function (copied) {
      if (copied) {
        setCopyFeedback();
        return;
      }

      setCopyErrorFeedback();
    });
  });
}

function init() {
  setSectionAvailability(intro, true);
  setSectionAvailability(content, false);
  bindEvents();

  AsciiPrinter.printRandom();
  if (!isMobile()) {
    changeTitleOnBlur("A la royotte !");
  }
}

/* Init */

document.addEventListener("DOMContentLoaded", init);
