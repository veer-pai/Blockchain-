function* greet() {
    console.log("Hi");
    yield "1ST_Pause";
    console.log("Good Morning");
}

let val = greet();
console.log(val.next());