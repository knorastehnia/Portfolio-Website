const overview = document.querySelector(".overview");
const overview_left = document.querySelector(".overview-left");
const cards = document.querySelectorAll(".card");

window.onscroll = (event) => {
    // console.log(window.scrollY, window.innerHeight)
    // let scroll_length = window.scrollY / document.body.scrollHeight * 100 + 10 + '%';

    if (window.scrollY > window.innerHeight * 2/3) {
        overview.classList.add("hidden");
        overview_left.classList.remove("hidden");
    } else {
        overview.classList.remove("hidden");
        overview_left.classList.add("hidden");
    }

    cards.forEach(card => {
        if (card.getBoundingClientRect().y < window.innerHeight * 2/3) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
}
