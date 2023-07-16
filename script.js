let userScore = 0;

function getComputerChoice() {
    let pick = ['rock', 'paper', 'scissor'];
    return pick[Math.floor(Math.random() * 3)];
}

function play(playerSelection, computerSelection){
    let userPick = playerSelection.toLowerCase();
    
    if (userPick === "scissor" && computerSelection === "rock") {
        return "You lose! Rock beats Scissor";
    } else if (userPick === 'scissor' && computerSelection === 'paper'){
        userScore++;
        return "You win! Scissor beats Paper";
    } else if (userPick === 'rock' && computerSelection === 'paper'){
        return "You lose! Paper beats Rock";
    } else if (userPick === 'rock' && computerSelection === 'scissor') {
        userScore++;
        return "You win! Rock beats Scissor";
    } else if (userPick === 'paper' && computerSelection === 'rock') {
        userScore++;
        return "You Win! Paper beats Rock";
    } else if (userPick === 'paper' && computerSelection === 'scissor') {
        return "You lose! Scissor beats Paper";
    } else {
        return "Draw!";
    }  
}

function game() {
    for (let i = 1; i <= 5; i++){
        const computerSelection = getComputerChoice();
        let playerSelection = prompt("Choose: Rock, Paper or Scissor?");
        alert(play(playerSelection, computerSelection));     
    }
    alert("Your score is " + userScore );
}