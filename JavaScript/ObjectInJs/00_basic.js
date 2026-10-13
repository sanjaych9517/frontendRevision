// employee details

// let empData = {
//     empId: 1234,
//     empName: "Alice",
//     salary: 50000,
//     "email id": "abc@email.com",
//     skills: ["Java", "React", "Express"],
//     designation: "Developer",
//     address: {
//         city: "Noida",
//         state: "UP",
//         country: "India",
//         pincode: 201301
//     }
// }
// // accessing object's property
// // dot notation , array/bracket notation []
// console.log(empData.salary)
// console.log(empData.address.country)
// console.log(empData["email id"])
// // modifying object's property
// empData.age = 27;
// // console.log(empData)
// empData.salary = 60000;
// console.log(empData.salary)
// delete empData.designation;
// console.log(empData.designation)
// let empKeys = Object.keys(empData) // will return array
// let empValues = Object.values(empData)
// let empEntries = Object.entries(empData)
// console.log(empKeys, empValues, empEntries)


// let student = new Object()
// student.name = "David Ray";
// student.class = 10;
// console.log(student)

// -------------------------------------------------------------------- //

// let person = {
//     name: "David Ray",
//     designation: "Software Engineer",
//     greet: function () { // method
//         console.log("My name is " + this.name + ",and i am a " + this.designation)
//     },
//     sayHi() { // ES6
//         console.log("Hello,I am " + this.name + " i have a " + car.brand + " car.")
//     }
// }
// let car = {
//     brand: "Toyota",
//     color: "Black",
//     model: "ABC"
// }
// person.greet()
// person.sayHi()
// My name is David Ray, I am a Software Engineer.
// Hello I am David Ray, i have Toyota car

// let team = [
//     { name: "John", position: "Manager" },
//     { name: "Bob", position: "Developer" },
//     { name: "Alice", position: "Lead" },
//     { name: "Jack", position: "Developer" }
// ]
// // find out employees whose position is Developer.
// for (let i = 0; i < team.length; i++) {
//     if (team[i].position === "Developer")
//         console.log(team[i])
// }

let team = [
    { name: "John", position: "Manager" },
    { name: "Bob", position: "Developer" },
    { name: "Alice", position: "Lead" },
    { name: "Jack", position: "Developer" },

]


for (let i = 0; i < team.length; i++) {
    if (team[i].position === "Developer") {
        console.log(team[i])
    }

}