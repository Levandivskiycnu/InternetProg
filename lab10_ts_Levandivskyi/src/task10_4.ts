
function Min(minValue: number) {
    return function (target: any, propertyKey: string) {
        let value: number;

        const getter = () => value;

        const setter = (newValue: number) => {
            if (newValue < minValue) {
                throw new Error(
                    `Поле '${propertyKey}' не може бути меншим за ${minValue}. Передано: ${newValue}`
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

    console.log(`[SEALED] Клас ${constructor.name} запечатано.`);
}

@Sealed
class UserProfile {
    public name: string;

    @Min(18)
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

try {
    const user1 = new UserProfile("Марія", 22);

    console.log(
        `Створено користувача: ${user1.name}, вік: ${user1.age}`
    );

    console.log("Спроба встановити недопустимий вік...");

    const user2 = new UserProfile("Олег", 15);

} catch (error: any) {
    console.error("Отримано виключення:", error.message);
}
