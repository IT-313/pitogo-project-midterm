/* ================================
   NOVACELL JAVASCRIPT
================================ */


/* ================================
   MOBILE NAVIGATION
================================ */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("open");

        if (navLinks.classList.contains("open")) {

            menuBtn.textContent = "✕";

        } else {

            menuBtn.textContent = "☰";

        }

    });


    const links = navLinks.querySelectorAll("a");


    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuBtn.textContent = "☰";

        });

    });

}


/* ================================
   CURRENT YEAR
================================ */

const year = document.getElementById("year");


if (year) {

    year.textContent = new Date().getFullYear();

}


/* ================================
   PRODUCT BUTTONS
================================ */

const buyButtons = document.querySelectorAll(".buy-btn");


buyButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productCard =
            button.closest(".product-card");

        const productName =
            productCard.querySelector("h3").textContent;

        const productPrice =
            productCard.querySelector("strong").textContent;


        alert(
            "Thank you for your interest in " +
            productName +
            " (" +
            productPrice +
            ").\n\n" +
            "Please contact NovaCell to complete your order."
        );

    });

});


/* ================================
   CONTACT FORM
================================ */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {

                formMessage.style.display = "block";

                formMessage.textContent =
                    "Please complete all required fields.";

                formMessage.style.background =
                    "#fef2f2";

                formMessage.style.color =
                    "#b91c1c";

                formMessage.style.borderColor =
                    "#fecaca";

                return;

            }


            formMessage.style.display = "block";

            formMessage.textContent =
                "Thank you, " +
                name +
                "! Your message has been received.";

            formMessage.style.background =
                "#ecfdf3";

            formMessage.style.color =
                "#15803d";

            formMessage.style.borderColor =
                "#bbf7d0";


            contactForm.reset();


            setTimeout(function () {

                formMessage.style.display = "none";

            }, 5000);

        }
    );

}


/* ================================
   SCROLL REVEAL EFFECT
================================ */

const cards =
    document.querySelectorAll(
        ".product-card, .service-card"
    );


const observerOptions = {

    threshold: 0.15

};


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        observerOptions
    );


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(20px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});