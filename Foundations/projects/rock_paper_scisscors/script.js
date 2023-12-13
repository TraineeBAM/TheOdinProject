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
    if (playerSelection == computerSelection){
        return "Draw - Please try again!";   
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You win!";
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose!";
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        return "You lose!";
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You win!";
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You win!";
    } else {
        return "You lose!";
    }
}

function game(choice){
        let playerSelection = choice
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
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
heading.style.marginTop = "100px";
heading.style.marginBottom = "100px";
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

rock.textContent = "🪨";
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


const results_container = document.createElement("div");
results_container.classList.add("results_container");
body.appendChild(results_container);
results_container.style.display = "flex"
results_container.style.flexDirection = "column"
results_container.style.alignItems = "center"
results_container.style.marginTop = "40px"
results_container.textContent = "Results";
results_container.style.fontSize = "50px";

const results = document.createElement("div");
results.classList.add("results");
results_container.appendChild(results);
results.style.display = "flex";
results.style.gap = "200px";

const computer_result = document.createElement("p");
computer_result.textContent = "000";
results.appendChild(computer_result);

const player_result = document.createElement("p");
player_result.textContent = "000";
results.appendChild(player_result);

const history = document.createElement("div");
history.classList.add("history");
history.textContent = "History";
history.style.fontSize = "30px";
body.appendChild(history);

const history_entries = document.createElement("div");
history_entries.classList.add("history_entries");
history.appendChild(history_entries);