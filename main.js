const overview = document.querySelector("#overview");
const scroll_button = document.querySelector("#scroll-down");
const concealer = document.querySelector(".concealer");
const cards = document.querySelectorAll(".card");

window.onscroll = function (e) {
    let scroll_length = window.scrollY / document.body.scrollHeight * 50 + 25 + '%';

    if (window.scrollY > 220) {
        overview.classList.add("overview-left");
        overview.classList.remove("overview-center");

        scroll_button.classList.add("hidden");

        concealer.classList.add("hidden");

        overview.style.top = scroll_length;
    } else {
        overview.classList.add("overview-center");
        overview.classList.remove("overview-left");

        scroll_button.classList.remove("hidden");

        concealer.classList.remove("hidden");

        overview.style.top = "50%";
    }

    cards.forEach(card => {
        if (card.getBoundingClientRect().y < 600) {
            card.classList.add("card-visible");
        } else {
            card.classList.remove("card-visible");
        }
    });
}
