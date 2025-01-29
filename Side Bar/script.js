const menuBtn = document.querySelector('.menuBtn');
const sidebar = document.getElementById('sidebar');
const crossBar = document.querySelector(".cross");

menuBtn.addEventListener('click', () => {
    sidebar.style.left = "0"
});
crossBar.addEventListener("click", () => {
    sidebar.style.left = "-250px"
})
window.addEventListener("click", (e)=>{
    if(!sidebar.contains(e.target) && e.target!= menuBtn){
        sidebar.style.left = "-250px"
    }
})