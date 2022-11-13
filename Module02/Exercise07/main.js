'use strict'

const rollNumbers = [];
const numberOfSides = parseInt(prompt("how many sides do you want your dice to have?"));

function random(max) {
    return Math.floor(Math.random()*max)+1;
}


while(true) {
    let result = random(numberOfSides);
    if(result == numberOfSides) {
        rollNumbers.push(result);
        break;
    }
    rollNumbers.push(result);
}

let ul = document.getElementById('list');
for(let rollNumber of rollNumbers){
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(rollNumber));
    ul.appendChild(li);
}