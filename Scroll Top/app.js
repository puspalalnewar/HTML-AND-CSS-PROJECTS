// const stickyBtn = document.getElementById('stickyBtn');
// const navbar = document.querySelector(".navbar");
// function scrollTop() {
//     navbar.scrollIntoView({ behavior: "smooth" });
// }

// stickyBtn.addEventListener("click", scrollTop);

// 

const stickyBtn = document.getElementById('stickyBtn');

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 20){
        stickyBtn.style.display = "block";
    }else{
        stickyBtn.style.display = "none";
    }
})

stickyBtn.addEventListener("click", ()=>{
    window.scrollTo({
        top : 0,
        behavior : "smooth",
    })
})