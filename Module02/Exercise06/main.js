'use strict'

const rollNumbers = [];

function random() {
    return Math.floor(Math.random()*6)+1;
}


while(true) {
    let result = random();
    if(result == 6) {
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