'use strict'

const list = ["Johnny", "DeeDee", "Joey", "Marky"];


function concat(input) {
    let result = '';
    for(let item of list) {
        result += item;
    }
    return result;
}


document.querySelector('#result').innerHTML = concat(list);