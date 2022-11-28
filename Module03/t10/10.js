'use strict';

const form = document.getElementById('source');
const target = document.getElementById('target');

const submit= document.querySelector('input[type="submit"]');

let firstname = "";
let lastname = "";
let output = "";



for(let child of form.childNodes) {
    if(child.name == "firstname"){
        ['change', 'focusout'].forEach(function(e){
            child.addEventListener(e, function(evt) {
                if (evt.currentTarget.value != child.name) {
                    firstname = evt.currentTarget.value;
                } 
            });
        }); 
    }
    if(child.name == "lastname"){
        ['change', 'focusout'].forEach(function(e){
            child.addEventListener(e, function(evt) {
                if (evt.currentTarget.value != child.name) {
                    lastname = evt.currentTarget.value;
                } 
            });
        }); 
    }
}

function toSubmit(){
    
    return false;
}

submit.addEventListener('click', function(evt) {
    evt.preventDefault();
    if(firstname !="" && lastname != "") {
        target.textContent = `Your name is ${firstname} ${lastname}`;
    }
    else {
        target.textContent = "";
    }
});

