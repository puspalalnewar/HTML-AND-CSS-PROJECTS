const btn = document.querySelector(".dropdown-btn");
const content = document.querySelector(".dropdown-content");

btn.addEventListener("click", () => {
    content.classList.toggle("dropdown-active");
})
