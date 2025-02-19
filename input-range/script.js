const input = document.querySelector(".red")
const span = document.querySelector("span");

input.addEventListener("input", ()=>{
    span.innerHTML = input.value;
})
