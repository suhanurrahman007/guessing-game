//initializing Value
let totalTime = 5;
let time = 0;
let totalWons = 0;
let totalLost = 0;

// finding elements
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = document.querySelector("#guessingNumber");
const checkButton = document.querySelector("#checked");
const resultText = document.querySelector(".resultText");
const LostWon = document.createElement ("p");
const remainingTime = document.querySelector(".remainingTime");


form.addEventListener("submit",function(event) {
    event.preventDefault();
   
    time++;
    if(time == 5){
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }if(time < 6){
        const GuseeNumber = Number(guessingNumber.value);
        checkResult(GuseeNumber);
        remainingTime.innerHTML = `Remaining Time : ${totalTime - time}`;
    }
});

function checkResult(guessingNumber) {
    const randomNumber = getRandomNumber(5);
    if(guessingNumber == randomNumber){
        resultText.innerHTML = `you have Won ; random number was : ${randomNumber}`;
        totalWons++;
    }else{
        resultText.innerHTML = `you have lost ; random number was : ${randomNumber}`;
        totalLost++;
    }
    LostWon.innerHTML = `Won : ${totalWons}, Lost : ${totalLost}`
    LostWon.classList.add("large-text");
    cardBody.appendChild(LostWon);

}

function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}
