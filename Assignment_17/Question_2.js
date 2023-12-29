let a = "iNeuron";

let b = a[Symbol.iterator]();

let c = b.next();

while (!c.done) {
    console.log(c.value);
    c = b.next();
}