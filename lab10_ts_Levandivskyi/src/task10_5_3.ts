
function ReadOnlyMethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    descriptor.writable = false;
}

class Library {
    constructor(public name: string) {}

    @ReadOnlyMethod
    getInfo(): string {
        return `Бібліотека: ${this.name}`;
    }
}

// Демонстрація
const library = new Library("Міська бібліотека");

console.log(library.getInfo());
