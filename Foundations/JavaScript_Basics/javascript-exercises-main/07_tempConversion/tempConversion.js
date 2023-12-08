const convertToCelsius = function(f) {
    let fahrenheit = (f - 32) * 5/9;
    let roundedf = Math.round(fahrenheit * 10) / 10;

    return roundedf;
};

const convertToFahrenheit = function(c) {
  let celcius = (c * 9/5) + 32
  let roundedc = Math.round(celcius * 10) /10

  return roundedc;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
