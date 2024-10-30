const background = document.querySelector(".background");
const overview = document.querySelector(".overview");
const overview_left = document.querySelector(".overview-left");
const navbar = document.querySelector("nav");
const cards = document.querySelectorAll(".card");

const cards_length = cards.length;

const primary_start = 10;
const primary_end = 30;

window.onload = (event) => {
    if (window.scrollY <= window.innerHeight * 0.5) {
        setTimeout(() => {
            overview.classList.remove("hidden");
        }, 400);
    }
}

window.onscroll = (event) => {
    cards[0].style.marginTop = (window.scrollY / 20).toString() + "px";
    background.style.setProperty("--primary-1", "hsl(" + (primary_start - (primary_start - primary_end) * (window.scrollY / document.body.scrollHeight)) + ", 60%, 60%)");

    if (window.scrollY > window.innerHeight * 0.5) {
        // navbar.classList.add("hidden");
        overview.classList.add("hidden");
        overview_left.classList.remove("hidden");
        cards[0].classList.remove("hidden");
    } else {
        // navbar.classList.remove("hidden");
        overview.classList.remove("hidden");
        overview_left.classList.add("hidden");
        cards[0].classList.add("hidden");
    }

    for (let i = 1; i < cards_length; i++) {
        if (cards[i].getBoundingClientRect().y < window.innerHeight * 0.7) {
            cards[i].classList.remove("hidden");
        } else {
            cards[i].classList.add("hidden");
        }
    }
}
