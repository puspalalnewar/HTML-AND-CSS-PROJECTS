const progress = document.querySelector(".progress");

const btn = document.querySelector("button");

btn.addEventListener("click", moveProgress);

let width = 0;

function moveProgress() {
  if (width === 0) {
    const timer = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        width = 0;
        clearInterval(timer);
      } else {
        width++;
        progress.style.width = width + "%";
        progress.innerHTML = width + "%";
      }
    }
  }
}

moveProgress();