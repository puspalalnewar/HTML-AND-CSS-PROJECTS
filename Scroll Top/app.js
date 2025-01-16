// const stickyBtn = document.getElementById('stickyBtn');
// const navbar = document.querySelector(".navbar");
// function scrollTop() {
//     navbar.scrollIntoView({ behavior: "smooth" });
// }

// stickyBtn.addEventListener("click", scrollTop);

// 

const stickyBtn = document.getElementById('stickyBtn');

function scrollTop(){
    if(document.body.scrollTop> 100 || document.documentElement.scrollTop > 100){
        stickyBtn.style.display = "block";
    }else{
        stickyBtn.style.display = "none";
    }
}

window.addEventListener("scroll", scrollTop);

stickyBtn.addEventListener("click", ()=>{
    window.scrollTo({
        top : 0,
        behavior : "smooth",
    })
})