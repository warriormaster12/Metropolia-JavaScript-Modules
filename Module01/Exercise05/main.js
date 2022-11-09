'use strict'

const year = parseInt(prompt("enter a year:"));

if ( year % 4 == 0) {
    if ( year % 100 == 0) {
        if( year % 400 == 0) {
            document.querySelector('#year').innerHTML = 'year ' + year +' is a leap year';
        }
        else{
            document.querySelector('#year').innerHTML = 'year ' + year +' is not a leap year';
        }
    }
    else {
        document.querySelector('#year').innerHTML = 'year ' + year +' is a leap year';
    }
}
else{
    document.querySelector('#year').innerHTML = 'year ' + year +' is not a leap year';
}


