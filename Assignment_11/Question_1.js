let a = [1, 2, 3, 4, 5]
let odd = 0
let even = 0
let b = 0;
let c = 0;
for (let i = 0; i < a.length; i += 2) {
    odd += a[i]
    b++;
}
for (let i = 1; i < a.length; i += 2) {
    even += a[i]
    c++;
}
console.log(odd + " " + even);

// a
console.log("Difference : " + Math.abs(odd - even));

// b
console.log(b);

// c
console.log(c);

// d
let avg = (even + odd) / 2
console.log(avg);

// e
let hcf;
for (let i = 1; i <= odd && i <= even; i++) {

    if (odd % i == 0 && even % i == 0) {
        hcf = i;
    }
}

console.log(`HCF of ${odd} and ${even} is ${hcf}.`);