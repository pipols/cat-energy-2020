const TOGGLE = document.querySelector(".main-navigation__toggle");
const TOGGLE_OPEN = document.querySelector(".main-navigation__toggle-open");
const TOGGLE_CLOSE = document.querySelector(".main-navigation__toggle-close");
const MAIN_NAVIGATION_LIST = document.querySelector(".main-navigation__list");

MAIN_NAVIGATION_LIST.classList.add("visuallyhidden");

TOGGLE.addEventListener("click", () => {
  MAIN_NAVIGATION_LIST.classList.toggle("visuallyhidden");
  TOGGLE_OPEN.classList.toggle("visuallyhidden");
  TOGGLE_CLOSE.classList.toggle("visuallyhidden");
});
