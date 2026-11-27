"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(accountNumber, owner, balance) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            return true;
        }
        return false;
    }
}
exports.BankAccount = BankAccount;
