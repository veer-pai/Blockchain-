const prompt = require('prompt-sync')();

class Cone {
    constructor(radius, height) {
        this.height = height;
        this.radius = radius;
    }
    getVolume() {
        return ((1 / 3) * Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4); // .toFixed() returns a string
    }
}

let radius = parseInt(prompt("Enter radius of the Cone : "));
let height = parseInt(prompt("Enter height of the Cone : "));
let ConeVolume = new Cone(radius, height).getVolume();
console.log(`Therefore the volume of the Cone is ${ConeVolume} cubic units`);