
function ReadOnlyMethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    descriptor.writable = false;
    return descriptor;
}

export class Book {
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    @ReadOnlyMethod
    getInfo(): string {
        return `Назва книги: ${this.title}`;
    }
}
