let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
let firstRandomValue = 0
let secondRandomValue = 0

function restartButton() {
    firstRandomValue = Math.ceil(Math.random() * 100);
    secondRandomValue = Math.ceil(Math.random() * 100);
    firstNumber.textContent = firstRandomValue;
    secondNumber.textContent = secondRandomValue;
    gameResult.textContent = ""
}

function checkButton() {
    let inputValue = parseInt(userInput.value);
    if (inputValue === (firstRandomValue + secondRandomValue)) {
        gameResult.textContent = "Congratulation! You got it Right";
        gameResult.style.backgroundColor = "#028a0f";
    } else {
        gameResult.textContent = "Please Try Again!";
        gameResult.style.backgroundColor = "#1e217c";
    }
}


function restartButton() {
    firstRandomValue = Math.ceil(Math.random() * 100);
    secondRandomValue = Math.ceil(Math.random() * 100);
    firstNumber.textContent = firstRandomValue;
    secondNumber.textContent = secondRandomValue;
    gameResult.textContent = ""
}