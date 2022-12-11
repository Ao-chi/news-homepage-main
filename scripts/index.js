let nav = document.querySelector(".menu-items");
//let toggleNav = document.querySelector(".nav-toggle");
//let iconNav = document.querySelector(".icon");
let overlay = document.querySelector(".overlay");

let iconMenu = document.querySelector(".icon-menu");
let iconClose = document.querySelector(".icon-close");
// click function for nav toggle
let toggleFunciton = () => {
    iconMenu.addEventListener("click", () => {
        nav.classList.toggle("active");
        overlay.classList.toggle("active");

        if (iconClose.classList.contains("clicked")) {
            iconClose.classList.remove("clicked");
        } else {
            iconClose.classList.add("clicked");
            iconMenu.classList.add("hide");
        }
    });

    iconClose.addEventListener("click", () => {
        nav.classList.toggle("active");
        overlay.classList.toggle("active");

        if (iconClose.classList.contains("clicked")) {
            iconClose.classList.remove("clicked");
            iconMenu.classList.remove("hide");
        } else {
            iconClose.classList.add("clicked");
            iconMenu.classList.remove("hide");
        }
    });
};

toggleFunciton();

overlay.addEventListener(
    "click",
    (closeNavOnOutsideClick = () => {
        if (overlay.classList.contains("active")) {
            nav.classList.remove("active");
            overlay.classList.remove("active");
        }
    })
);
