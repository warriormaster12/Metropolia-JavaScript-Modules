'use strict'

let sum = 0; 
let product = 1;
let average = 0; 

const intArray = [];

for(let i=0; i < 3; i++) {
    intArray.push(parseInt(prompt("write an integer")));
}

for(let i=0; i<intArray.length; i++){
    sum += intArray[i];
    product *= intArray[i];
}
average = sum/intArray.length;
document.querySelector('#sum').innerHTML = 'sum: ' + sum;
document.querySelector('#product').innerHTML = 'product: ' + product;
document.querySelector('#average').innerHTML = 'average: ' + average;