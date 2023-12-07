const reverseString = function(input) {
    let reversedString = "";
    const count = input.length;

    for (let i = count - 1; i >= 0; i--){
        reversedString += input[i];
    }

    return reversedString;
}




// Do not edit below this line
module.exports = reverseString;
