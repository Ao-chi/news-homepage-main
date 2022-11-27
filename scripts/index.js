let nav = document.querySelector(".menu-items");
let menuClose = document.querySelector(".menu_close");
let menuOpen = document.querySelector(".menu_open");
let overlay = document.querySelector(".overlay");

let isclicked = false;
function nav_toggle() {
    menuOpen.addEventListener("click", () => {
        nav.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}

nav_toggle();
