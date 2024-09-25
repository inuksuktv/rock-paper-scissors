function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.333) {
        return "rock";
    }
    if (randomNumber < 0.666) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors.")
    choice = choice.toLowerCase();
    if (choice == "rock") {
        return "rock";
    }
    if (choice == "paper") {
        return "paper";
    }
    if (choice == "scissors") {
        return "scissors";
    }
    console.log("Invalid selection. Try again.")
    getHumanChoice();
}

function playRound(humanChoice, computerChoice) {

}

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();