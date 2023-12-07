const removeFromArray = function(input, ...exclude) {
    const newArray = [];
    input.forEach((item) => {
        if (!exclude.includes(item)){
            newArray.push(item);
        }
    });
    return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
