
import { BookPublication } from "../src/task10_5_4";

describe("Min decorator", () => {
    let book: BookPublication;

    beforeEach(() => {
        book = new BookPublication(2020);
    });

    test("повинен приймати рік видання більший за 1450", () => {
        expect(book.year).toBe(2020);
    });

    test("повинен приймати мінімальний рік 1450", () => {
        const oldBook = new BookPublication(1450);

        expect(oldBook.year).toBe(1450);
    });

    test("повинен видавати помилку для року меншого за 1450", () => {
        expect(() => {
            new BookPublication(1400);
        }).toThrow("Рік видання не може бути меншим за 1450");
    });
});
