const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");

const input = document.querySelector("input");
const btn = document.querySelector("button");

input.addEventListener("input", () => {
  if (input.value >= 10) {
    input.value = "";
    return;
  }
});

const list = [
  {
    num: 1,
    eleName: one,
    eleClassName: ".one",
  },
  {
    num: 2,
    eleName: two,
    eleClassName: ".two",
  },
  {
    num: 3,
    eleName: three,
    eleClassName: ".three",
  },
  {
    num: 4,
    eleName: four,
    eleClassName: ".four",
  },
  {
    num: 5,
    eleName: five,
    eleClassName: "five",
  },
  {
    num: 6,
    eleName: six,
    eleClassName: "six",
  },
  {
    num: 7,
    eleName: seven,
    eleClassName: "seven",
  },
  {
    num: 8,
    eleName: eight,
    eleClassName: "eight",
  },
  {
    num: 9,
    eleName: nine,
    eleClassName: "nine",
  },
];

function applyColor() {
  const inputVal = input.value;

  list.map((currEle) => {
    const { num, eleName, eleClassName } = currEle;
    if (num == inputVal) {
      const common = document.querySelectorAll(`.common:not(${eleClassName})`);
      common.forEach((currEle) => {
        currEle.style.backgroundColor = "transparent";
      });
      eleName.style.backgroundColor = "red";
    }
  });
}

btn.addEventListener("click", applyColor);
