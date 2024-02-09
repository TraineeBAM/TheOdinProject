//An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

function analyzeArray(array){
    if(array.length === 0){
        let result = {
            average: 0,
            min: 0,
            max: 0,
            length: 0,
        }
        return result;
    } else{
        let result = {
            average : 0,
            min : array[0],
            max : array[0],
            length : array.length,
        }    
        for (let i = 0; i < array.length; i++) {
            result.average += array[i]
            if(array[i] < result.min){
                result.min = array[i]
            } if(array[i] > result.max){
                result.max = array[i]
            }
        } 
        result.average = result.average / array.length;
        
        return result
}}

module.exports = analyzeArray