const prompt = require('prompt-sync')();

class Sphere {
    constructor(radius) {
        this.radius = radius;
    }
    getVolume() {
        return ((4 / 3) * Math.PI * Math.pow(this.radius, 3)).toFixed(4); // .toFixed() returns a string
    }
}

let radius = parseInt(prompt("Enter radius of the Sphere : "));
let SphereVolume = new Sphere(radius).getVolume();
console.log(`Therefore the volume of the Sphere is ${SphereVolume} cubic units`);