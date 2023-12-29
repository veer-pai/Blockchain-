const prompt = require('prompt-sync')();

class Rectangle {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    getArea() {
        return this.length * this.breadth;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}

let length = parseInt(prompt("Enter length of the Rectangle : "));
let breadth = parseInt(prompt("Enter breadth of the Rectangle : "));
let RectangleArea = new Rectangle(length, breadth).getArea();
console.log(`Therefore the area of the Rectangle is ${RectangleArea} square units\n`);

let side = parseInt(prompt("Enter side of the Square : "));
let SquareArea = new Square(side, side).getArea();
console.log(`Therefore the area of the Square is ${SquareArea} square units`);