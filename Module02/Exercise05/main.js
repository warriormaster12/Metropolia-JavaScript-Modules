'use strict'

const numbers = [];
let currentNumber = -1;

while(currentNumber != 0){
    currentNumber = parseFloat(prompt("type a float"));
    if (currentNumber != 0){
        if(numbers.length > 0){
            let duplicateFound = false;
            for(let i = 0; i < numbers.length; i++){
                if(currentNumber == numbers[i]){
                    duplicateFound = true;
                }
            }
            if(!duplicateFound){
                numbers.push(currentNumber);
            }else {
                break;
            }
        }else {
            numbers.push(currentNumber);
        }
    }
}
numbers.sort((a,b) => a > b);
console.log(numbers);
