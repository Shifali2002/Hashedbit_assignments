function calculateAverages(students1) {
    // Create an object to hold the averages for each student
    let averages = {};

    // Loop through each student key
    for (let student in students1) {
        // Extract the scores for the current student
        let scores = Object.values(students1[student]);

        // Calculate the sum of the scores
        let sum = scores.reduce((acc, score) => acc + score, 0);

        // Calculate the average
        let average = sum / scores.length;

        // Store the average in the new structure
        averages[student] = { average: Math.floor(average) }; //Math.floor is used to round down 64.2 to 64.
    }

    // Return the averages object
    return averages;
}

// Input data
const students1 = {
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

// Calculate averages
const averages = calculateAverages(students1);

// Output result
console.log(averages);
