let a = [1, 2, 3, 4, 5]
let b = [4, 6, 1, 8, 2]

let c = a.sort()
let d = b.sort()

let e = c.join() == d.join()
console.log(e);


if (a.includes(4) && b.includes(4)) {
    console.log("Present in both");
} else if (a.includes(4)) {
    console.log("Present in first array only");
} else if (b.includes(4)) {
    console.log("Present in second array only");
}