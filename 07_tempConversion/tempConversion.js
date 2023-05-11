const convertToCelsius = function(F) {
  let num = ((F - 32) * 5/9).toFixed(1)
  return Math.round(num * 10) / 10
};

const convertToFahrenheit = function(C) {
  let num = (C * 9/5 + 32).toFixed(1)
  return Math.round(num * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
