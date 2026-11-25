"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const studentName = "Олексій";
const studentAge = 20;
const isEnrolled = true;
const grades = [90, 85, 95, 78, 92];
function calculateAverage(marks) {
    const sum = marks.reduce((acc, curr) => acc + curr, 0);
    return sum / marks.length;
}
const averageGrade = calculateAverage(grades);
console.log(`Студент: ${studentName}, Вік: ${studentAge}`);
console.log(`Активний студент: ${isEnrolled}`);
console.log(`Середній бал: ${averageGrade.toFixed(2)}`);
