let nav = document.querySelector(".menu-items");
let menuClose = document.querySelector(".menu_close");
let toggleNav = document.querySelector(".nav-toggle");
let iconNav = document.querySelector(".icon");
let overlay = document.querySelector(".overlay");

let iconMenu = document.querySelector(".icon-menu");
let iconClose = document.querySelector(".icon-close");
// click function for nav toggle
let toggleFunciton = () => {
    iconMenu.addEventListener("click", () => {
        nav.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    iconClose.addEventListener("click", () => {
        nav.classList.toggle("active");
        overlay.classList.toggle("active");
    });
};

toggleFunciton();
