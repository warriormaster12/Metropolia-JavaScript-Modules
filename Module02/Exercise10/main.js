'use strict'

const numCands = parseInt(prompt("number of canditates?"));
const candidates= [];


for(let i = 0; i < numCands; i++) {
    candidates.push({name:prompt("Name for candidate " + (i+1)), votes:0})
}

const numVoters = parseInt(prompt("how many voters?"));

for(let i = 0; i < numVoters; i++) {
    const vote = prompt("who do you vote for?");
    for(let candidate of candidates) {
        if (candidate.name === vote){
            candidate.votes++;
            break;
        }
    }
}
candidates.sort((a, b) => {
    if (b.votes == a.votes){
        return b.name > a.name;
    }
    return b.votes > a.votes;
});

console.log("the winner is "+candidates[0].name + " with "+ candidates[0].votes + " votes.");
console.log("results: ");
for(let current of candidates) {
    console.log(current.name+": "+current.votes+" votes");
}