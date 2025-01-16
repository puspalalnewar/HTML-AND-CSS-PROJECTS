const nav = document.querySelector("nav");

function scrollTop(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        nav.style.padding = "1rem";
        // nav.style.transition = "all 0.6s"
    }else{
        nav.style.padding = "4rem";
        // nav.style.transition = "0.6s"
    }
}

window.addEventListener("scroll", scrollTop);