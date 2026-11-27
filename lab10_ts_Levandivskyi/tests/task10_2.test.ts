
import { describe, test, expect } from '@jest/globals';
import { Circle, Rectangle, Shape } from '../src/task10_2';

describe('Task 2: Shape, Circle, Rectangle (Поліморфізм)', () => {

    test('Circle повинен правильно розраховувати площу та периметр', () => {
        const circle = new Circle(5);

        expect(circle.calculateArea()).toBeCloseTo(78.54, 2);
        expect(circle.calculatePerimeter()).toBeCloseTo(31.42, 2);
    });

    test('Rectangle повинен правильно розраховувати площу та периметр', () => {
        const rect = new Rectangle(10, 4);

        expect(rect.calculateArea()).toBe(40);
        expect(rect.calculatePerimeter()).toBe(28);
    });

    test('поліморфний масив фігур викликає відповідні методи', () => {
        const shapes: Shape[] = [
            new Circle(2),
            new Rectangle(3, 3)
        ];

        const areas = shapes.map(s => s.calculateArea());

        expect(areas[0]).toBeCloseTo(12.57, 2);
        expect(areas[1]).toBe(9);
    });

});
