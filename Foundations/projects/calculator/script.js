const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', function(){
        button.style.transition = "transform 0.2s ease-in-out";
        button.style.transform = "scale(0.95)";
    });
    
    button.addEventListener('mouseout', function(){
        button.style.transition = 'transform 0.2s ease-in-out';
        button.style.transform = 'scale(1)';
    });
});

const operate = function(a, o, b){
    a = parseFloat(a);
    b = parseFloat(b);
    
    if(o === "+"){
        return a + b; 
    } else if(o === "-"){
        return a - b;
    } else if (o === "*"){
        return a * b;
    } else if (o === "/"){
        return a / b;
    }
    console.log(operate);
}

// const screen = document.querySelector('.screen');
// const userInput = document.createElement('div');
// userInput.classList.add('userInput')
// userInput.textContent = "";
// buttons.forEach(button => {
//     button.addEventListener('click', function(){
//         if(button.textContent === "Clear"){
//             userInput.textContent = "";
//         } else if(button.textContent === "Delete"){
//             userInput.textContent = userInput.textContent.slice(0, -1);
//         } else if(button.textContent === "="){
//             const [a, o, b] = userInput.textContent.match(/(\d+)(\D)(\d+)/).slice(1);
//             const numA = parseFloat(a);
//             const numB = parseFloat(b);
//             const result = operate(numA, o, numB);
//             if(o === "/" && numB === 0){
//                 alert('You cannot divide by zero! What are you trying to pull here!?');
//                 return userInput === ""
//             }
//             userInput.textContent = result;
//         }
//         else {
//             userInput.textContent += button.textContent;
//         }
//         screen.appendChild(userInput);
//     });
// });
// screen.appendChild(userInput)

const screen = document.querySelector('.screen');
const userInput = document.createElement('div');
userInput.classList.add('userInput')
userInput.textContent = "";
let valueA = "";
let valueB = "";
let operator = "";
let result = "";
buttons.forEach(button => {
    button.addEventListener('click', function(){
        if(button.textContent === "Clear"){
            userInput.textContent = "";
            valueA = "";
            valueB = "";
            operator = "";
        } else if(button.textContent === "Delete"){
            userInput.textContent = userInput.textContent.slice(0, -1);
        } else if(valueA === "" && (button.textContent === "*" || button.textContent === "/" || button.textContent === "-" || button.textContent === "+" || button.textContent === "=")){
            operator = button.textContent;
            console.log(operator)
            valueA = userInput.textContent;
            console.log(valueA);
            userInput.textContent = "";
        } else if(valueA !== "" && (button.textContent === "*" || button.textContent === "/" || button.textContent === "-" || button.textContent === "+" || button.textContent === "=")) {
            valueB = userInput.textContent;
            console.log(valueB);
            userInput.textContent = "";
            result = operate(valueA, operator, valueB);
            userInput.textContent = result;
            console.log("result equals ", result);
            valueA = result;
            valueB = "";
            userInput.textContent = "";
        }
        else {
            userInput.textContent += button.textContent;
        }
        screen.appendChild(userInput);
    });
});
screen.appendChild(userInput)