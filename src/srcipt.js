const burgerBtn = document.querySelector(".burger-btn");
const nav = document.querySelector(".header__nav");
const overlay = document.querySelector(".overlay");
const menuMatchMedia = window.matchMedia("(width >= 768px)");
let isMenuOpen = false;

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.add("burger-btn--active");
  nav.classList.add("header__nav--active");
  overlay.classList.add("overlay--active");
  isMenuOpen = true;
});

const menuClose = (animatable) => {
  burgerBtn.classList.remove("burger-btn--active");
  nav.classList.remove("header__nav--active");
  overlay.classList.remove("overlay--active");
  if (animatable) {
    nav.classList.add("header__nav--disable");
  }
  isMenuOpen = false;
};

nav.addEventListener("animationend", function () {
  if (nav.classList.contains("header__nav--disable")) {
    nav.classList.remove("header__nav--disable");
  }
});

overlay.addEventListener("click", () => {
  menuClose(true);
});

const checkMenu = () => {
  if (menuMatchMedia.matches && isMenuOpen) {
    menuClose(false);
  }
};

window.addEventListener("resize", checkMenu);
checkMenu();
