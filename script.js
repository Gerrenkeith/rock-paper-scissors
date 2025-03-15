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
 
    // Check for game over
if (humanScore === 2 && humanScore > computerScore) {
            alert("You win the game!");
            round = 0;
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 2 &&computerScore > humanScore) {
            alert("Computer wins the game!");
            round = 0;
            humanScore = 0;
            computerScore = 0;
        }  // Reset the game

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

    // Display results
    document.getElementById("result").textContent = resultMessage;
    document.getElementById("round").textContent = "Round: " + round;
    document.getElementById("user-score").textContent = "Your Score: " + humanScore;
    document.getElementById("computer-score").textContent = "Computer Score: " + computerScore;
   
    
        
       
      
    }




function setupGame() {
    const buttons = document.querySelectorAll("button");
    const userChoiceElement = document.getElementById("user-choice");
    const computerChoiceElement = document.getElementById("computer-choice");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const humanChoice = button.id; // Get the button id (rock, paper, scissors)
            const computerChoice = getComputerChoice();

            // Display choices
            userChoiceElement.textContent = "You chose: " + humanChoice;
            computerChoiceElement.textContent = "Computer chose: " + computerChoice;

            // Play the round
            playRound(humanChoice, computerChoice);
        });
    });
}

// Initialize the game
setupGame();