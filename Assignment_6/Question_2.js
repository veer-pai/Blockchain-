
let arr = [3, 45, 6, 7, 23, 5, 7, 8]

console.log(typeof (arr));

function CompareFunction(a, b) {
    console.log(a, b);
    return a - b;
}

arr.sort(CompareFunction);
console.log(arr);
console.log(arr[arr.length - 3]);