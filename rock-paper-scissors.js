const computerChoiceDisplay = document.getElementById('Computer-choice')
const yourChoice = document.getElementById('Your-Choice')
const resultDisplay = document.getElementById ('Result')
const possibleChoices = document.querySelectorAll('button')
let computerChoice
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    yourChoice.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    
    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'Scissors'
    }
    if( randomNumber === 3) {
        computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userChoice) {
        Result = 'Its a draw!'
    }
    if(computerChoice === 'Rock' && userChoice === 'Paper') {
        Result = 'You Win!'
    }
    if(computerChoice === 'Paper' && userChoice === 'Scissors') {
        Result = 'You win!'
    }
    if(computerChoice ==='Scissors' && userChoice === 'Rock') {
        Result = 'You win!'
    }
    if(computerChoice === 'Rock' && userChoice === 'Scissors') {
        Result = 'You lose!'
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
        Result = 'You lose!'
    }
    if(computerChoice === 'Scissors' && userChoice === 'Paper') {
        Result = 'You lose!'
    }
    resultDisplay.innerHTML = Result
    
    
}