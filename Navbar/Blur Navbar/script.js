const navbar = document.querySelector("nav");
window.addEventListener("scroll", blurEff);
function blurEff() {
  if (document.documentElement.scrollTop > 20) {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    navbar.style.color = "white";
  } else {
    navbar.style.backgroundColor = "rgb(20, 195, 52)";
    navbar.style.color = "black";
  }
}
