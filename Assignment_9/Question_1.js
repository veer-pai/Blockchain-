function OuterFunction() {
    var outerVariable = 100;
    function InnerFunction() {
        alert(outerVariable);
    }
    return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();


// a) Yes. InnerFunction is a closure

// b) Code would run fine in browser, using node js alert is giving error