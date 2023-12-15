const body = document.body;
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.height = "auto";
body.style.width = "auto";
body.style.backgroundColor = "#D3D3D3";

const title = document.createElement('h1')
title.textContent = "Etch-a-Sketch!";
title.style.textAlign = "center";
title.style.marginBottom = "40px";
title.style.fontSize = "75px";
body.appendChild(title);

const regen = document.createElement('button');
regen.textContent = "Regenerate Grid";
regen.style.textAlign = "center";
regen.style.width = "200px";
regen.style.height = "50px";
regen.style.fontSize = "20px";
regen.style.marginBottom = "40px"
regen.addEventListener('click', function(){
    let userInput = prompt("Please enter grid size")
    if(userInput >= 2 && userInput <= 100){
        generateGrid(userInput);
    }
    else {
        alert("Please enter a value between 2 and 100")
    }
});
body.appendChild(regen);

function generateGrid(size){
    gridContainer.innerHTML = '';

    for(let i = 0 ; i < size; i ++){
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.flexDirection = 'row';

        for(let j = 0 ; j < size ; j ++){
            const square = createSquare();
            row.appendChild(square);
        }
        gridContainer.appendChild(row);
    }
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', function(){
            square.style.transition = 'background-color 0.2s ease-in-out'
            square.style.backgroundColor = "#77C3EC";
        });
    });
}

const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
body.appendChild(gridContainer);

// Function to create a single square with a border
function createSquare() {
    const square = document.createElement('div');
    square.classList.add("square")
    square.style.width = '40px';
    square.style.height = '40px';
    square.style.border = '1px solid black';
    return square;
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', function(){
        button.style.transition = "transform 0.2s ease-in-out";
        button.style.transform = "scale(1.05)";
    });
    
    button.addEventListener('mouseout', function(){
        button.style.transition = 'transform 0.2s ease-in-out';
        button.style.transform = 'scale(1)';
    });
});
