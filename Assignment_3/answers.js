
console.log("---------------------------------------------------");

// 1.

let n = 4;
let string = "";
let count = 1
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i == 0 && j == 0 || i >= j) {
            string += count + " ";
            count++;
        } else {
            string += "  ";
        }
    }
    string += "\n";
}
console.log(string);

console.log("---------------------------------------------------");


// 2.


function replaceAt(str) {
    let s = "";
    for (let i in str) {
        if (i == str.length - 2) {
            s = s + "="
        } else {
            s = s + str[i];
        }
    }
    return s;
}

let armStrong = 153;
let copy = armStrong;
let sum = 0;
let str = "";
while (armStrong != 0) {
    let digit = armStrong % 10;
    let power = Math.pow(digit, 3);
    sum += power;
    str += power + " + "
    armStrong = Math.floor(armStrong / 10);
}
let strr = replaceAt(str);
if (sum == copy) {
    console.log(copy + " || " + strr + sum + " || is an ARMSTRONG number");
} else {
    console.log(copy + " || " + strr + sum + " || is not an ARMSTRONG number");
}

console.log("---------------------------------------------------");


// 3.

function calculateFactorial(digit) {
    let ans = 1;
    while (digit != 0) {
        ans *= digit;
        digit--;
    }
    return ans;
}

let special = 145;
let duplicate = special;
let res = 0;
let st = "";
while (special != 0) {
    let digit = special % 10;
    let facto = calculateFactorial(digit);
    res += facto;
    st += facto + " + "
    special = Math.floor(special / 10);
}
let strrr = replaceAt(st);
if (res == duplicate) {
    console.log(duplicate + " || " + strrr + res + " || is a SPECIAL number");
} else {
    console.log(duplicate + " || " + strrr + res + " || is not a SPECIAL number");
}

console.log("---------------------------------------------------");