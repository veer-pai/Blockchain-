let coins = ["quarter", "dime", "nickel", "penny"];
let num = [30, 40, 20, 5];
let ans = 12.55;

function quarterToDollar(a) {
    return a * 25;
}

function dimeToDollar(a) {
    return a * 10;
}

function nickelToDollar(a) {
    return a * 5;
}

function pennyToDollar(a) {
    return a * 1;
}

function centsToDollar(a) {
    return a / 100;
}

let outcome = 0;

for (let i = 0; i < coins.length; i++) {
    switch (coins[i]) {
        case "quarter":
            outcome += quarterToDollar(num[i]);
            break;
        case "dime":
            outcome += dimeToDollar(num[i]);
            break;
        case "nickel":
            outcome += nickelToDollar(num[i]);
            break;
        case "penny":
            outcome += pennyToDollar(num[i]);
            break;
        default:
            break;
    }
}

let an = centsToDollar(outcome);

console.log(an);

if (an === ans) {
    console.log(true);
} else {
    console.log(false);
}