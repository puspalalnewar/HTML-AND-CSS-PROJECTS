const slides = document.querySelectorAll(".slide");

let counter = 0;

slides.forEach((ele, idx) => {
  ele.style.left = `${idx * 100}%`;
});

const prev = () => {
  counter--;
  if (counter < 0) {
    counter = 0;
  }
  slideImage();
};
const next = () => {
  counter++;
  if (counter == slides.length) {
    counter = 0;
  }
  slideImage();
};

const slideImage = () => {
  slides.forEach((ele) => {
    ele.style.transform = `translateX(-${counter * 100}%)`;
  });
};
