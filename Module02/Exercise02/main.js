'use strict'

const numParticipants = parseInt(prompt("how many participants?"));
const particpantNames = [];


let ol=document.getElementById("ordered-list");
for(let i = 0; i < numParticipants; i++) {
    particpantNames.push(prompt("type a name of participant: " + (i+1)+"/"+numParticipants));
}
particpantNames.sort()
for(let i = 0; i < particpantNames.length; i++) {
    let li=document.createElement('li');
    li.appendChild(document.createTextNode(particpantNames[i]));
    ol.appendChild(li);
}
