const btn = document.querySelector(".btn");
const para = document.querySelector(".name");

let content = "Puspalal Newar";
let count = 0;

// Using Setinterval
// function printName() {
//     const timer = setInterval(work, 500);
//     function work(){
//         if(count == content.length){
//             clearInterval(timer);
//         }
//         para.innerHTML += content.charAt(count);
//         count++;
//     }
// }

// Using Settimeout
function typewriter() {
    if (count < content.length) {
        para.innerHTML += content.charAt(count);
        count++;
        setTimeout(typewriter, 300);
    }
}

btn.addEventListener("click", typewriter);
// btn.addEventListener("click", printName);