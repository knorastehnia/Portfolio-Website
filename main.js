const overview = document.querySelector("#overview");
const scroll_button = document.querySelector("#scroll-down");
const concealer = document.querySelector(".concealer");
const cards = document.querySelectorAll(".card");

const default_scroll_height = "25%";

window.onscroll = function (e) {
    if (window.scrollY > 250) {
        overview.classList.add("overview-left");
        overview.classList.remove("overview-center");

        scroll_button.classList.add("hidden");

        concealer.classList.add("hidden");

        overview.style.top = window.scrollY / document.body.scrollHeight * 50 + 25 + '%';
    } else {
        overview.classList.add("overview-center");
        overview.classList.remove("overview-left");

        scroll_button.classList.remove("hidden");

        concealer.classList.remove("hidden");

        overview.style.top = "50%";
    }

    cards.forEach(card => {
        if (Math.abs(card.getBoundingClientRect().y) < 600) {
            card.classList.add("card-visible");
        } else {
            card.classList.remove("card-visible");
        }
    });
}
