const prompt = require('prompt-sync')();

class Cylinder {
    constructor(radius, height) {
        this.height = height;
        this.radius = radius;
    }
    getVolume() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4); // .toFixed() returns a string
    }
}

let radius = parseInt(prompt("Enter radius of the Cylinder : "));
let height = parseInt(prompt("Enter height of the Cylinder : "));
let CylinderVolume = new Cylinder(radius, height).getVolume();
console.log(`Therefore the volume of the Cylinder is ${CylinderVolume} cubic units`);