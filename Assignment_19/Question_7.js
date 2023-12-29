var p = new Promise((resolve, reject) => {
    reject(Error('The Fails!'))
})
    .catch(error => console.log(error))
    .then(error => console.log(error))

// output

// Error: The Fails!
// at e:\CODE Repository\JAVASCRIPT\Assignments\Assignment_19\Question_7.js:2:12
// at new Promise (<anonymous>)
// at Object.<anonymous> (e:\CODE Repository\JAVASCRIPT\Assignments\Assignment_19\Question_7.js:1:9)
// at Module._compile (node:internal/modules/cjs/loader:1126:14)
// at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
// at Module.load (node:internal/modules/cjs/loader:1004:32)
// at Function.Module._load (node:internal/modules/cjs/loader:839:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
// at node:internal/main/run_main_module:17:47
// undefined