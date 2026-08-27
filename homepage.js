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
  darkModeImage.src = isDark ? "assets/icons/LM.png" : "assets/icons/DM-YP.png";
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

//hamburger js 
let menuBtn = document.querySelector('.menu-btn');
let ham = document.querySelector('.nav');
let menuItem = document.querySelectorAll('.nav__link');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	ham.classList.toggle('active');
})


menuItem.forEach (function(menuItem) {
  menuItem.addEventListener('click',function(){
          menuBtn.classList.toggle('active');
          ham.classList.toggle('active');
  })
})