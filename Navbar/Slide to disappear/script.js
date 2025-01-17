const nav = document.querySelector("nav");
let prevScroll = window.pageYOffset;

function scrollTop(){
    const currentScroll = window.pageYOffset;
    if(prevScroll > currentScroll){
        nav.style.top = "0";
    }else{
        nav.style.top = "-50px";
    }
    prevScroll = currentScroll;
}

window.addEventListener("scroll", scrollTop);