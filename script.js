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

function getHumanChoice() {
    let choice = prompt("Type 'Rock', 'Paper', or 'Scissors'").toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.log("Invalid choice. Please enter Rock, Paper, or Scissors.");
        return getHumanChoice(); // Re-prompt user if input is invalid
    }
}

let round = 0
let humanScore = 0;
let computerScore = 0;
let roundResult = " ";

function playRound() {
    while (humanScore < 2 && computerScore < 2) {  // Keep playing until someone reaches 2 points
        round++;
        console.log(`Round ${round}`);

        // Prompt user for their choice **each round**
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            console.log("It's a tie! Try again.");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            humanScore++;
            console.log("You win this round!");
        } else {
            computerScore++;
            console.log("You lose this round!");
        }

        console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
        console.log("-----------------------");
    }

    // Game over message
    console.log("Game Over!");
    if (humanScore === 2) {
        console.log("🎉 Congratulations! You won the game! 🎉");
    } else {
        console.log("💻 The computer won! Better luck next time! 💻");
    }
}


playRound()
