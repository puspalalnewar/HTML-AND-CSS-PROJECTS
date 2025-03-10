const text = document.querySelector("h2");

let str = "Hello World!!";
let idx = 0;

function typeWriter(){
  if(idx < str.length){
    text.innerHTML += str.charAt(idx);
    idx++;
    setTimeout(typeWriter, 300);
  }
}

typeWriter();