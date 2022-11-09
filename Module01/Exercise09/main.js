'use strict'

const promptResult = parseInt(prompt("type an integer"));


function primeNumber(input) {
    for(let i = 2, s = Math.sqrt(input); i <=s; i++) {
        if(input % i === 0) return false; 

    }
    return input > 1;
}

 
if(!primeNumber(promptResult)) {
    document.querySelector("#result").innerHTML = 'not a primenumber: ' + promptResult;
}
else {
    document.querySelector("#result").innerHTML = 'a prime number: ' + promptResult;
}


