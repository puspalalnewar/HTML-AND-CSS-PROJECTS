const para = document.querySelector(".text");

let position = [
  "Student",
  "Instructor",
  "Frontend Developer",
  "Learner",
  "MERN Stack Developer",
];

let positionIdx = 0;

let charIdx = 0;

updatePos();

function updatePos() {
  charIdx++;
  para.innerHTML = `${
    position[positionIdx].slice(0, 1) === "I" ? "an " : "a "
  } ${position[positionIdx].slice(0, charIdx)}`;
  if (charIdx === position[positionIdx].length) {
    positionIdx++;
    charIdx = 0;
  }
  if (positionIdx === position.length) {
    positionIdx = 0;
  }
  setTimeout(updatePos, 400);
}
