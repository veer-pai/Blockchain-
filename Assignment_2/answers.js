
console.log("---------------------------------------------------");


// 1.

let a = 1;
let b = 2;
let c = 3;
if (a == b && b == c && c == a) {
    console.log("Equilateral Triangle");
} else if (a == b || b == c || a == c) {
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}
console.log("---------------------------------------------------");

// 2.

let marks = 91;
switch (true) {

    case marks > 90 && marks <= 100:
        console.log("Grade : S");
        break;

    case marks > 80 && marks <= 90:
        console.log("Grade : A");
        break;

    case marks > 70 && marks <= 80:
        console.log("Grade : B");
        break;

    case marks > 60 && marks <= 70:
        console.log("Grade : C");
        break;

    case marks > 50 && marks <= 60:
        console.log("Grade : D");
        break;

    case marks > 40 && marks <= 50:
        console.log("Grade : E");
        break;

    case marks >= 0 && marks <= 40:
        console.log("Student has Failed");
        break;

    default:
        console.log("Invalid Marks");
        break;
}
console.log("---------------------------------------------------");

// 3.

let three = 3;
let five = 5;
let sum = 0;
while (three <= 1000) {
    sum += three;
    three += 3;
}
while (five <= 1000) {
    sum += five;
    five += 5;
}
console.log("Sum of the multiples of 3 and 5 under 1000 : " + sum);
console.log("---------------------------------------------------");

// 4.

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

factorialsOfPrimeNumbers = (a, b) => {

    for (let i = a; i <= b; i++) {
        var strr = "";
        let prime = 0;
        let facto = 1;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                break
            }
            if (j == i - 1) {
                prime = j + 1;
            }
        }

        if (prime != 0) {
            let copy = prime;
            let val = prime;
            while (val != 0) {
                strr += val + " * ";
                facto *= val
                val--;
            }

            let str = replaceAt(strr);

            console.log("Factorial of " + copy + " : " + str + facto);
        }

    }
}

factorialsOfPrimeNumbers(1, 10);

console.log("---------------------------------------------------");