
const studentName: string = "Олексій";
const studentAge: number = 20;
const isEnrolled: boolean = true;
const grades: number[] = [90, 85, 95, 78, 92];

function calculateAverage(marks: number[]): number {
    const sum = marks.reduce((acc, curr) => acc + curr, 0);
    return sum / marks.length;
}

const averageGrade = calculateAverage(grades);

console.log(`Студент: ${studentName}, Вік: ${studentAge}`);
console.log(`Активний студент: ${isEnrolled}`);
console.log(`Середній бал: ${averageGrade.toFixed(2)}`);
