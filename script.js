const computerChoiseDisplay = document.getElementById('compter-choise')
const userChoiseDisplay = document.getElementById('user-choise')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('img')
let userChoise
let compterChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoise = e.target.id
    userChoiseDisplay.innerHTML = userChoise
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)
    // console.log(randomNumber)
    if (randomNumber === 1){
        compterChoice = 'rock'
    }
    if (randomNumber === 2){
        compterChoice = 'scissors'
    }
    if (randomNumber === 3){
        compterChoice = 'paper'
    }
    computerChoiseDisplay.innerHTML = compterChoice
}
function getResult() {
    if (compterChoice === userChoise){
        result = 'its a draw'
    }
    if (compterChoice === 'rock' && userChoise === 'paper'){
        result = 'you win'
    }
    if (compterChoice === 'rock' && userChoise === 'scissors'){
        result = 'you lost'
    }
    if (compterChoice === 'paper' && userChoise === 'scissors'){
        result = 'you win'
    }
    if (compterChoice === 'paper' && userChoise === 'rock'){
        result = 'you lose'
    }
    if (compterChoice === 'scissors' && userChoise === 'rock'){
        result = 'you win'
    }
    if (compterChoice === 'scissors' && userChoise === 'paper'){
        result = 'you lose'
    }
    resultDisplay.innerHTML = result
}