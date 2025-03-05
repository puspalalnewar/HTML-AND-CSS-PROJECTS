const btn = document.querySelector("button");
const input = document.querySelector("input");

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    message();
  }
});

btn.addEventListener("click", message);

function message() {
  alert("Hello World!!");
}
