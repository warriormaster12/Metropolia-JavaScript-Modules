'use strict';

const elements = ["First element","Second element","Third element"];

let ul=document.getElementById("target");
for(let element of elements) {
    let li=document.createElement('li');
    li.appendChild(document.createTextNode(element));
    ul.appendChild(li);
}
