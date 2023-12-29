function add(a, b, handle) {
    let result = a + b;
    handle(result);
}

function print(result) {
    console.log("Printing", result);
}

function sendRequest(result) {
    console.log("Sending data to server ", result);
}

add(4, 5, print);
add(4, 5, sendRequest);