let a = [1, 2, 3, 2, 3, 4, 5];
let duplicate = []
let original = []
for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] == a[j]) {
            duplicate.push(a[i])
        }
    }
    if (original.includes(a[i])) {
        // do nothing
    } else {
        original.push(a[i])
    }
}

console.log(duplicate);
console.log(original);