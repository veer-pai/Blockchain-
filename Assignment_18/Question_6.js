
function* natural() {
    console.log("Hi");
    yield "Paused"
    throw new Error("Don't do it");
}

let b = natural();
console.log(b.next());
