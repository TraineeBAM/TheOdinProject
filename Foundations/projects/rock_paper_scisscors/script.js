function getComputerChoice() {
    let value = Math.floor(Math.random() * 3) + 1;
    if (value === 1){
        return "Rock";
        } else if (value === 2){
        return "Paper";
        } else {
        return "Scissors";
        }
    }

function playRound(playerSelection, computerSelection){
    let userLower = playerSelection.toLowerCase();
    if (userLower != "rock" || "paper" || "scissors"){
        alert("Please enter either Rock, Paper or Scissors");
    }
    console.log("You have chosen" + " " + userLower);
    let compLower = computerSelection.toLowerCase();
    console.log("Your opponent has chosen" + " " + compLower);
    if (userLower == compLower){
        return "Draw - Please try again!";   
    } else if (userLower == "paper" && compLower == "rock"){
        return "You win!";
    } else if (userLower == "paper" && compLower == "scissors"){
        return "You lose!";
    } else if (userLower == "rock" && compLower == "paper"){
        return "You lose!";
    } else if (userLower == "rock" && compLower == "scissors"){
        return "You win!";
    } else if (userLower == "paper" && compLower == "rock"){
        return "You win!";
    } else {
        return "You lose!";
    }
}

const playerSelection = prompt("Make your selection by typing rock, paper or scissors");

let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));