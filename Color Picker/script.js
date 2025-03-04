const btn = document.querySelector("input");

btn.addEventListener("input", (e) => {
  document.querySelector("body").style.background = e.target.value;
});
