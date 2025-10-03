"use strict";
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
console.log(highScore);

const randomValue = Math.floor(Math.random() * (20 - 1)) + 1;
const actualValue = document.querySelector(".number");

console.log(randomValue);
const checkButton = document.querySelector(".check");
const message = document.querySelector(".message");

function checkValue(playerGuess) {
  if (playerGuess === randomValue) {
    message.innerHTML = "You did it great 🎉";
    highScore.innerHTML = score;
    document.querySelector("body").style.backgroundColor = "#60b347";
    actualValue.innerHTML = randomValue;
  } else {
    if (playerGuess > randomValue) {
      message.innerHTML = "Too High 😥";
    } else {
      message.innerHTML = "Too Low 😥";
    }
    score.innerHTML = score.innerHTML - 1;
  }
}

checkButton.addEventListener("click", function () {
  let playerGuess = Number(document.querySelector(".guess").value);
  checkValue(playerGuess);
});
