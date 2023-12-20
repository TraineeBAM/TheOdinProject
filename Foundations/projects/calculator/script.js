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
const screen = document.querySelector('.screen');
const userInput = document.createElement('div');
userInput.classList.add('userInput')
userInput.textContent = "";

// Define variables to store the current input values and the last operation
let valueA = "";
let valueB = "";
let operator = "";

// Function to perform the calculation based on operator
const calculate = (a, o, b) => {
    a = parseFloat(a);
    b = parseFloat(b);

    if (o === "+") {
        return a + b;
    } else if (o === "-") {
        return a - b;
    } else if (o === "*") {
        return a * b;
    } else if (o === "/") {
        if (b !== 0) {
            return a / b;
        } else {
            return "Game Over";
        }
    }
    return NaN; // Invalid operation
};

// Function to handle intermediate calculation
const evaluateIntermediate = () => {
    if (valueA && operator && valueB) {
        const result = calculate(valueA, operator, valueB);
        valueA = result.toString();
        valueB = "";
        operator = "";
        userInput.textContent = result;
    }
};

// Event listeners for button clicks
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = button.textContent;

        if (buttonText === "Clear") {
            valueA = "";
            valueB = "";
            operator = "";
            userInput.textContent = "";
        } else if (buttonText === "Delete") {
            userInput.textContent = userInput.textContent.slice(0, -1);
        } else if (["+", "-", "*", "/"].includes(buttonText)) {
            const lastChar = userInput.textContent[userInput.textContent.length - 1];
            if (["+", "-", "*", "/"].includes(lastChar)) {
                return;
            }
            if (valueA && operator && valueB) {
                evaluateIntermediate();
            }
            operator = buttonText;
            userInput.textContent += buttonText;
        } else if (buttonText === "=") {
            evaluateIntermediate();
        } else if (buttonText === ".") {
            const lastNumIndex = userInput.textContent.split(/[\+\-\*\/]/).pop().lastIndexOf('.');

            // Check if the last entered number already contains a decimal point
            if (lastNumIndex !== -1) {
                return; // Do not add multiple decimal points in a number
            }
            userInput.textContent += buttonText;
        }
        
        
          else {
            userInput.textContent += buttonText;

            if (!operator) {
                valueA += buttonText;
            } else {
                valueB += buttonText;
            }
        }
    });
});
screen.appendChild(userInput)

// const operate = function(a, o, b){
//     a = parseFloat(a);
//     b = parseFloat(b);
    
//     if(o === "+"){
//         return a + b; 
//     } else if(o === "-"){
//         return a - b;
//     } else if (o === "*"){
//         return a * b;
//     } else if (o === "/"){
//         return a / b;
//     }
//     console.log(operate);
// }

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
//             const [a, a_decimal, o, b, b_decimal] = userInput.textContent.match(/(\d+(\.\d+)?|\.\d+)(\D)?(\d+(\.\d+)?|\.\d+)/).slice(1);
//             console.log([a,o,b])
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

// const history = document.querySelector('.screen-history');
// const current = document.querySelector('.screen-current')
// const valueA = document.createElement('div');
// userInput.classList.add('userInput')
// userInput.textContent = "";
// let valueA = "";
// let valueB = "";
// let operator = "";
// let result = "";
// buttons.forEach(button => {
//     button.addEventListener('click', function(){
//         if(button.textContent === "Clear"){
//             userInput.textContent = "";
//             valueA = "";
//             valueB = "";
//             operator = "";
//         } else if(button.textContent === "Delete"){
//             userInput.textContent = userInput.textContent.slice(0, -1);
//         } else if(valueA === "" && (button.textContent === "*" || button.textContent === "/" || button.textContent === "-" || button.textContent === "+" || button.textContent === "=")){
//             operator = button.textContent;
//             console.log(operator)
//             valueA = userInput.textContent;
//             console.log(valueA);
//             userInput.textContent = "";
//         } else if(valueA !== "" && (button.textContent === "*" || button.textContent === "/" || button.textContent === "-" || button.textContent === "+" || button.textContent === "=")) {
//             valueB = userInput.textContent;
//             console.log(valueB);
//             userInput.textContent = "";
//             result = operate(valueA, operator, valueB);
//             userInput.textContent = result;
//             console.log("result equals ", result);
//             valueA = result;
//             valueB = "";
//             userInput.textContent = "";
//         }
//         else {
//             userInput.textContent += button.textContent;
//         }
//         screen.appendChild(userInput);
//     });
// });
// screen.appendChild(userInput)