//1.    Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. 
//      Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

const fibonacci = require("../../../Foundations/JavaScript_Basics/javascript-exercises-main/10_fibonacci/fibonacci");

function fibs(n){
    const fibsArray = [];
    let value = 0
    for (let i = 0; i < n; i++) {
        if(i === 0){
            fibsArray.push(value);
            value = value + 1
        }else if(i === 1){
            fibsArray.push(value);
            value = value + fibsArray[i - 1]
        }else{
            value = fibsArray[i - 1] + fibsArray[i - 2]
            fibsArray.push(value);
        }};
    console.log(fibsArray)
    }

//2.    Now write another function fibsRec which solves the same problem recursively.

function fibsRec(n){
    if(n <= 1){
        return n
    } else {
        return (fibsRec(n-1)+fibsRec(n-2))
    }
    
}