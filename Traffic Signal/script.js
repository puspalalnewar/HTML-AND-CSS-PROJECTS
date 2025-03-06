function showSignal() {
  setTimeout(() => {
    document.querySelector(".red").style.backgroundColor = "red";
    document.querySelector(".green").style.backgroundColor = "gray";
  }, 0);
  setTimeout(() => {
    document.querySelector(".yellow").style.backgroundColor = "yellow";
    document.querySelector(".red").style.backgroundColor = "gray";
  }, 3000);
  setTimeout(() => {
    document.querySelector(".green").style.backgroundColor = "green";
    document.querySelector(".yellow").style.backgroundColor = "gray";
  }, 6000);
}

setInterval(showSignal, 9000);
showSignal();
