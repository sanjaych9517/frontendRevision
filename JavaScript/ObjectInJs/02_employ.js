let emp = [
    { name: "Rahul", position: "Developer", salary: 40000, age: 25 },
    { name: "Priya", position: "HR", salary: 30000, age: 28 },
    { name: "Amit", position: "Developer", salary: 50000, age: 27 },
    { name: "Neha", position: "Designer", salary: 35000, age: 24 },
    { name: "Rohit", position: "Tester", salary: 32000, age: 26 },
    { name: "Sneha", position: "Developer", salary: 45000, age: 23 }
];

// Print the names of all employees whose position is "Developer".

for (let i = 0; i < emp.length; i++) {
    if (emp[i].position === "Developer") {
        console.log(emp[i].name)
    }
}


// Print the names of all employees whose position is "HR".

for (let i = 0; i < emp.length; i++) {
    if (emp[i].position === "HR") {
        console.log(emp[i].name)
    }
}
// Find employees whose position is "Designer".
for (let i = 0; i < emp.length; i++) {
    if (emp[i].position === "Designer") {
        console.log(emp[i].name)
    }
}

// Print the complete objects of employees whose position is "Tester".
for (let i = 0; i < emp.length; i++) {
    if (emp[i].position === "Tester") {
        console.log(emp[i])
    }
}
// Print the names of employees whose salary is greater than 40000.
for (let i = 0; i < emp.length; i++) {
    if (emp[i].salary > 40000) {
        console.log(emp[i].name)
    }
}
// Find employees whose age is less than 26.
for (let i = 0; i < emp.length; i++) {
    if (emp[i].age < 26) {
        console.log(emp[i])
    }
}
// Print the names of employees whose salary is exactly 30000.
for (let i = 0; i < emp.length; i++) {
    if (emp[i].salary === 30000) {
        console.log(emp[i].name)
    }
}
// Find employees whose position is not "Developer".
for (let i = 0; i < emp.length; i++) {
    if (emp[i].position !== "Developer") {
        console.log(emp[i].name)
    }
}

// Count how many employees have the position "Developer".
let count = 0
for (let i = 0; i < emp.length; i++) {
    if (emp[i].position === "Developer") {
        count++
    }
}
console.log(count)


// Count how many employees earn more than 35000.
let salCount = 0
for (let i = 0; i < emp.length; i++) {
    if (emp[i].salary > 35000) {
        salCount++
    }
}
console.log(salCount)

// Find developers whose salary is greater than 40000.

let couDev = 0
for (let i = 0; i < emp.length; i++) {
    if (emp[i].salary > 40000 && emp[i].position === "Developer") {
        couDev++
    }
}
console.log(couDev)

// Find employees whose age is greater than 24 and salary is less than 45000.
for (let i = 0; i < emp.length; i++) {
    if (emp[i].salary < 45000 && emp[i].age > 24) {
        console.log(emp[i]);
    }
}