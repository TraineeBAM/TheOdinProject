function reverseString(string){
    let stringArray = string.split('')
    let newString = ''
    for (let i = stringArray.length-1; i >= 0; i--) {
        newString += (stringArray[i])
    }
    return newString;
}

module.exports = reverseString