function getComputerChoice() {
    let value = Math.floor(Math.random() * 3) + 1;
    if (value === 1){
        return "rock";
        } else if (value === 2){
        return "paper";
        } else {
        return "scissors";
        }
    }

function playRound(playerSelection, computerSelection){
    console.log("You have chosen" + " " + playerSelection);
    console.log("Your opponent has chosen" + " " + computerSelection);
    let game_result = "";
    if (playerSelection == computerSelection){
        game_result = "Draw - Please try again!";   
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        game_result = "You win!";
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        game_result = "You win!";
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        game_result = "You win!";
    } else {
        game_result = "You lose!";
    }
    return game_result;
}

function game(choice){
        let playerSelection = choice
        let computerSelection = getComputerChoice();
        const game_result = playRound(playerSelection, computerSelection);
        console.log(game_result);
        const computerChoiceElement = document.querySelector('.computer_choice');
        computerChoiceElement.textContent = `Computer selects ${computerSelection}`;
        const gameResultElement = document.querySelector('.game_result');
        gameResultElement.textContent = `${game_result}`;
        if (game_result === "You win!"){
            let currentPlayerScore = parseInt(player_result.textContent) || 0;
            currentPlayerScore += 1;
            player_result.textContent = currentPlayerScore;
            if(currentPlayerScore === 5){
                alert("Player Wins!");
                player_result.textContent = 0;
                computer_result.textContent = 0;
            }
        };
        if (game_result === "You lose!"){
            let currentComputerScore = parseInt(computer_result.textContent) || 0;
            currentComputerScore += 1;
            computer_result.textContent = currentComputerScore;
            if(currentComputerScore === 5){
                alert("Computer Wins!");
                player_result.textContent = 0;
                computer_result.textContent = 0;
            }
        }
}

const body = document.body;
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.backgroundColor = "#D3D3D3"

const heading = document.createElement("h1");
heading.classList.add("heading");
heading.style.display = "flex";
heading.style.fontSize = "75px";
heading.textContent = "Rock, Paper, Scissors!";
heading.style.marginTop = "75px";
heading.style.marginBottom = "75px";
body.appendChild(heading);;

const instructions = document.createElement("div");
instructions.classList.add("instructions");
instructions.style.display = "flex";
instructions.textContent = "Choose your weapon";
instructions.style.fontSize = "50px";
instructions.style.marginBottom = "25px";
body.appendChild(instructions);

const game_content = document.createElement("div");
game_content.classList.add("game");
game_content.style.display = "flex";
game_content.style.gap = "75px";
body.appendChild(game_content);

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "🤘";
rock.style.fontSize = "150px";
rock.style.width = "250px";
rock.style.height = "250px";
rock.addEventListener('click', function() {
    game('rock');
});
game_content.appendChild(rock);

paper.textContent = "📰";
paper.style.fontSize = "150px";
paper.style.width = "250px";
paper.style.height = "250px";
paper.addEventListener('click', function() {
    game('paper');
});
game_content.appendChild(paper);

scissors.textContent = "✂️";
scissors.style.fontSize = "150px";
scissors.style.width = "250px";
scissors.style.height = "250px";
scissors.addEventListener('click', function() {
    game('scissors');
});
game_content.appendChild(scissors);

const computer_choice = document.createElement("div");
computer_choice.classList.add("computer_choice");
computer_choice.style.marginTop = "25px"
computer_choice.style.fontSize = "40px"
body.appendChild(computer_choice);

const gameResult = document.createElement("div");
gameResult.classList.add("game_result");
gameResult.style.marginTop = "25px";
gameResult.style.fontSize = "70px";
body.appendChild(gameResult)


const results_container = document.createElement("div");
results_container.classList.add("results_container");
body.appendChild(results_container);
results_container.style.display = "flex";
results_container.style.flexDirection = "column";
results_container.style.alignItems = "center";
results_container.style.marginTop = "40px";
results_container.style.fontSize = "50px";

const results = document.createElement("div");
results.classList.add("results");
results_container.appendChild(results);
results.style.display = "flex";
results.style.alignItemsItems = "center"
results.style.gap = "150px";

const player_id = document.createElement("p");
player_id.textContent = "Player";
player_id.style.width = "200px";
player_id.style.textAlign = "right";
results.appendChild(player_id);

const player_result = document.createElement("p");
player_result.textContent = "";
player_result.style.width = "200px";
player_result.style.textAlign = "center";
results.appendChild(player_result);

const computer_result = document.createElement("p");
computer_result.textContent = "";
computer_result.style.width = "200px";
computer_result.style.textAlign = "center";
results.appendChild(computer_result);

const computer_id = document.createElement("p");
computer_id.textContent = "Computer";
computer_id.style.width = "200px";
computer_id.style.textAlign = "left";
results.appendChild(computer_id);

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', function(){
        button.style.transition = "transform 0.2s ease-in-out";
        button.style.transform = "scale(1.1)";
    });
    
    button.addEventListener('mouseout', function(){
        button.style.transition = 'transform 0.2s ease-in-out';
        button.style.transform = 'scale(1)';
    });
});