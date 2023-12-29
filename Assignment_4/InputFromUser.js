
const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter a number : "))

console.log(typeof (n), n);

function getMatchStickNumber(n) {
    if (n == 1) {
        return 6;
    } else {
        return (n * 6 - (n - 1));
    }
}

let ans = getMatchStickNumber(n);
console.log(`For ${n} step(s), you would be needed ${ans} match sticks`);