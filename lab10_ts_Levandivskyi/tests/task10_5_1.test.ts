
import { LibraryCard } from "../src/task10_5_1";

describe("LibraryCard", () => {
    let card: LibraryCard;

    beforeEach(() => {
        card = new LibraryCard("LIB001", "Олексій");
    });

    test("повинен правильно створювати читацький квиток", () => {
        expect(card.cardNumber).toBe("LIB001");
        expect(card.borrowedBooksCount).toBe(0);
    });

    test("повинен збільшувати кількість позичених книг", () => {
        card.borrowBook();
        card.borrowBook();

        expect(card.borrowedBooksCount).toBe(2);
    });

    test("повинен дозволяти позичити максимум 5 книг", () => {
        for (let i = 0; i < 5; i++) {
            card.borrowBook();
        }

        expect(card.borrowedBooksCount).toBe(5);
    });

    test("повинен видавати помилку при спробі взяти 6-ту книгу", () => {
        for (let i = 0; i < 5; i++) {
            card.borrowBook();
        }

        expect(() => card.borrowBook()).toThrow("Досягнуто ліміт книг!");
    });

    test("повинен зменшувати кількість книг при поверненні", () => {
        card.borrowBook();
        card.borrowBook();

        card.returnBook();

        expect(card.borrowedBooksCount).toBe(1);
    });

    test("повинен видавати помилку, якщо немає книг для повернення", () => {
        expect(() => card.returnBook()).toThrow("Немає книг для повернення!");
        expect(card.borrowedBooksCount).toBe(0);
    });
});
