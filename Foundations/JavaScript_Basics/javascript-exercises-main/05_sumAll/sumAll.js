const sumAll = function(a, b) {
    if(a < 0 || b <0) return "ERROR";
    if(a > b) {([a,b] = [b,a])};
    if(Number. isInteger(a) != true) return "ERROR";
    if(Number. isInteger(b) != true) return "ERROR";
    let newSum = [];
    for(i = a ; i <= b; i++){
        newSum.push(i);
    }
    let sum = 0;
    for (let i = 0; i < newSum.length; i++){
        sum += newSum[i];
    }
    return sum;
}




// Do not edit below this line
module.exports = sumAll;
