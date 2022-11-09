'use strict'

const diceNumber = parseInt(prompt("type number of dice"));
const eyeNumber = parseInt(prompt("sum of the eye"));

let eyeNumberCount = 0;

function random(min, max) {
    return Math.floor(Math.random()*max)+min;
}

for(let i = 0; i < 10000; i++) {
    let sum = 0;
    for (let j = 0; j < diceNumber; j++) {
        sum += random(1, 6);
    }
    if(sum == eyeNumber) {
        eyeNumberCount++;
    }
}

const result = ((eyeNumberCount / 10000)*100).toFixed(2);
document.querySelector("#result").innerHTML = 'Probability to get sum ' + eyeNumber + ' with ' + diceNumber + ' dice is ' + result+'%';


