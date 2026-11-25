
function ReadOnlyMethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    descriptor.writable = false;
    return descriptor;
}

class Book {
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    @ReadOnlyMethod
    getInfo(): string {
        return `Назва книги: ${this.title}`;
    }
}

const book = new Book("Кобзар");

console.log(book.getInfo());

const descriptor = Object.getOwnPropertyDescriptor(
    Book.prototype,
    "getInfo"
);

console.log("Можна змінювати метод:", descriptor?.writable);
