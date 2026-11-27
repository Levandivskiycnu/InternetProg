
function ReadOnlyMethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    descriptor.writable = false;
}

export class Library {
    constructor(public name: string) {}

    @ReadOnlyMethod
    getInfo(): string {
        return `Бібліотека: ${this.name}`;
    }
}
