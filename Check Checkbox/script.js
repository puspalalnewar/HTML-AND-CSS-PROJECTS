const checkbox = document.querySelector("#checkbox");
const message = document.querySelector(".message");

checkbox.addEventListener("click", (event) => {
  if (event.target.checked === true) {
    message.innerHTML = "Checkbox is checked!!";
  } else {
    message.innerHTML = "";
  }
});
