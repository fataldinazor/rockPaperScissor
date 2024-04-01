'use strict'

const btns=document.querySelectorAll('.btn');
let playerScore=0, computerScore=0, rounds=0;
const choices=['rock','paper', 'scissors'];

const displayPlayerScore=document.querySelector('.playerScores .score');
const displayComputerScore=document.querySelector('.computerScores .score');
const roundNumber=document.querySelector('.roundNo');
const roundWinner=document.querySelector('.roundWinner');
const overlay=document.querySelector('.overlay');
const finalWinnerMessage=document.querySelector('.overlay .message');
const retryBtn=document.querySelector('.retry');


btns.forEach(function(btn){
    btn.addEventListener('click',function(){
        const playerChoice=btn.id;
        console.log(playerChoice);
        const computerChoice=getComputerChoice();
        let winner=getWinner(playerChoice,computerChoice);
        if (winner==='player'){
            playerScore++;
            roundWinner.textContent=`You win! ${playerChoice} beats ${computerChoice}`;         
        }
        
        if(winner==='computer'){
            computerScore++;
            roundWinner.textContent=`You lose! ${computerChoice} beats ${playerChoice}`;
        }

        if(winner=='tie')
        {
            roundWinner.textContent='It\'s a Tie!'
        }

        displayPlayerScore.textContent=playerScore;
        displayComputerScore.textContent=computerScore;

        rounds++;
        roundNumber.textContent=rounds;
        console.log(rounds);
        if (rounds>4)
        endGame();
    })
})

function getComputerChoice(){
    const random=Math.floor(Math.random()*3);
    return choices[random];
}

function getWinner(playerChoice,computerChoice){
    if (playerChoice === computerChoice) {
        return "tie";
      } 

    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "player";
    }

    else {
        return "computer";
    }
}

function endGame(){
    let winner='';
    if (playerScore > computerScore) {
        winner="You win";
      } 
      else if (playerScore === computerScore) {
        winner="It's a draw!";
      } 
      else {
        winner="Computer wins!";
      }
      finalWinnerMessage.textContent=winner;
      overlay.style.display='block';      
      retryBtn.addEventListener('click',restartGame);
}

function restartGame(){
    overlay.style.display='none';
    playerScore=0;
    computerScore=0;
    rounds=0;
    displayPlayerScore.textContent=playerScore;
    displayComputerScore.textContent=computerScore;
    roundNumber.textContent=rounds;

}