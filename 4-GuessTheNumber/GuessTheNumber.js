document.getElementById("guess");

let randomNumber = parseInt(Math.random() * 100 + 1);

console.log(randomNumber);

const submit = document.querySelector("#subt");
const UserInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

let p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(UserInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a Valid Number");
  } else if (guess > 100) {
    alert("Please enter a Number less then 100");
  } else if (guess < 1) {
    alert("Please enter a Number more then 1");
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over Random Number Was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
  //
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You Guessed it Right");
  } else if (guess > randomNumber) {
    displayMessage("Guessed number is more then Random Number");
  } else if (guess < randomNumber) {
    displayMessage("Guessed number is less  then Random Number");
  }
  //
}

function displayGuess(guess) {
  UserInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  remaining.innerHTML = `${11 - numGuess}`;
  numGuess++;
}

function displayMessage(message) {
  if (message === "You Guessed it Right") {
    lowOrHi.style.color = "green";
    lowOrHi.innerHTML = `${message}`;
  } else if (message === "Guessed number is more then Random Number") {
    lowOrHi.style.color = "red";
    lowOrHi.innerHTML = `${message}`;
  } else if (message === "Guessed number is less  then Random Number") {
    lowOrHi.style.color = "red";
    lowOrHi.innerHTML = `${message}`;
  }
  //
  // lowOrHi.innerHTML = `${message}`;
}

function endGame() {
  UserInput.value = "";
  UserInput.setAttribute("disabled", "");
  p.classList.add("button");
  lowOrHi.innerHTML = "";
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    UserInput.removeAttribute("disabled");
    startOver.removeChild(p);
    lowOrHi.innerHTML = "";
    playGame = true;
  });
}
