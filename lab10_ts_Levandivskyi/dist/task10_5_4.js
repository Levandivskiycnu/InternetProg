"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Min(minValue) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            if (newValue < minValue) {
                throw new Error(`Рік видання не може бути меншим за ${minValue}`);
            }
            value = newValue;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}
class BookPublication {
    constructor(year) {
        this.year = year;
    }
    getInfo() {
        return `Рік видання: ${this.year}`;
    }
}
__decorate([
    Min(1450),
    __metadata("design:type", Number)
], BookPublication.prototype, "year", void 0);
// Демонстрація
const book = new BookPublication(2020);
console.log(book.getInfo());
// Перевірка неправильного року
try {
    const oldBook = new BookPublication(1400);
    console.log(oldBook.getInfo());
}
catch (error) {
    console.log("Помилка:", error.message);
}
