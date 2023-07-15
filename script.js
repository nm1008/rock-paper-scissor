function getComputerChoice() {
    let pick = ['rock', 'paper', 'scissor'];
    let randomNumber = Math.floor(Math.random() * 3)
    console.log(pick[randomNumber]); 
}

getComputerChoice()