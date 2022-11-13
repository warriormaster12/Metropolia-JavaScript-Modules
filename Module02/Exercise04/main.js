'use strict'

const numbers = [];
let currentNumber = -1;

while(currentNumber != 0){
    currentNumber = parseFloat(prompt("type a float"));
    if (currentNumber != 0){
        numbers.push(currentNumber);
    }
}
numbers.sort((a,b) => a < b);
console.log(numbers);
