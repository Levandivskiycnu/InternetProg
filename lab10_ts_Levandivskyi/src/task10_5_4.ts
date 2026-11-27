
function Min(minValue: number) {
    return function (target: any, propertyKey: string) {
        const values = new WeakMap<object, number>();

        Object.defineProperty(target, propertyKey, {
            get: function () {
                return values.get(this);
            },

            set: function (newValue: number) {
                if (newValue < minValue) {
                    throw new Error(
                        `Рік видання не може бути меншим за ${minValue}`
                    );
                }

                values.set(this, newValue);
            },

            enumerable: true,
            configurable: true
        });
    };
}

export class BookPublication {
    @Min(1450)
    year!: number;

    constructor(year: number) {
        this.year = year;
    }

    getInfo(): string {
        return `Рік видання: ${this.year}`;
    }
}
