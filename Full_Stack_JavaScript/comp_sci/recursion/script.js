// Question 1: Sum all numbers
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

function sumRange(n){
    if(n <= 0){
        return n
    }
    return n + sumRange(n-1);
}

// Question 2: Power function
// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

// Sample:

// console.log(power(2, 4)); // 16
// console.log(power(2, 3)); // 8
// console.log(power(2, 2)); // 4 
// console.log(power(2, 1)); // 2
// console.log(power(2, 0)); // 1

function power(n, x){
    if(x <=0){
        return 1
    }
    return n * power(n, x - 1)
}

// Question 3: Calculate factorial
// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

// Sample:

// factorial(5); // 5 * 4 * 3 * 2 * 1 === 120

function factorial(n){
    if (n <=0){
        return 1
    }
    return n * factorial(n-1);
}