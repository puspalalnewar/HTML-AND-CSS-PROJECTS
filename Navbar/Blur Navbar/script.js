const navbar = document.querySelector("nav");
window.addEventListener("scroll", blurEff);
function blurEff() {
  if (document.documentElement.scrollTop > 20) {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    navbar.style.color = "white";
    navbar.classList.add("blure");
  } else {
    // navbar.style.backgroundColor = "rgb(27, 98, 40)";
    navbar.style.backgroundColor = "transparent";
    navbar.style.color = "black";
    navbar.classList.remove("blure");
  }
}
