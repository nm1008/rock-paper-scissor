//selectors for button
const rockImg = document.querySelector(".rock-link");
const paperImg = document.querySelector(".paper-link");
const scissorsImg = document.querySelector(".scissors-link");

// creating div element for move
const move = document.querySelector(".instruction");

const player = document.querySelector(".player");
const computer = document.querySelector(".computer");

let userScore = 0;
let computerScore = 0;


//computer picks choice
function getComputerChoice() {
    let pick = ['rock', 'paper', 'scissor'];
    return pick[Math.floor(Math.random() * 3)];
}

//function that starts to compare 2 value to see who is winner and adds up the score of the player who wins that round
function play(playerSelection, computerSelection){
    let userPick = playerSelection.toLowerCase();
    
    if (userPick === "scissor" && computerSelection === "rock") {
        computerScore++;
        move.textContent = "You lose! Rock beats Scissor";
       
    } else if (userPick === 'scissor' && computerSelection === 'paper'){
        userScore++;
        move.textContent =  "You win! Scissor beats Paper";
       
    } else if (userPick === 'rock' && computerSelection === 'paper'){
        computerScore++;
        move.textContent =  "You lose! Paper beats Rock";
       
    } else if (userPick === 'rock' && computerSelection === 'scissor') {
        userScore++;
        move.textContent =  "You win! Rock beats Scissor";
    } else if (userPick === 'paper' && computerSelection === 'rock') {
        userScore++;
        move.textContent =  "You Win! Paper beats Rock";
       
    } else if (userPick === 'paper' && computerSelection === 'scissor') {
        computerScore++;
        move.textContent =  "You lose! Scissor beats Paper";
       
    } else {
        move.textContent =  "Draw!";
       
    }  
}

// a function that initiates the game and prints out the score on the screen 
function game(choice) {
   
        const computerSelection = getComputerChoice();
        let playerSelection = choice;
        play(playerSelection, computerSelection)
        
        player.innerHTML = `You: ${userScore}`
        computer.innerHTML = `Computer: ${computerScore}`
        
    // if the player or computer scores 5 this if statement declares the winner and prompts if the player  wants to play another round if not alerts game over and refreshes the page for 5 seconds
    if (userScore === 5) {
        alert("You Win!")
        let playAgain = confirm("Do you want to play again?")
        if(playAgain){
            userScore = 0;
            computerScore = 0;
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
            alert("GAME OVER!!")
            setTimeout( () => {
                location.reload();
            }, 5000)
        }
    }
}

// //event listener for the buttons
rockImg.addEventListener('click', () => {
    game('Rock')
});

paperImg.addEventListener('click', () => {
    game('Paper')
});

scissorsImg.addEventListener('click', () => {
    game('Scissor')
});