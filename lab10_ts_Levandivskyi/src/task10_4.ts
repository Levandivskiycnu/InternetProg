
function Min(minValue: number) {
    return function (target: any, propertyKey: string) {
        let value: number;

        const getter = () => value;

        const setter = (newValue: number) => {
            if (newValue < minValue) {
                throw new Error(
                    `Помилка валідації! Поле '${propertyKey}' не може бути меншим за ${minValue}.`
                );
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

function Sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

export class UserProfile {
    public name: string;

    @Min(18)
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;

        Object.seal(this);
    }
}
