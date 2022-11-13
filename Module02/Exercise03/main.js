'use strict'

const dogNames = [];

let ul=document.getElementById("list");
for(let i = 0; i < 6; i++) {
    dogNames.push(prompt("type a dog's name: " + (i+1)+"/6"));
}
dogNames.sort();
dogNames.reverse();
for(let i = 0; i < dogNames.length; i++) {
    let li=document.createElement('li');
    li.appendChild(document.createTextNode(dogNames[i]));
    ul.appendChild(li);
}
