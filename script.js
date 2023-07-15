function getComputerChoice() {
    let pick = ['rock', 'paper', 'scissor'];
    let randomNumber = Math.floor(Math.random() * 3)
    return pick[randomNumber]; 
}

function play(playerSelection, computerSelection){
    let userPick = playerSelection.toLowerCase();
    
    if (userPick === "scissor" && computerSelection === "rock") {
        return "You lose! Rock beats Scissor";
    } else if (userPick === 'scissor' && computerSelection === 'paper'){
        return "You win! Scissor beats Paper";
    } else if (userPick === 'rock' && computerSelection === 'paper'){
        return "You lose! Paper beats Rock";
    } else if (userPick === 'rock' && computerSelection === 'scissor') {
        return "You win! Rock beats Scissor";
    } else if (userPick === 'paper' && computerSelection === 'rock') {
        return "You Win! Paper beats Rock";
    } else if (userPick === 'paper' && computerSelection === 'scissor') {
        return "You lose! Scissor beats Paper";
    } else {
        return "Draw!";
    }

}

const playerSelection = "PAPER";
const computerSelection = getComputerChoice();

console.log(computerSelection)

console.log(play(playerSelection, computerSelection));


