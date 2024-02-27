function getComputerChoice(){
    let arr = ["rock", "paper", "scissors"]
    return arr[Math.floor(Math.random() * 3)];

}

    let playerScore = 0;
     let computerScore = 0;
     let roundsPlayed = 1;


function playRound(playerSelection, computerSelection = getComputerChoice()){
     let convertedInput = playerSelection.toLowerCase();
     
     
    if( convertedInput === "rock" && computerSelection ==="rock"){
        div1.innerHTML = `tie! round ${roundsPlayed} Player Score:${playerScore} Computer Score:${computerScore}`;
        roundsPlayed += 1;
    }else if( convertedInput === "paper" && computerSelection === "paper"){
        div1.innerHTML = `tie! round ${roundsPlayed} Player Score:${playerScore} Computer Score:${computerScore}`;
        roundsPlayed += 1;
    }else if( convertedInput === "scissors" && computerSelection === "scissors"){
        div1.innerHTML = `tie! round ${roundsPlayed} Player Score:${playerScore} Computer Score:${computerScore}`;
        roundsPlayed += 1;
    }else if( convertedInput === "paper" && computerSelection === "rock"){
        div1.innerHTML =`player wins! round:${roundsPlayed} Player Score:${playerScore} Computer Score:${computerScore}`;
        playerScore += 1;
        roundsPlayed += 1;
    }else if( convertedInput === "rock" && computerSelection === "scissors"){
        div1.innerHTML =`player wins! round:${roundsPlayed} Player Score:${playerScore} Computer Score:${computerScore}`;
        playerScore += 1;
        roundsPlayed += 1;
    }else if( convertedInput === "scissors" && computerSelection === "paper"){
        div1.innerHTML =`player wins! round:${roundsPlayed} Player Score:${playerScore} Computer Score:${computerScore}`;
        playerScore += 1;
        roundsPlayed += 1;
    }else if( convertedInput === "rock" && computerSelection === "paper"){
         div1.innerHTML = `computer wins! round:${roundsPlayed} Player Score:${playerScore} Computer Score:${computerScore}`;
         computerScore += 1
         roundsPlayed += 1;
    }else if( convertedInput === "paper" && computerSelection === "scissors"){
        div1.innerHTML = `computer wins! round:${roundsPlayed} Player Score:${playerScore} Computer Score:${computerScore}`;
        computerScore += 1
        roundsPlayed += 1;
    }else if( convertedInput === "scissors" && computerSelection === "rock"){
        div1.innerHTML = `computer wins! round:${roundsPlayed} Player Score:${playerScore} Computer Score:${computerScore}`;
        computerScore += 1
        roundsPlayed += 1;
    }

    if( playerScore === 5){
        div2.innerHTML = "Player wins the game!!!"
        playerScore = 0;
        computerScore = 0;
    }else if( computerScore === 5){
        div2.innerHTML = "Computer wins the game!!"
        playerScore = 0;
        computerScore = 0;
    }
}


const body = document.querySelector("body");
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');

btn1.id = 'rock';
btn2.id = 'paper';
btn3.id = 'scissors';

btn1.value = 'rock';
btn2.value = 'paper';
btn3.value = 'scissors';

const btn1Value = btn1.value;
const btn2Value = btn2.value;
const btn3Value = btn3.value;

body.appendChild(btn1);
body.appendChild(btn2);
body.appendChild(btn3);

btn1.innerHTML = "rock";
btn2.innerHTML = "paper";
btn3.innerHTML = "scissors"

btn1.addEventListener('click', () => {playRound(btn1Value)})
btn2.addEventListener('click', () => {playRound(btn2Value)})
btn3.addEventListener('click', () => {playRound(btn3Value)})


const div1 = document.createElement('div')
 body.appendChild(div1);

const div2 = document.createElement('div') 
 body.appendChild(div2);