const student1 = {
    name: "John",
    age: 14,
    grades: [4, 5, 5]
}

const student2 = {
    name: "Emma",
    age: 14,
    grades: [6, 5, 6]
};

const student3 = {
    name: "Bob",
    age: 14,
    grades: [4, 6, 6]
};


let classroom = {
    [student1.name]: student1,
    [student2.name]: student2,
    [student3.name]: student3
};

const classAverage = () => {
    let students = Object.values(classroom)


    let { totalGrades, totalStudents } = students.reduce((acc, student) => {
        let sumGrades = student.grades.reduce((sum, grade) => sum + grade, 0);
        acc.totalGrades += sumGrades / student.grades.length;
        acc.totalStudents += 1;
        return acc;
    }, { totalGrades: 0, totalStudents: 0 });

    // Calculate and return the average grade
    return (totalGrades / totalStudents).toFixed(2);
};

console.log(classAverage(classroom));