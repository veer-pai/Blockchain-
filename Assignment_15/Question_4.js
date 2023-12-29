let n = 2;
let a = 1;
let ans = 1;
let b = 1;
for (let i = 1; i <= n - 1; i++) {
    a++;
    ans += a;
    b += ans;
}
console.log(b);