const findTheOldest = function(array) {
        let oldestAge = 0;
        let name = "";
        for(let i = 0; i < array.length; i++){
            const birthYear = array[i].yearOfBirth;
            const deathYear = array[i].yearOfDeath || new Date().getFullYear();
            let age = deathYear ? deathYear - birthYear : new Date().getFullYear() - birthYear;
            console.log(age);
            if(age > oldestAge){
                oldestAge = age;
                name = array[i].name;
            }
        }
        return name;
};

// Do not edit below this line
module.exports = findTheOldest;
