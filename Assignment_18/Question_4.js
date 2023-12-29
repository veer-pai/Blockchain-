let a = 2;

function* multi() {
    a = a * 2;
    console.log(a);
    yield "Paused";
}

let mul = multi();
console.log(mul.next());