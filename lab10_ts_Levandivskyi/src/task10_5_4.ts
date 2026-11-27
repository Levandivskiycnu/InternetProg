
function Min(minValue: number) {
    return function (target: any, propertyKey: string) {
        let value: number;

        const getter = function () {
            return value;
        };

        const setter = function (newValue: number) {
            if (newValue < minValue) {
                throw new Error(
                    `Рік видання не може бути меншим за ${minValue}`
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

class BookPublication {
    @Min(1450)
    year: number;

    constructor(year: number) {
        this.year = year;
    }

    getInfo(): string {
        return `Рік видання: ${this.year}`;
    }
}

// Демонстрація
const book = new BookPublication(2020);

console.log(book.getInfo());

// Перевірка неправильного року
try {
    const oldBook = new BookPublication(1400);
    console.log(oldBook.getInfo());
} catch (error) {
    console.log("Помилка:", (error as Error).message);
}
