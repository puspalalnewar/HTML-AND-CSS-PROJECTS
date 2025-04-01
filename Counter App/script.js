const ans = document.querySelector(".ans");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const input = document.querySelector("input");
const reset = document.querySelector(".reset");

function minusFun() {
  const inVal = parseInt(input.value);
  const counter = parseInt(ans.innerText);
  ans.innerHTML = counter - inVal;
}

function plusFun() {
  const inVal = parseInt(input.value);
  console.log(inVal);
  const counter = parseInt(ans.textContent);
  console.log(counter);
  ans.innerHTML = counter + inVal;
}

function resetFun() {
  ans.innerHTML = 0;
}

minus.addEventListener("click", minusFun);
plus.addEventListener("click", plusFun);
reset.addEventListener("click", resetFun);
