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