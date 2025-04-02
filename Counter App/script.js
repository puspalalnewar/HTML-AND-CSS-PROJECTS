const ans = document.querySelector(".ans");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const input = document.querySelector("input");
const reset = document.querySelector(".reset");

let counter = 0;
let currVal = parseInt(ans.innerHTML);

function plusFun() {
  const inValue = parseInt(input.value);
  counter += inValue;
  ans.innerHTML = counter;
}

function minusFun() {
  const inValue = parseInt(input.value);
  counter -= inValue;
  ans.innerHTML = counter;
}

plus.addEventListener("click", plusFun);
minus.addEventListener("click", minusFun);
reset.addEventListener("click", () => {
  counter = 0;
  ans.innerHTML = counter;
});
