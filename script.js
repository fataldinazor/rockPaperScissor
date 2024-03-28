'use strict'

const btns=document.querySelectorAll('.btn');
let playerScore=0, computerScore=0, rounds=1;
const choices=['rock','paper', 'scissors'];

const displayPlayerScore=document.querySelector('.playerScores .score');
const displayComputerScore=document.querySelector('.computerScores .score');
const roundNumber=document.querySelector('.roundNo');
const roundWinner=document.querySelector('.roundWinner');


btns.forEach(function(btn){
    btn.addEventListener('click',function(){
        const playerChoice=btn.id;
        console.log(playerChoice);
        const computerChoice=getComputerChoice();
        let winner=getWinner(playerChoice,computerChoice);

        if (winner==='player'){
            playerScore++;
        }

        if(winner==='computer'){
            computerScore++;
        }

        displayPlayerScore.textContent=playerScore;
        displayComputerScore.textContent=computerScore;

        ++rounds;

        if (rounds>4)
        endgame();
    })
})

function getComputerChoice(){
    const random=Math.floor(Math.random()*3);
    return choices[random];
}

function getWinner(playerChoice,computerChoice){
    let message='';
    if (playerChoice === computerChoice) {
        message = "It's a tie";
        return "tie";
      } 

    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        message = `You win! ${playerChoice} beats ${computerChoice}`;
        return "player";
    }

    else {
        message = `You lose! ${computerChoice} beats ${playerChoice}`;
        return "computer";
    }
}

function endGame(){
    
}
