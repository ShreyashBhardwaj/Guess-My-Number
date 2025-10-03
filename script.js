"use strict";
let scoreGUI = document.querySelector(".score");
let score = 20;
let highScore = document.querySelector(".highscore");
let currentHighScore = Number(document.querySelector(".highscore").innerHTML);
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const actualValue = document.querySelector(".number");

console.log(secretNumber);
const checkButton = document.querySelector(".check");
const message = document.querySelector(".message");

function checkValue(playerGuess) {
  if (playerGuess === secretNumber) {
    message.innerHTML = "You did it great 🎉";
    highScore.innerHTML = scoreGUI;

    // Style
    document.querySelector("body").style.backgroundColor = "#60b347";
    actualValue.innerHTML = secretNumber;
    actualValue.style.width = "20rem";

    if (score > currentHighScore) {
      highScore.innerHTML = score;
    }
  } else {
    if (score === 0) {
      message.innerHTML = "Game Over 😞";
    } else {
      if (playerGuess > secretNumber) {
        message.innerHTML = "Too High 😥";
        score -= 1;
      } else {
        message.innerHTML = "Too Low 😥";
        score -= 1;
      }
    }
    scoreGUI.innerHTML = score;
  }
}

checkButton.addEventListener("click", function () {
  let playerGuess = Number(document.querySelector(".guess").value);
  if (!playerGuess) {
    message.innerHTML = "Enter a Number Please!";
  } else {
    checkValue(playerGuess);
  }
});

const again = document.querySelector(".again");
again.addEventListener("click", function () {
  location.reload(true);
});
