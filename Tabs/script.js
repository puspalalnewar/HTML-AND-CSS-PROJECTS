const london = document.querySelector(".london");
const paris = document.querySelector(".paris");
const tokyo = document.querySelector(".tokyo");
const li = document.querySelectorAll("li");

li[0].addEventListener("click", () => {
  london.style.display = "block";
  paris.style.display = "none";
  tokyo.style.display = "none";
});
li[1].addEventListener("click", () => {
  paris.style.display = "block";
  london.style.display = "none";
  tokyo.style.display = "none";
});
li[2].addEventListener("click", () => {
  tokyo.style.display = "block";
  paris.style.display = "none";
  london.style.display = "none";
});
