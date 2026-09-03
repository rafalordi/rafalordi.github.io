/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");

if (menuButton && mobileNav) {

    menuButton.addEventListener("click", () => {

        mobileNav.classList.toggle("active");

    });


    const mobileLinks = mobileNav.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("active");

        });

    });

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});


/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) {
        return;
    }

    if (window.scrollY > 30) {

        header.style.background = "rgba(8, 8, 12, 0.92)";

    } else {

        header.style.background = "rgba(8, 8, 12, 0.75)";

    }

});


/* =====================================================
   CURRENT YEAR
===================================================== */

const yearElement = document.querySelector("footer span");

if (yearElement) {

    yearElement.textContent =
        `© ${new Date().getFullYear()} Rafael Lordi`;

}
