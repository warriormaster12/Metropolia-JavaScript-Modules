'use strict'

const list = [2,4,7];

const outputList = [];


function even(input, output) {
    for(let item of input) {
        if(item % 2 == 0){
            output.push(item);
        }
    }
} 

even(list, outputList);
console.log(list);
console.log(outputList);