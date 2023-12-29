let a = [1, 2, 3, 4, 5]
let b = a.reduce((a, b) => a + b)
console.log("Sum : " + b);
let avg = b / a.length;
console.log("Average : " + avg);