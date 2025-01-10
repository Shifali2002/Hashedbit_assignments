const students = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

const studentsWithAverages = Object.keys(students).map(student => {
    const subjects = students[student];
    const totalScore = Object.values(subjects).reduce((acc, score) => acc + score, 0);
    const averageScore = totalScore / Object.values(subjects).length;
    return { [student]: { average: averageScore } };
});

console.log(studentsWithAverages);
