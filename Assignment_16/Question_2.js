

let regex = new RegExp("(happiness)+$");

let line = "happiness"

var res = regex.test(line);

if (res) {
    console.log("Hurray!");
} else {
    console.log("There is no happiness.");
}