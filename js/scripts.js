//TEMPERATURES

function convertToCelsius(number, unit){
  if(unit === "Fahrenheit") {
  return ((number - 32) * 0.5556);
  }
  else if (unit === "Kelvin") {
  return (number - 273.15);
  }
}

function convertToFahrenheit(number, unit){
  if(unit === "Celsius") {
    return ((number * 1.8) + 32);
  }
  else if(unit === "Kelvin") {
    return ((number - 273) * (9/5) + 32);
  }
}

function convertToKelvin(number, unit){
  if(unit === "Celsius") {
    return (number + 273.15);
  }
  else if(unit === "Fahrenheit") {
    return ((number + 459.67) * (5/9));
  }
}

//LIQUID VOLUME

// var gallon = parseInt(prompt("Enter gallons"));
//
// var liter = parseInt(prompt("Enter liters"));

function gallonstoLiters(gallon){
  return gallon / 0.26417;
}

function litersToGallons(liter){
  return liter * 0.26417;

}


$(document).ready(function() {
  $("form")
})
