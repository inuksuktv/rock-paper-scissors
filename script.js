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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            messageElement.textContent = "It's a tie. Rock against rock.";
        }
        else if (computerChoice === "paper") {
            messageElement.textContent = "You lose. Paper beats rock.";
            computerScoreElement.textContent = parseInt(computerScoreElement.textContent) + 1;
        }
        else if (computerChoice === "scissors") {
            messageElement.textContent = "You win! Rock beats scissors.";
            humanScoreElement.textContent = parseInt(humanScoreElement.textContent) + 1;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            messageElement.textContent = "You win! Paper beats rock.";
            humanScoreElement.textContent = parseInt(humanScoreElement.textContent) + 1;
        }
        else if (computerChoice === "paper") {
            messageElement.textContent = "It's a tie. Paper against paper.";
        }
        else if (computerChoice === "scissors") {
            messageElement.textContent = "You lose. Scissors beat paper.";
            computerScoreElement.textContent = parseInt(computerScoreElement.textContent) + 1;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            messageElement.textContent = "You lose! Rock beats paper.";
            computerScoreElement.textContent = parseInt(computerScoreElement.textContent) + 1;
        }
        else if (computerChoice === "paper") {
            messageElement.textContent = "You win! Scissors beat paper.";
            humanScoreElement.textContent = parseInt(humanScoreElement.textContent) + 1;
        }
        else if (computerChoice === "scissors") {
            messageElement.textContent = "It's a tie. Scissors against scissors.";
        }
    }
}

function rockClick() {
    playRound("rock", getComputerChoice());
}

function paperClick() {
    playRound("paper", getComputerChoice());
}

function scissorsClick() {
    playRound("scissors", getComputerChoice());
}

const humanScoreElement = document.querySelector('div[player] div[score]');
const computerScoreElement = document.querySelector('div[computer] div[score]');
const messageElement = document.querySelector('div[message]');

const rockButton = document.getElementById("rockButton");
rockButton.addEventListener('click', rockClick);
const paperButton = document.getElementById('paperButton');
paperButton.addEventListener('click', paperClick);
const scissorsButton = document.getElementById('scissorsButton');
scissorsButton.addEventListener('click', scissorsClick);

