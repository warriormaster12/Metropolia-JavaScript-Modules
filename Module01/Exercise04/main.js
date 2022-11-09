'use strict'

const rooms = ["Daredevil", "Slytherin", "Hufflepuff", "Ravenclaw"];

function random(min, max) {
    return Math.floor(Math.random()*max)+min;
}

for(let i = 0; i < 20; i++){
    console.log(random(0, rooms.length));
}

console.log(rooms);

const studentName = prompt("what's your name?");
document.querySelector('#room').innerHTML = studentName + ', You are a ' + rooms[random(0, rooms.length)];