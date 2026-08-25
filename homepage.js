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

/* const customCursor = new CustomCursor(element, options); */


// Script for card flips.
document.querySelectorAll(".Card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });
});

//dark and light mode

const darkmode = document.getElementById("Dark-mode");
const darkModeImage = darkmode.querySelector("img");

function updateDarkModeIcon() {
  const isDark = document.documentElement.classList.contains("darkmode");
  darkModeImage.src = isDark ? "../../assets/icons/LM.png" : "../../assets/icons/DM-YP.png";
  darkModeImage.alt = isDark ? "Switch to light mode" : "Switch to dark mode";
  darkModeImage.title = isDark ? "Switch to light mode" : "Switch to dark mode";
}

function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle("darkmode");
  localStorage.setItem("darkMode", String(isDark));
  updateDarkModeIcon();
}

darkmode.addEventListener("click", toggleDarkMode);

(function applySavedMode() {
  const savedMode = localStorage.getItem("darkMode") === "true";
  if (savedMode) {
    document.documentElement.classList.add("darkmode");
  }
  updateDarkModeIcon();
})();
