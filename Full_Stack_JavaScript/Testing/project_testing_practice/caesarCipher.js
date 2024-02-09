// A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”. 

const cipherArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function caesarCipher(string, key) {
    if (typeof string !== 'string' || typeof key !== 'number') {
        throw new Error('Please ensure you enter a string, followed by a number');
    }
    let formattedString = string.toLowerCase();
    let stringArray = formattedString.split('');
    let finalString = '';

    for (let i = 0; i < stringArray.length; i++) {
        let char = stringArray[i];
        if (cipherArray.includes(char)) {
            let index = (cipherArray.indexOf(char) + key) % 26;
            index = index < 0 ? (index % 26) + 26 : index;
            finalString += cipherArray[index];
        } else {
            finalString += char;
        }
    }
    return finalString.toUpperCase();
}


module.exports = caesarCipher