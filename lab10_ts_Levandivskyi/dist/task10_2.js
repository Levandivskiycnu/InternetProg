"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    printInfo() {
        console.log(`--- Фігура: ${this.name} ---`);
        console.log(`Площа: ${this.calculateArea().toFixed(2)}`);
        console.log(`Периметр: ${this.calculatePerimeter().toFixed(2)}`);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super("Коло");
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super("Прямокутник");
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
// Демонстрація поліморфізму
const shapes = [
    new Circle(5),
    new Rectangle(10, 4)
];
shapes.forEach(shape => shape.printInfo());
