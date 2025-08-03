let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        return 'rock';
    }
    else if (randomNumber === 1){
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

console.log(getComputerChoice());

function getHumanChoice(){
    const humanChoice = prompt("Enter rock, paper or scissors").toLowerCase();
    return humanChoice;
}

console.log(getHumanChoice());

