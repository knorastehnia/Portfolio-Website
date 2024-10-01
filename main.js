const overview = document.querySelector("#overview");
const scroll_button = document.querySelector("#scroll-down");
const icons = document.querySelectorAll(".icon");

window.onscroll = function (e) {
    if (window.scrollY > 150) {
        overview.classList.add("overview-left");
        overview.classList.remove("overview-center");

        scroll_button.style.display = "none";
    } else {
        overview.classList.add("overview-center");
        overview.classList.remove("overview-left");
        
        scroll_button.style.display = "inline";
    }
}
