function getComputerChoice() {
    let value = Math.floor(Math.random() * 3) + 1;
    if (value === 1){
        console.log("Rock");
        } else if (value === 2){
        console.log("Paper");
        } else {
        console.log("Scissors");
        }
    }
getComputerChoice();
