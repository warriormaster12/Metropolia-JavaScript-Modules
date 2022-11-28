'use strict';

const trigger = document.getElementById("trigger");
const target = document.getElementById("target");

trigger.addEventListener('mouseover', function(evt) {
    target.src = 'img/picB.jpg'
});

trigger.addEventListener('mouseout', function(evt) {
    target.src = 'img/picA.jpg'
});