function capitalize(string){
    let first = string.slice(0, 1);
    first = first.toUpperCase();
    let second = string.slice(1);
    second = second.toLowerCase();
    let result = first.concat(second)    
    return result;
}

module.exports = capitalize;