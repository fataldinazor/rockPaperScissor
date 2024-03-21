'use strict'
let choices=['rock', 'paper', 'scissors'];

function getComputerChoice(){
    let random= Math.floor(Math.random()*3);
    // console.log(random);
    return choices[random];
}

function getPlayerChoice(){
    let choice=prompt("what is your choice: rock, paper, scissors");
    let playerChoice=choice.toLowerCase();
    return playerChoice;
}


function playRound(playerSelection, computerSelection) {
    let winner = "";
    if (playerSelection === computerSelection) {
      winner = "It's a tie";
      return "tie";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      winner = `You win! ${playerSelection} beats ${computerSelection}`;
      return "player";

    } else {
      winner = `You lose! ${computerSelection} beats ${playerSelection}`;
      return "computer";
    }
  }

function playGame(){
    let result;
    let count=0;
    let playerScore=0;
    let computerScore=0;

    do{
        result=playRound(getPlayerChoice(), getComputerChoice());
        if (result==='player')
        playerScore++;

        if(result==='computer')
        computerScore++;

        count++;
        console.log(count && result);
    }while (count<5);


    if (playerScore > computerScore) {
        alert("You win");
      } 
      else if (playerScore === computerScore) {
        alert("It's a draw!");
      } 
      else {
        alert("Computer wins!");
      }
  }

playGame();