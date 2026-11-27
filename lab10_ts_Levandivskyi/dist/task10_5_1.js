"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryCard = void 0;
class LibraryCard {
    constructor(cardNumber, ownerName) {
        this.cardNumber = cardNumber;
        this.ownerName = ownerName;
        this._borrowedBooksCount = 0;
    }
    get borrowedBooksCount() {
        return this._borrowedBooksCount;
    }
    borrowBook() {
        if (this._borrowedBooksCount >= 5) {
            console.log("Досягнуто ліміт книг!");
            return false;
        }
        this._borrowedBooksCount++;
        return true;
    }
    returnBook() {
        if (this._borrowedBooksCount <= 0) {
            console.log("Немає книг для повернення!");
            return false;
        }
        this._borrowedBooksCount--;
        return true;
    }
}
exports.LibraryCard = LibraryCard;
// Демонстрація
const card = new LibraryCard("LIB001", "Олексій");
card.borrowBook();
card.borrowBook();
console.log("Позичено книг:", card.borrowedBooksCount);
card.returnBook();
console.log("Після повернення:", card.borrowedBooksCount);
