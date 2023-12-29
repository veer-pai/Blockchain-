let a = 1;
function* natural() {
    while (a) {
        console.log(a);
        yield a++;
    }
}

let b = natural();
console.log(b.next());
console.log(b.next());
console.log(b.next());