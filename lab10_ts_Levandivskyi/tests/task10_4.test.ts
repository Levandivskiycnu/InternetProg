
import { describe, test, expect } from '@jest/globals';
import { UserProfile } from '../src/task10_4';

describe('Task 4: Min та Sealed (Декоратори)', () => {

    test('успішно створює користувача з допустимим віком', () => {
        const user = new UserProfile('Марія', 22);

        expect(user.name).toBe('Марія');
        expect(user.age).toBe(22);
    });

    test('викидає помилку при віці менше 18', () => {
        expect(() => {
            new UserProfile('Олег', 15);
        }).toThrow(
            "Помилка валідації! Поле 'age' не може бути меншим за 18."
        );
    });

    test('@Sealed не дозволяє додавати нові властивості', () => {
        const user = new UserProfile('Анна', 20);

        expect(() => {
            (user as any).newProperty = 'test';
        }).toThrow();
    });

});
