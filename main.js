var kelvin = 293;
// The forcast today is 293 Kelvin

var celcius = kelvin - 273;
// Convert Kelvin to Celcius

var fahrenheit = celcius * (9 / 5) + 32;
// Convert Celcius to Fahrenheit

var fahrenheit = Math.floor(fahrenheit);
// Round down the fahrenheit temperature

console.log(
  "The " + "temperature " + "is " + fahrenheit + " degrees " + "Fahrenheit."
);
