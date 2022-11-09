'use strict'

function random(min, max) {
    return Math.floor(Math.random()*max)+min;
}

const numDice = parseInt(prompt("choose amount of dice:"));
let numSum = 0;

for(let i = 0; i < numDice; i++) {
    numSum += random(1, 6);
}


document.querySelector('#result').innerHTML = 'dice sum: '+ numSum;

