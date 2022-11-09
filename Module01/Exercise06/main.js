'use strict'


if (confirm("should I calculate the square root")){

    const resultPromt = parseInt(prompt("select an integer: "));
    const result = Math.sqrt(resultPromt);
    if (result >= 0) {
        document.querySelector('#result').innerHTML = 'sqrt: ' + result;
    }
    else{
        document.querySelector('#result').innerHTML = "The square root of a negative number is not defined";
    }
}
else {
    document.querySelector('#result').innerHTML = "The square root is not calculated.";
}



