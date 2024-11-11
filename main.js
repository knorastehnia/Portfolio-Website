const pivot = document.querySelector(".pivot");
const night = document.querySelector(".night");

const overview = document.querySelector(".overview");
const overview_left = document.querySelector(".overview-left");
const navbar = document.querySelector("nav");
const cards = document.querySelectorAll(".card");

const cards_length = cards.length;

const cursor = document.querySelector("#cursor");

document.onmousemove = (event) => {
    cursor.style.top = event.clientY + "px";
    cursor.style.left = event.clientX + "px";

    if (event.target.nodeName === "A") {
        cursor.classList.add("hover");
    } else {
        cursor.classList.remove("hover");
    }
}

window.onload = (event) => {
    if (window.scrollY <= window.innerHeight * 0.5) {
        setTimeout(() => {
            overview.classList.remove("hidden");
            navbar.classList.remove("hidden");
        }, 400);
    }

    for (let i = 0; i < 300; i++) {
        let star = night.appendChild(document.createElement("div"));
        star.classList.add(`star${Math.floor(Math.random() * 3 + 0.9)}`);

        star.style.top = Math.floor(Math.random() * 100) + "%";
        star.style.left = Math.floor(Math.random() * 100) + "%";
        star.style.animationDuration = Math.floor(Math.random() * 6 + 5) + "s";
    }
}

window.onscroll = (event) => {
    let rotation = 10 - (10 * (window.scrollY / document.body.scrollHeight));
    pivot.style.transform = `rotate(${rotation}deg)`;
    night.style.opacity = 1;

    if (window.scrollY > window.innerHeight * 0.5) {
        navbar.classList.add("hidden");
        overview.classList.add("hidden");
        overview_left.classList.remove("hidden");
        cards[0].classList.remove("hidden");
    } else {
        navbar.classList.remove("hidden");
        overview.classList.remove("hidden");
        overview_left.classList.add("hidden");
        cards[0].classList.add("hidden");
    }

    for (let i = 1; i < cards_length; i++) {
        if (cards[i].getBoundingClientRect().y < window.innerHeight * 0.75) {
            cards[i].classList.remove("hidden");
        } else {
            cards[i].classList.add("hidden");
        }
    }
}
