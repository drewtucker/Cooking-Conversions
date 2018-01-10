

var fahrenheit = parseInt(prompt("Enter degrees in farenheit:"));

var celcius = parseInt(prompt("Enter degrees in Celcius:"));

var convertToCelcius = function(fahrenheit) {
  return ((fahrenheit - 32) * .5556);
}

 alert(convertToCelcius(fahrenheit, 32, .5556));


var convertToFahrenheit = function(celcius) {
	return ((celcius * 1.8) + 32);
}

alert(convertToFahrenheit(celcius, 1.8, 32));


//GALLONS TO LITERS AND GALLONS TO LITERS//

var gallon = parseInt(prompt("Enter gallons"));

var liter = parseInt(prompt("Enter liters"));

var gallonsToLiters = function(gallon) {
	return gallon / 0.26417;
}

var litersToGallons = function(liter) {
	return liter * 0.26417;
}

alert(gallonsToLiters(gallon, 0.26417));

alert(litersToGallons(liter, 0.26417));
