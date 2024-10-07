const overview = document.querySelector("#overview");
const scroll_button = document.querySelector("#scroll-down");
const scrollbar = document.querySelector("#scrollbar");
const concealer = document.querySelector(".concealer");
const cards = document.querySelectorAll(".card");


window.onscroll = function (e) {
    let scroll_length = window.scrollY / document.body.scrollHeight*100 + 10 + '%';

    if (window.scrollY > 220) {
        overview.classList.add("overview-left");
        overview.classList.remove("overview-center");

        scroll_button.classList.add("hidden");

        concealer.classList.add("hidden");
        scrollbar.classList.remove("hidden");

        overview.style.top = scroll_length;
    } else {
        overview.classList.add("overview-center");
        overview.classList.remove("overview-left");

        scroll_button.classList.remove("hidden");

        concealer.classList.remove("hidden");
        scrollbar.classList.add("hidden");

        overview.style.top = "50%";
    }

    if (document.body.scrollHeight - scrollY < 1200) {
        overview.classList.add("overview-bottom");
        overview.style.top = "80%";
    } else {
        overview.classList.remove("overview-bottom")
    }

    cards.forEach(card => {
        if (card.getBoundingClientRect().y < 600) {
            card.classList.add("card-visible");
        } else {
            card.classList.remove("card-visible");
        }
    });
}
