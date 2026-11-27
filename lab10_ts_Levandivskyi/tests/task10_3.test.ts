
import { describe, test, expect } from '@jest/globals';
import { Book } from '../src/task10_3';

describe('Task 3: ReadOnlyMethod (Декоратор)', () => {

    test('повинен правильно повертати інформацію про книгу', () => {
        const book = new Book('Кобзар');

        expect(book.getInfo()).toBe('Назва книги: Кобзар');
    });

    test('декоратор повинен забороняти зміну методу', () => {
        const descriptor = Object.getOwnPropertyDescriptor(
            Book.prototype,
            'getInfo'
        );

        expect(descriptor?.writable).toBe(false);
    });

});
