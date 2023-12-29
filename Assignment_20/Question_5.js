let p = new Promise(function (resolve, reject) {
    reject(new Error("some error"));
    setTimeout(function () {
        reject(new Error("some error"));
    }, 1000)
    reject(new Error("some error"));
});
p.then(null, function (err) {
    console.log(1);
    console.log(err);
}).catch(function (err) {
    console.log(2);
    console.log(err);
});


// output

// 1
// Error: some error
//     at e:\CODE Repository\JAVASCRIPT\Assignments\Assignment_20\Question_5.js:2:12
//     at new Promise (<anonymous>)
//     at Object.<anonymous> (e:\CODE Repository\JAVASCRIPT\Assignments\Assignment_20\Question_5.js:1:9)
//     at Module._compile (node:internal/modules/cjs/loader:1126:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
//     at Module.load (node:internal/modules/cjs/loader:1004:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:839:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:17:47