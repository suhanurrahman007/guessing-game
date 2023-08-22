//innitialaizing values
 let totalAttempts = 5;
 let attempts = 0;
 let totalWons = 0;
 let totalLoss =0;




//finding element

const cardBody = document.querySelector(".card-body");
const form = document.querySelector("form");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#checked");
const resultText = cardBody.querySelector(".resultText");
const lostWonMessage = document.createElement("p");
const remainingTime = cardBody.querySelector(".remainingTime");

form.addEventListener("submit" , function(event){
    event.preventDefault();
    attempts++;
    if(attempts>5){
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }
    if(attempts<6){
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        remainingTime.innerHTML =`Remaining Time : ${totalAttempts - attempts}`;
    }


});

function checkResult (guessingNumber){
    console.log(guessingNumber);
    const randomNumber = getRandomNumber(5);
    if(guessingNumber=== randomNumber){
        resultText.innerHTML = `you have Won`;
        totalWons++;

    }else{
        resultText.innerHTML = `you have loss; random Number was : ${randomNumber}`
        totalLoss++;
    }
    lostWonMessage.innerHTML = `Won : ${totalWons}, Lost : ${totalLoss}`;
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);
}

function getRandomNumber (limit){
   return Math.floor(Math.random() * limit) +1;
}