const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btnCointainer = document.querySelector('.btn')
const div = document.createElement('div');



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

function game(choice) {
   
        const computerSelection = getComputerChoice();
        let playerSelection = choice;
        alert(play(playerSelection, computerSelection));     
   
    // alert("Your score is " + userScore );
    div.textContent = `Your score is ${userScore }`
    btnCointainer.appendChild(div);
}

btn1.addEventListener('click', () => {
    game('Rock')
});

btn2.addEventListener('click', () => {
    game('Paper')
});

btn3.addEventListener('click', () => {
    game('Scissor')
});