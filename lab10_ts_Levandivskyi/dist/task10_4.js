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
        const getter = () => value;
        const setter = (newValue) => {
            if (newValue < minValue) {
                throw new Error(`Поле '${propertyKey}' не може бути меншим за ${minValue}. Передано: ${newValue}`);
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
function Sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    console.log(`[SEALED] Клас ${constructor.name} запечатано.`);
}
let UserProfile = class UserProfile {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};
__decorate([
    Min(18),
    __metadata("design:type", Number)
], UserProfile.prototype, "age", void 0);
UserProfile = __decorate([
    Sealed,
    __metadata("design:paramtypes", [String, Number])
], UserProfile);
try {
    const user1 = new UserProfile("Марія", 22);
    console.log(`Створено користувача: ${user1.name}, вік: ${user1.age}`);
    console.log("Спроба встановити недопустимий вік...");
    const user2 = new UserProfile("Олег", 15);
}
catch (error) {
    console.error("Отримано виключення:", error.message);
}
