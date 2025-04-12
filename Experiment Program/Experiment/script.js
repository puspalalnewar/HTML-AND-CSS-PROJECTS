const scrollTop = document.querySelector(".scroll-top");
const navbar = document.querySelector("nav");
const content = document.querySelector(".content");

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", showIcon);

function showIcon() {
  let pageOff = pageYOffset;
  if (pageOff > 20) {
    scrollTop.style.visibility = "visible";
  } else {
    scrollTop.style.visibility = "hidden";
  }
}

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
})

document.addEventListener("contextmenu", (e) => {
  e.stopPropagation();
}, "true")
