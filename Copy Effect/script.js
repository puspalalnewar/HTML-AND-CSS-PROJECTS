const content = document.querySelector(".text");
document.addEventListener("copy", (e)=>{
    e.preventDefault();
    e.clipboardData.setData("text/plain", "Your are Hacked!!");
})