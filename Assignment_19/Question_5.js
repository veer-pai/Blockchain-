
let promise = new Promise(function (resolve, reject) {

    setTimeout(function () {
        resolve("Hurray! jack and jill are back with water");
    }, 1000);

    setTimeout(function () {

        reject(
            new Error("jack fell down and broke his crown, and jill can tumbling after"));
    }, 1000);

});


const grandParentCooking = () => {

    promise.then(function (result) {
        console.log(`cooking the vegetables with the ${result}`);
    });

    promise.catch(function (error) {
        console.log(`omg ${error.message}`);
    });

};

grandParentCooking();
