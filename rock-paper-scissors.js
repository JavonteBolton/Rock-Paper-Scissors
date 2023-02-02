const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result-display');

const choices = document.querySelectorAll('button')

let playerChoice
let computerChoice
let result


choices.forEach(possibleChicken => possibleChicken.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    generateCompChoice()
    getResult()
}))

function generateCompChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1

if(randomNum === 1) {
    computerChoice = 'rock'
}
if(randomNum === 2) {
    computerChoice = 'paper'
}
if(randomNum === 3) {
    computerChoice = 'scissors'
}

computerChoiceDisplay.innerHTML = computerChoice

}

//if statements
function getResult() {
if(computerChoice === 'rock' && playerChoice === 'scissors') {
    result = ' You Lose... :('
}
if(computerChoice === 'paper' && playerChoice === 'rock') {
    result = ' You Lose... :('
}
if(computerChoice === 'scissors' && playerChoice === 'paper') {
    result = ' You Lose... :('
}
if(playerChoice === 'rock' && computerChoice === 'scissors') {
    result =' You Win! :)'
}
if(playerChoice === 'paper' && computerChoice === 'rock') {
    result = ' You Win! :)'
}
if(playerChoice === 'scissors' && computerChoice === 'paper') {
    result = ' You Win! :)'
}
if(playerChoice === computerChoice) {
    result = ' Its A Draw :p'
}

resultDisplay.innerHTML = result
}

//results

