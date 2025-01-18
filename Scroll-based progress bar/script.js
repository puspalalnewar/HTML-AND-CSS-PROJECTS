const progress = document.querySelector(".progress");

document.addEventListener("scroll", () => {
    const scrollTop = window.scrollY; // Get the current scroll position
    const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
    const scrollPercentage = (scrollTop / docHeight) * 100; // Calculate scroll percentage
    const scrollPer = Math.floor(scrollPercentage);
    progress.style.width = `${scrollPer}%`;
    progress.innerHTML = `${scrollPer}%`
});

