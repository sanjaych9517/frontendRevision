let students = [
    { id: 1, name: "Rahul", age: 20, marks: 85 },
    { id: 2, name: "Priya", age: 22, marks: 92 },
    { id: 3, name: "Aman", age: 19, marks: 67 },
    { id: 4, name: "Neha", age: 21, marks: 78 },
    { id: 5, name: "Rohit", age: 23, marks: 95 }
];

// Print the names of students whose age is greater than 20.

for (let i = 0; i < students.length; i++) {
    if (students[i].age > 20) {
        console.log(students[i].name)
    }
}

// Display students who scored less than 80 marks.

for (let i = 0; i < students.length; i++) {
    if (students[i].marks <= 80) {
        console.log(students[i])
    }

}

// Find the total marks of students whose age is above 20.
let marks = 0
for (let i = 0; i < students.length; i++) {

    if (students[i].age > 20) {
        marks += students[i].marks
    }
}
console.log(marks)