function getComputerChoice() {
    let percentage = Math.random() * 100;
    if (percentage < 33.33) {
        return "rock";
    }
    if (percentage < 66.67) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors.")
    if (choice === null) return getHumanChoice();
    choice = choice.toLowerCase();
    if (choice === "rock") {
        return "rock";
    }
    else if (choice === "paper") {
        return "paper";
    }
    else if (choice === "scissors") {
        return "scissors";
    }
    else {
        console.log("Invalid selection. Try again.")
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("It's a tie. Rock against rock.");
        }
        else if (computerChoice === "paper") {
            console.log("You lose. Paper beats rock.");
            computerScore++;
        }
        else if (computerChoice === "scissors") {
            console.log("You win! Rock beats scissors.");
            humanScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats rock.");
            humanScore++;
        }
        else if (computerChoice === "paper") {
            console.log("It's a tie. Paper against paper.");
        }
        else if (computerChoice === "scissors") {
            console.log("You lose. Scissors beat paper.");
            computerScore++;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats paper.");
            computerScore++;
        }
        else if (computerChoice === "paper") {
            console.log("You win! Scissors beat paper.");
            humanScore++;
        }
        else if (computerChoice === "scissors") {
            console.log("It's a tie. Scissors against scissors.");
        }
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log(`After five rounds, the score is ${humanScore} to ${computerScore}.`)

    if (humanScore > computerScore) {
        console.log("You win!");
    }
    else if (computerScore > humanScore) {
        console.log("You lose!");
    }
    else console.log("The score is tied.");
}

let humanScore = 0;
let computerScore = 0;

playGame();
