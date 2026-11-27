"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = exports.Book = exports.Publication = void 0;
class Publication {
    constructor(title, year) {
        this.title = title;
        this.year = year;
    }
}
exports.Publication = Publication;
class Book extends Publication {
    constructor(title, year, author, pricePerDay) {
        super(title, year);
        this.author = author;
        this.pricePerDay = pricePerDay;
    }
    getRentalPrice(days) {
        return this.pricePerDay * days;
    }
    getSummary() {
        return `Книга: ${this.title}, автор: ${this.author}, рік: ${this.year}`;
    }
}
exports.Book = Book;
class Magazine extends Publication {
    constructor(title, year, issueNumber, pricePerDay) {
        super(title, year);
        this.issueNumber = issueNumber;
        this.pricePerDay = pricePerDay;
    }
    getRentalPrice(days) {
        return this.pricePerDay * days;
    }
    getSummary() {
        return `Журнал: ${this.title}, номер: ${this.issueNumber}, рік: ${this.year}`;
    }
}
exports.Magazine = Magazine;
// Створення масиву видань
const publications = [
    new Book("Кобзар", 1840, "Тарас Шевченко", 10),
    new Magazine("Наука і життя", 2024, 5, 5)
];
// Виведення інформації про видання
for (const publication of publications) {
    console.log(publication.getSummary());
    console.log("Вартість оренди за 7 днів:", publication.getRentalPrice(7), "грн");
}
