// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. 
// Each of these functions should take two numbers and return the correct calculation.



const add = (a, b) => {
    return a + b
}

const subtract = (a, b) => {
    return a - b
}

const divide = (a, b) => {
    return a / b
}

const multiply = (a, b) => {
    return a * b
}

const calculator = {
    add,
    subtract,
    divide,
    multiply
};



module.exports = calculator;