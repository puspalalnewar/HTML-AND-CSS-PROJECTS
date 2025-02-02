const hamburger = document.querySelector(".icon");
const myLinks = document.querySelector(".myLinks");
hamburger.addEventListener("click", ()=>{
    myLinks.classList.toggle("active");
})

