'use strict'

const numberList = [];

let ul=document.getElementById("list");
for(let i = 0; i < 5; i++) {
    numberList.push(parseInt(prompt("type an integer: " + (i+1)+"/5")));
    let li=document.createElement('li');
    li.appendChild(document.createTextNode(numberList[i]));
    ul.appendChild(li);
}

ul=document.getElementById("reverse-list");
for(let i = numberList.length - 1; i > -1; i--) {
    let li=document.createElement('li');
    li.appendChild(document.createTextNode(numberList[i]));
    ul.appendChild(li);
}
