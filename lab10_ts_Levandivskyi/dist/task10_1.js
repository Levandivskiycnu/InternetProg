"use strict";
class BankAccount {
    constructor(owner, accountNumber, balance) {
        this.owner = owner;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount("Олексій", "UA12345", 1000);
account.deposit(500);
account.withdraw(200);
console.log("Власник:", "Олексій");
console.log("Номер рахунку:", account.accountNumber);
console.log("Баланс:", account.getBalance());
