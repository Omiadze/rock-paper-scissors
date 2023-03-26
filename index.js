function getComputerChoice(){
    const randomPick = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return randomPick[randomNumber];
}


function getPlayerSelection(){
    userChoice = prompt("Rock PaPer Scissors?: ");
    return userChoice.toUpperCase();
}


function play(playerChoice,computer){
    if (playerChoice === "ROCK" && computer === "paper"){
        return "You lose"
    } else if (playerChoice === "ROCK" && computer === "scissors"){
        return "You won!"
    } else if(playerChoice === "PAPER" && computer === "rock"){
        return "You won!"
    } else if(playerChoice === "PAPER" && computer === "scissors"){
        return "You lose"
    } else if (playerChoice === "SCISSORS" && computer === "rock"){
        return "You lose"
    } else if (playerChoice === "SCISSORS" && computer === "paper"){
        return "You won!"
    } else if (playerChoice === computer){
        return "Tie";
    }
    
}

let yourScore = 0;
let computerScore = 0;
function game(){
    for(let i = 0; i < 5; i++){
        const playerSelection = getPlayerSelection()
        const computerSelection = getComputerChoice()
        console.log(playerSelection, computerSelection)
        const func = play(playerSelection, computerSelection)
        console.log(func);
        if (func === "You won!"){
            yourScore = yourScore + 1;
        } else if(func === "You lose"){
            computerScore = computerScore + 1
        }
        console.log(yourScore, computerScore)
        
    }
        if(yourScore > computerScore){
            console.log("You are the winner!")
        } else if (yourScore < computerScore){
            console.log("Game Over")
        } else {console.log("Tie")}
    
}
game();