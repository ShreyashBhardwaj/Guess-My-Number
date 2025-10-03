"use strict";

function newRandomValue() {
  return Math.trunc(Math.random() * 20) + 1;
}

let scoreGUI = document.querySelector(".score");
let score = 20;
let body = document.querySelector("body");
let highScore = document.querySelector(".highscore");
let currentHighScore = Number(document.querySelector(".highscore").innerHTML);
let secretNumber = newRandomValue();
const actualValue = document.querySelector(".number");

const checkButton = document.querySelector(".check");
const message = document.querySelector(".message");

function displayMSG(msg) {
  message.innerHTML = msg;
}

function checkValue(playerGuess) {
  if (playerGuess === secretNumber) {
    displayMSG("You did it great 🎉");

    // Style
    body.style.backgroundColor = "#60b347";
    actualValue.innerHTML = secretNumber;
    actualValue.style.width = "20rem";

    if (score > currentHighScore) {
      currentHighScore = score;
      highScore.innerHTML = score;
    }
  } else {
    if (score === 0) {
      displayMSG("Game Over 😞");
    } else {
      displayMSG(playerGuess > secretNumber ? "Too High 😥" : "Too Low 😥");
      score -= 1;
    }
    scoreGUI.innerHTML = score;
  }
}

function resetGame() {
  scoreGUI.innerHTML = 20;
  score = 20;
  body.style.backgroundColor = "#222";
  actualValue.style.width = "15rem";
  actualValue.innerHTML = "?";
  document.querySelector(".guess").value = "";
  displayMSG("Start guessing...");
  secretNumber = newRandomValue();
}

checkButton.addEventListener("click", function () {
  let playerGuess = Number(document.querySelector(".guess").value);
  if (!playerGuess) {
    displayMSG("Enter a Number Please!");
  } else {
    checkValue(playerGuess);
  }
});

const again = document.querySelector(".again");
again.addEventListener("click", resetGame);
