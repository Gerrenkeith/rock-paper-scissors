console.log("sup")

console.log(Math.floor(Math.random() * 3))

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)

    if(choice === 0){
        choice = "rock";
    }else if(choice === 1){
        choice = "paper";
    }else{
        choice = "scissors"
    }

    return choice
}


function getHumanChoice(){
 let humanChoice = prompt("type 'Rock, Paper or Scissors'").toLowerCase()

 if(humanChoice === "rock"){
    return "rock";
 }else if(humanChoice === "paper"){
    return "paper";
 }else if(humanChoice === "scissors"){
    return "scissors"
 }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

    if(humanChoice === "rock" && computerChoice === "scissors"){
        return "You win! Rock beats Paper!"
    }else if(humanChoice === "rock" && computerChoice === "paper"){
        return "You lose! Paper beats Rock!"
    }else if(humanChoice === "scissors" && computerChoice === "paper"){
        return "You win! Scissors beats Paper!"
    }else if(humanChoice === "scissors" && computerChoice === "rock"){
        return "You lose! Rock beats Scissors!"
    }else if(humanChoice === "paper" && computerChoice === "rock"){
        return "You win! Paper beats Rock!!"
    }else if(humanChoice === "paper" && computerChoice === "scissors"){
        return "You win! Scissors beat Rock!"
    }
}

console.log(playRound(humanSelection, computerSelection))