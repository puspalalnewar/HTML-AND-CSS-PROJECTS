const sectionOne = document.getElementById("one");
const contentOne = document.querySelector(".content-one");
const sectionTwo = document.getElementById("two");
const contentTwo = document.querySelector(".content-two");
const sectionThree = document.getElementById("three");
const contentThree = document.querySelector(".content-three");

let countOne = false;
let countTwo = false;
let countThree = false;

sectionOne.addEventListener("click", () => {
    if (countOne) {
        contentOne.style.display = "none";
        sectionOne.style.background = "rgb(122, 122, 131)";
        countOne = false;
    } else {
        contentOne.style.display = "block";
        sectionOne.style.background = "rgb(185, 127, 185)";
        countOne = true;
    }

})
sectionTwo.addEventListener("click", () => {
    if (countTwo) {
        contentTwo.style.display = "none";
        sectionTwo.style.background = "rgb(122, 122, 131)";
        countTwo = false;
    } else {
        contentTwo.style.display = "block";
        sectionTwo.style.background = "rgb(185, 127, 185)";
        countTwo = true;
    }

})
sectionThree.addEventListener("click", () => {
    if (countThree) {
        contentThree.style.display = "none";
        sectionThree.style.background = "rgb(122, 122, 131)";
        countThree = false;
    } else {
        contentThree.style.display = "block";
        sectionThree.style.background = "rgb(185, 127, 185)";
        countThree = true;
    }

})