const nav = document.querySelector("nav");

let prevScroll = window.pageYOffset;

function scrollTop() {
  let currScroll = window.pageYOffset;
  if (prevScroll > currScroll) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-50px";
  }
  prevScroll = currScroll;
}

document.addEventListener("scroll", scrollTop)