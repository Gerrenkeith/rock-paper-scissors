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

let round = 1;
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let resultMessage = "";
 
  
if (humanScore === 3 && humanScore > computerScore) {
            alert("You win the game!");
            round = 0;
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 3 &&computerScore > humanScore) {
            alert("Computer wins the game!");
            round = 0;
            humanScore = 0;
            computerScore = 0;
        }  

    if (humanChoice === computerChoice) {
        resultMessage = "It's a tie!";
        round++;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        resultMessage = "You win!";
        humanScore++;
        round++;
    } else {
        resultMessage = "Computer wins!";
        computerScore++
        round++;
    }


    document.getElementById("result").textContent = resultMessage;
    document.getElementById("round").textContent = "Round: " + round;
    document.getElementById("user-score").textContent = "Your Score: " + humanScore;
    document.getElementById("computer-score").textContent = "Computer Score: " + computerScore;
   
    
        
       
      
    }




function playGame() {
    const buttons = document.querySelectorAll("button");
    const userChoiceElement = document.getElementById("user-choice");
    const computerChoiceElement = document.getElementById("computer-choice");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const humanChoice = button.id; 
            const computerChoice = getComputerChoice();

        
            userChoiceElement.textContent = "You chose: " + humanChoice;
            computerChoiceElement.textContent = "Computer chose: " + computerChoice;

        
            playRound(humanChoice, computerChoice);
        });
    });
}


playGame();