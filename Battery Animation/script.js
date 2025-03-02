const battery = document.querySelector("#battery");

animateBattery();

setInterval(animateBattery, 5000);

function animateBattery() {
  battery.innerHTML = "&#xf244";
  setTimeout(() => {
    battery.innerHTML = "&#xf243";
  }, 1000);
  setTimeout(() => {
    battery.innerHTML = "&#xf242";
  }, 2000);
  setTimeout(() => {
    battery.innerHTML = "&#xf241";
  }, 3000);
  setTimeout(() => {
    battery.innerHTML = "&#xf240";
  }, 4000);
}
