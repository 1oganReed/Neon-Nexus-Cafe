// Following options represent the defaults
const options = {
  // Whether or not the true cursor should be hidden when the custom cursor is initialized
  hideTrueCursor: false,

  // Array of DOM elements/selector strings that add interactions on hover
  focusElements: ["a", "button"],

  // Class applied when the true cursor is hovering over a focusElement
  focusClass: "cursor--focused",
};

// Can be selector string or DOM node
const element = ".cursor";

const customCursor = new CustomCursor(element, options);

//script for card flip

let fliped = false;
document.getElementById("Card-container").onclick = function () {
  let card = document.getElementById("Card");
  if (fliped) {
    card.style.transform = "rotateY(0deg)";
  } else {
    card.style.transform = "rotateY(180deg)";
  }
  fliped = !fliped;
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".Card");

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        card.classList.toggle("is-flipped");
      });
    });
  });
};

