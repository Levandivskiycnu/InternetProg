
export class LibraryCard {
    public readonly cardNumber: string;
    private _borrowedBooksCount: number;
    protected ownerName: string;

    constructor(cardNumber: string, ownerName: string) {
        this.cardNumber = cardNumber;
        this.ownerName = ownerName;
        this._borrowedBooksCount = 0;
    }

    get borrowedBooksCount(): number {
        return this._borrowedBooksCount;
    }

    borrowBook(): boolean {
        if (this._borrowedBooksCount >= 5) {
            console.log("Досягнуто ліміт книг!");
            return false;
        }

        this._borrowedBooksCount++;
        return true;
    }

    returnBook(): boolean {
        if (this._borrowedBooksCount <= 0) {
            console.log("Немає книг для повернення!");
            return false;
        }

        this._borrowedBooksCount--;
        return true;
    }
}

// Демонстрація
const card = new LibraryCard("LIB001", "Олексій");

card.borrowBook();
card.borrowBook();

console.log("Позичено книг:", card.borrowedBooksCount);

card.returnBook();

console.log("Після повернення:", card.borrowedBooksCount);
