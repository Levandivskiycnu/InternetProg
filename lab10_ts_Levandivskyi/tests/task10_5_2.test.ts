
import { Book, Magazine } from "../src/task10_5_2";

describe("Publication", () => {
    let book: Book;
    let magazine: Magazine;

    beforeEach(() => {
        book = new Book("Кобзар", 1840, "Тарас Шевченко", 10);
        magazine = new Magazine("Наука і життя", 2024, 5, 5);
    });

    test("повинен правильно розраховувати вартість оренди книги за 7 днів", () => {
        expect(book.getRentalPrice(7)).toBe(70);
    });

    test("повинен правильно формувати опис книги", () => {
        expect(book.getSummary()).toBe(
            "Книга: Кобзар, автор: Тарас Шевченко, рік: 1840"
        );
    });

    test("повинен правильно розраховувати вартість оренди журналу за 7 днів", () => {
        expect(magazine.getRentalPrice(7)).toBe(35);
    });

    test("повинен правильно формувати опис журналу", () => {
        expect(magazine.getSummary()).toBe(
            "Журнал: Наука і життя, номер: 5, рік: 2024"
        );
    });
});
