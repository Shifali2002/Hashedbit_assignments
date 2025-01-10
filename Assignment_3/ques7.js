const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const studentsAverage = students.map(student => {
    const averageScore = student.scores.reduce((accumulator, score) => accumulator + score, 0) / student.scores.length;
    return {
        name: student.name,
        average: averageScore
    };
});

console.log(studentsAverage);
