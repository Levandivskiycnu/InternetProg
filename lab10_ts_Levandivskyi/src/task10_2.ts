
export abstract class Shape {
    constructor(public name: string) {}

    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;

    public printInfo(): void {
        console.log(`--- Фігура: ${this.name} ---`);
        console.log(`Площа: ${this.calculateArea().toFixed(2)}`);
        console.log(`Периметр: ${this.calculatePerimeter().toFixed(2)}`);
    }
}

export class Circle extends Shape {
    constructor(public radius: number) {
        super("Коло");
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

export class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super("Прямокутник");
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}
