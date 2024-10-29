const overview = document.querySelector(".overview");
const overview_left = document.querySelector(".overview-left");
const cards = document.querySelectorAll(".card");

const cardsLength = cards.length

window.onload = (event) => {
    if (window.scrollY <= window.innerHeight * 0.5) {
        setTimeout(() => {
            overview.classList.remove("hidden");
        }, 400);
    }
}

window.onscroll = (event) => {
    cards[0].style.marginTop = (window.scrollY / 30).toString() + "px";

    if (window.scrollY > window.innerHeight * 0.5) {
        overview.classList.add("hidden");
        overview_left.classList.remove("hidden");
        cards[0].classList.remove("hidden");
    } else {
        overview.classList.remove("hidden");
        overview_left.classList.add("hidden");
        cards[0].classList.add("hidden");
    }

    for (let i = 1; i < cardsLength; i++) {
        if (cards[i].getBoundingClientRect().y < window.innerHeight * 0.7) {
            cards[i].classList.remove("hidden");
        } else {
            cards[i].classList.add("hidden");
        }
    }
}
