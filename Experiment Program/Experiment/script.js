const one = document.querySelector(".one");
const four = document.querySelector(".four");
const three = document.querySelector(".three");
const btn = document.querySelector("button");

console.log(four)

function moveToDivFour(){
    console.log("Move to div four")
    window.scrollTo({
        top : three.offsetTop,
        behavior: "smooth"
    })
}

btn.addEventListener("click", moveToDivFour)