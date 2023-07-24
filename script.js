const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btnContainer = document.querySelector('.btn')
const userDiv = document.createElement('div');
const computerDiv = document.createElement('div');

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let pick = ['rock', 'paper', 'scissor'];
    return pick[Math.floor(Math.random() * 3)];
}

function play(playerSelection, computerSelection){
    let userPick = playerSelection.toLowerCase();
    
    if (userPick === "scissor" && computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats Scissor";
    } else if (userPick === 'scissor' && computerSelection === 'paper'){
        userScore++;
        return "You win! Scissor beats Paper";
    } else if (userPick === 'rock' && computerSelection === 'paper'){
        computerScore++;
        return "You lose! Paper beats Rock";
    } else if (userPick === 'rock' && computerSelection === 'scissor') {
        userScore++;
        return "You win! Rock beats Scissor";
    } else if (userPick === 'paper' && computerSelection === 'rock') {
        userScore++;
        return "You Win! Paper beats Rock";
    } else if (userPick === 'paper' && computerSelection === 'scissor') {
        computerScore++;
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
        userDiv.textContent = `Your score is ${userScore }`
        btnContainer.appendChild(userDiv);

        computerDiv.textContent = `Computer score is ${computerScore }`
        btnContainer.appendChild(computerDiv);

    if (userScore === 5) {
        alert("You Win!")
        let playAgain = confirm("Do you want to play again?")
        if(playAgain){
            userScore = 0;
            computerScore = 0;
            userDiv.textContent = "Your score is 0";
            computerDiv.textContent = "Computer score is 0";
        } else {
            alert("GAME OVER!!")
            setTimeout( () => {
                location.reload();
            }, 5000)
        }
    } else if (computerScore === 5) {
        alert("Computer Wins")
        let playAgain = confirm("Do you want to play again?")
        if(playAgain){
            userScore = 0;
            computerScore = 0;
            userDiv.textContent = "Your score is 0";
            computerDiv.textContent = "Computer score is 0";
        } else {
            alert("GAME OVER!!")
            setTimeout( () => {
                location.reload();
            }, 5000)
        }
    }
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