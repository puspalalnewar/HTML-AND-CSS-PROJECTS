const nav = document.querySelector(".navbar");
const btn = document.querySelector(".slide-right");
const lists = document.querySelector(".lists");
const icon = document.querySelector(".icon");

btn.addEventListener("click", () => {
    nav.style.width = "100%";
    lists.style.display = "block";
    icon.style.display = "block";
    btn.style.display = "none";
})

icon.addEventListener("click", () => {
    nav.style.width = "0%";
    lists.style.display = "none";
    icon.style.display = "none";
    btn.style.display = "block";
})