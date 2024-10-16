const overview = document.querySelector(".overview");
const overview_left = document.querySelector(".overview-left");
const cards = document.querySelectorAll(".card");

window.onload = (event) => {
    if (window.scrollY <= window.innerHeight * 0.5) {
        setTimeout(() => {
            overview.classList.remove("hidden");
        }, 400);
    }
}

window.onscroll = (event) => {
    if (window.scrollY > window.innerHeight * 0.5) {
        overview.classList.add("hidden");
        overview_left.classList.remove("hidden");
        cards[0].classList.remove("hidden");
    } else {
        overview.classList.remove("hidden");
        overview_left.classList.add("hidden");
        cards[0].classList.add("hidden");
    }

    for (let i = 1; i < cards.length; i++) {
        if (cards[i].getBoundingClientRect().y < window.innerHeight * 0.8) {
            cards[i].classList.remove("hidden");
        } else {
            cards[i].classList.add("hidden");
        }
    }
}
