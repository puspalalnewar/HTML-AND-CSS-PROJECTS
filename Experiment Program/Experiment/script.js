const fileName = document.querySelector(".fileName");
const input = document.querySelector("input");

input.addEventListener("input", (e)=>{
  console.log(e.target.files[0].name);
})