function getRndInterger(min, max) {
    return Math.floor(Math.random() *
(max - min) ) + min;
}
 

const operator = ('either +, -, * or /  ');


const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));
 


let result =('');


if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}


console.log('${number1} ${operator} ${number2} = ${result}');