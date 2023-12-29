const names = ['John', 'Tina', 'Kale', 'Max']
function useFunction(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[I]);
    }
}
function argFn(name) {
    console.log("Hello " + name);
}
useFunction(names, argFn);

// Output : line 4, 'I' is not defined

// HOF : useFunction