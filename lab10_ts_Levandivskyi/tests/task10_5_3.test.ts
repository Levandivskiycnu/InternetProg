
import { Library } from "../src/task10_5_3";

describe("ReadOnlyMethod", () => {
    let library: Library;

    beforeEach(() => {
        library = new Library("Міська бібліотека");
    });

    test("повинен правильно виконувати декорований метод", () => {
        expect(library.getInfo()).toBe("Бібліотека: Міська бібліотека");
    });

    test("не повинен дозволяти перезаписувати декорований метод", () => {
        const originalMethod = library.getInfo;

        expect(() => {
            (library as any).getInfo = () => "Змінений метод";
        }).toThrow();

        expect(library.getInfo).toBe(originalMethod);
        expect(library.getInfo()).toBe("Бібліотека: Міська бібліотека");
    });
});
