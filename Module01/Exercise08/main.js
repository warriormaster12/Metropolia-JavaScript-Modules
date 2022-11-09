'use strict'

const startYear = parseInt(prompt("choose starting year:"));
const endYear = parseInt(prompt("choose ending year:"))

let ul=document.getElementById("list");

function leapYear(input) {
    if ( input % 4 == 0) {
        if ( input % 100 == 0) {
            if( input % 400 == 0) {
                return true;
            }
            else{
                return false;
            }
        }
        else {
            return true;
        }
    }
    else{
        return false;
    }
}

for(let i = startYear; i <= endYear; i++) {
    var li= document.createElement('li');
    if (leapYear(i)) {
        li.appendChild(document.createTextNode(i +' ,'+'leap year.'));
    }
    else {
        li.appendChild(document.createTextNode(i));
    }
    ul.appendChild(li);

}



