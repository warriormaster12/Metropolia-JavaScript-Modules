'use strict';

const input = document.getElementById('calculation');
const calculate = document.getElementById('start');
const result = document.getElementById('result');

let inputArr = [];
let mathOperator = "";
let output = 0.0;

['change', 'focusout'].forEach(function(e){
    input.addEventListener(e, function(evt) {
        if (evt.currentTarget.value.includes('+')){
            inputArr = evt.currentTarget.value.split('+');
            mathOperator = "+";
        }
        else if (evt.currentTarget.value.includes('-')){
            inputArr = evt.currentTarget.value.split('-');
            mathOperator = "-";
        }
        else if (evt.currentTarget.value.includes('*')){
            inputArr = evt.currentTarget.value.split('*');
            mathOperator = "*";
        }
        else if (evt.currentTarget.value.includes('/')) {
            inputArr = evt.currentTarget.value.split('/');
            mathOperator = "/";
        }
        else {

        }

        console.log(inputArr);
    });
})

calculate.addEventListener('click', function(evt){
    switch (mathOperator) {
        case '+':
            output = parseFloat(inputArr[0]);
            for(let i = 1; i < inputArr.length; i++) {
                output += parseFloat(inputArr[i]);
            }
            result.textContent = output;
            break;
        case '-':
            output = parseFloat(inputArr[0]);
            for(let i = 1; i < inputArr.length; i++) {
                output -= parseFloat(inputArr[i]);
            }
            result.textContent = output;
            break;
        case '*':
            output = parseFloat(inputArr[0]);
            for(let i = 1; i < inputArr.length; i++) {
                output *= parseFloat(inputArr[i]);
            }
            result.textContent = output;
            break;
        case '/':
            output = parseFloat(inputArr[0]);
            for(let i = 1; i < inputArr.length; i++) {
                output /= parseFloat(inputArr[i]);
            }
            result.textContent = output;
            break;
    }
})