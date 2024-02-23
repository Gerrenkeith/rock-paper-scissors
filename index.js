function getComputerChoice(){
    let arr = ["rock", "paper", "scissors"]
    return arr[Math.floor(Math.random() * 3)];

}




function playRound(playerSelection, computerSelection){
    // let convertedInput = playerSelection.toLowerCase();
    if(playerSelection === "rock" && computerSelection ==="rock"){
        return "tie"
    }else if(playerSelection === "paper" && computerSelection === "paper"){
        return "tie"
    }else if(playerSelection === "scissors" && computerSelection === "scissors"){
        return "tie"
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        return "player wins"
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "player wins"
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "player wins"
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        return  "computer wins"
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "computer wins"
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "computer wins"
    }
}

function playGame(){
        let playerScore = 0;
        let computerScore = 0;
    for(let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        let answer = prompt("Please enter a rock, paper or scissors: ").toLowerCase();
        let roundWinner = playRound(answer, computerSelection);
        if(roundWinner === "player wins"){
             playerScore += 1; 
        }else if(roundWinner === "computer wins"){
             computerScore += 1;
        } 
        console.log(`Round ${i}: ${roundWinner}. Player Score: ${playerScore}. Computer Score: ${computerScore}`);
    }
    return  `Final Scores - Player: ${playerScore}, Computer: ${computerScore}`;
}

console.log(playGame())