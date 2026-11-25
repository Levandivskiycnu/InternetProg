
class BankAccount {
    private balance: number;
    protected owner: string;
    readonly accountNumber: string;

    constructor(owner: string, accountNumber: string, balance: number) {
        this.owner = owner;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount("Олексій", "UA12345", 1000);

account.deposit(500);
account.withdraw(200);

console.log("Власник:", "Олексій");
console.log("Номер рахунку:", account.accountNumber);
console.log("Баланс:", account.getBalance());
