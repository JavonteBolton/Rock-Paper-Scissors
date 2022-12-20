function getComputersMove() {
    const computersChoices = Math.floor(Math.random() * 3)
switch (computersChoices) {
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2:
        return "scissors";
} 
}

function playersChoices() {
    const ask = prompt("can you beat the evil machine?").toLowerCase();
    return ask;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "you win!"
    } else if( playerSelection === "paper" && computerSelection === "rock") {
        return "you win!"
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        return "you win!"
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "you loose"
    } else if ( computerSelection === "paper" && playerSelection === "rock") {
        return "you loose"
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "you loose"
    } else if (playerSelection >= computerSelection) {
        return "its a tie!"
    } else if (computerSelection >= playerSelection) {
        return "its a tie!"
    }
}

    const playerSelection = playersChoices();
    const computerSelection = getComputersMove();
    console.log(playRound(playerSelection, computerSelection));