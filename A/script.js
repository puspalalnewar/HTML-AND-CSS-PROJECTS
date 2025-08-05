const input = document.querySelector("input");
const warning = document.querySelector(".warning");


document.addEventListener("keyup", (e)=>{
    if (e.getModifierState("CapsLock")) {
        warning.innerHTML = "CapsLock On!!";
        warning.style.display = "block";
    }else{
        warning.style.display = "none";
    }
})