const stickyBtn = document.getElementById('stickyBtn');
const navbar = document.querySelector(".navbar");
function scrollTop() {
    navbar.scrollIntoView({ behavior: "smooth" });
}

stickyBtn.addEventListener("click", scrollTop);
