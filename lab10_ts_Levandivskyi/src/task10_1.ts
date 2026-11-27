
export class BankAccount {
    private _balance: number;
    protected owner: string;
    readonly accountNumber: string;

    constructor(accountNumber: string, owner: string, balance: number) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this._balance = balance;
    }

    get balance(): number {
        return this._balance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this._balance += amount;
        }
    }

    withdraw(amount: number): boolean {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            return true;
        }
        return false;
    }
}
