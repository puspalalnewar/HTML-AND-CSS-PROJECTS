const progress = document.querySelector(".progress");

const btn = document.querySelector(".btn");

btn.addEventListener("click", moveProgress);

let width = 1;

function moveProgress() {
  if (width === 1) {
    const timer = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(timer);
        width = 1;
      } else {
        width++;
        progress.style.width = width + "%";
        progress.innerHTML = width + "%";
      }
    }
  }
}