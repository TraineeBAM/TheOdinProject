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

// Creating a 16x16 grid
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.flexDirection = 'row';
    
    for (let j = 0; j < 16; j++) {
        const square = createSquare();
        row.appendChild(square);
    }

    gridContainer.appendChild(row);
}

const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('mouseover', function(){
        square.style.backgroundColor = "#77C3EC";
    });
});
