'use strict';


const operation = document.getElementById("operation");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const calculate = document.getElementById("start");

let operator = '';
let num1 = 0;
let num2 = 0;
let result = document.getElementById("result");


for(let option of operation.childNodes) {
    option.addEventListener('click', function(evt) {
        operator = evt.currentTarget.value;
    });
}

['change', 'focusout'].forEach(function(e){
    input1.addEventListener(e, function(evt) {
        num1 = parseInt(evt.currentTarget.value);
    });
    input2.addEventListener(e, function(evt) {
        num2 = parseInt(evt.currentTarget.value);
    });
})

calculate.addEventListener('click', function(evt) {
    switch (operator) {
        case 'add':
            result.textContent = num1 + num2;
            break;
        case 'multi':
            result.textContent = num1 * num2;
            break;
        case 'sub':
            result.textContent = num1 - num2;
            break;
        case 'div':
            result.textContent = num1/num2;
            break;
        default:
            result.textContent = num1 + num2;
            break;
    }
})

