const palindromes = function(input) {
    const noSpecialChars = input.replace(/[^a-zA-Z0-9]/g, "");
    const lowerCase = noSpecialChars.toLowerCase();
    const reversedString = lowerCase.split("").reverse().join("");
    return lowerCase === reversedString;
  };

// Do not edit below this line
module.exports = palindromes;
