const nav = document.querySelector("nav");

let prevScroll = pageYOffset;

function scrollTop() {
  let currentScroll = window.pageYOffset;
  if (prevScroll > currentScroll) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-50px";
  }
  prevScroll = currentScroll;
}

window.addEventListener("scroll", scrollTop);
