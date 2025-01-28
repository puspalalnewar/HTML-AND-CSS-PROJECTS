const menuBtn = document.querySelector('.menuBtn');
const sidebar = document.getElementById('sidebar');
const crossBar = document.querySelector(".cross");

menuBtn.addEventListener('click', () => {
    console.log("I am clicked!!");
    sidebar.classList.toggle('active');
});
crossBar.addEventListener("click", ()=>{
    sidebar.classList.toggle('active');
})