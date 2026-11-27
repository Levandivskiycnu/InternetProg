
export abstract class Publication {
    constructor(
        public title: string,
        public year: number
    ) {}

    abstract getRentalPrice(days: number): number;

    abstract getSummary(): string;
}

export class Book extends Publication {
    constructor(
        title: string,
        year: number,
        public author: string,
        public pricePerDay: number
    ) {
        super(title, year);
    }

    getRentalPrice(days: number): number {
        return this.pricePerDay * days;
    }

    getSummary(): string {
        return `Книга: ${this.title}, автор: ${this.author}, рік: ${this.year}`;
    }
}

export class Magazine extends Publication {
    constructor(
        title: string,
        year: number,
        public issueNumber: number,
        public pricePerDay: number
    ) {
        super(title, year);
    }

    getRentalPrice(days: number): number {
        return this.pricePerDay * days;
    }

    getSummary(): string {
        return `Журнал: ${this.title}, номер: ${this.issueNumber}, рік: ${this.year}`;
    }
}

// Створення масиву видань
const publications: Publication[] = [
    new Book("Кобзар", 1840, "Тарас Шевченко", 10),
    new Magazine("Наука і життя", 2024, 5, 5)
];

// Виведення інформації про видання
for (const publication of publications) {
    console.log(publication.getSummary());
    console.log("Вартість оренди за 7 днів:", publication.getRentalPrice(7), "грн");
}
