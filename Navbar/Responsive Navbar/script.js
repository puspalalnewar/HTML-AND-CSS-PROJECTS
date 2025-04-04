const ham = document.querySelector("#ham");
const links = document.querySelector(".links");
const crossIcon = document.querySelector(".cross-icon");

ham.addEventListener("click", openSide);
crossIcon.addEventListener("click", closeSide);

function openSide() {
  if (links.style.width === "" || links.style.width === "0px") {
    links.style.width = "200px";
  } else {
    links.style.width = "0";
  }
}

function closeSide() {
  links.style.width = "0";
}

document.addEventListener("click", (e) => {
  const isClickOutside = links.contains(e.target) || ham.contains(e.target);
  console.log(e.target);
  if (!isClickOutside) {
    links.style.width = "0";
  }
});
