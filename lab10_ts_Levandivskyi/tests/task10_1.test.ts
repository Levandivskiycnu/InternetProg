
import { describe, test, expect, beforeEach } from '@jest/globals';
import { BankAccount } from '../src/task10_1';

describe('Task 1: BankAccount (Інкапсуляція)', () => {
    let account: BankAccount;

    beforeEach(() => {
        account = new BankAccount('UA123456789', 'Олексій', 1000);
    });

    test('повинен повертати початковий баланс', () => {
        expect(account.balance).toBe(1000);
    });

    test('повинен успішно поповнювати баланс', () => {
        account.deposit(500);
        expect(account.balance).toBe(1500);
    });

    test('не повинен змінювати баланс при відємному поповненні', () => {
        account.deposit(-100);
        expect(account.balance).toBe(1000);
    });

    test('повинен успішно знімати кошти', () => {
        const success = account.withdraw(400);
        expect(success).toBe(true);
        expect(account.balance).toBe(600);
    });

    test('не повинен знімати кошти при недостатньому балансі', () => {
        const success = account.withdraw(2000);
        expect(success).toBe(false);
        expect(account.balance).toBe(1000);
    });
});
