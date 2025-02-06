const input = document.querySelector("input");

let capsLock = false;
document.addEventListener("keyup", (e)=>{
    if(e.code == "CapsLock" && capsLock == false){
        alert("CapsLock Activated!!");
        capsLock = true;
    }else if(e.code == "CapsLock" && capsLock == true){
        alert("CapsLock Off!!");
        capsLock = false;
    }
})