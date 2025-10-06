const Fahrenheit = prompt ("Enter Temperature In Fahrenheit");
function convertToCelsius(Fahrenheit) {
  return (((Fahrenheit - 32) * 5) / 9);
}
function describeTemperature (Fahrenheit) {
const Celsius = convertToCelsius(Fahrenheit);

let description;

if (Temperature < 0) {
    description = "very cold";
}
else if (Temperature < 20){
    description = "cold";
}
else if (Temperature > 30){
    description = "warm";
}
else if (Temperature > 40);{
    description = "hot";
}
else if (Temperature >= 40) {
    description ="very hot"



return `${Fahrenheit} Fahrenheit is ${Celsius} which is ${description}!`;
}

const description = describeTemperature(Fahrenheit)
alert(description)