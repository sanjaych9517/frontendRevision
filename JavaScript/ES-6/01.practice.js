//--------------------------------------------------------------------//
//  1. Given the following array  of employess

let employees = [
  { id: 1, name: "rahul", salary: 30000 },
  { id: 1, name: "Amit", salary: 45000 },
  { id: 1, name: "Neha", salary: 50000 },
  { id: 1, name: "Priya", salary: 25000 },
];

let newEmployees = employees.map((emp) => ({
  name: emp.name,
  salary: emp.salary + (emp.salary * 15) / 100,
}));
console.log(newEmployees);

// ------------------------------------------------------------------------------------------//

//2. Filter all students who have scored at least 75 marks and whose attandence is at least 80%

let students = [
  { name: "Aman", marks: 82, attandence: 85 },
  { name: "Riya", marks: 70, attandence: 90 },
  { name: "Kiran", marks: 90, attandence: 75 },
  { name: "Simran", marks: 78, attandence: 95 },
  { name: "John", marks: 65, attandence: 0 },
];

let newStudents = students.filter(
  (stu) => stu.marks > 75 && stu.attandence >= 80,
);
console.log(newStudents);

// ------------------------------------------------------------------------------------------//

// 3. Find the first product whose price is grater that 50,000 and whose stock is avalable

let products = [
  { id: 101, name: "Laptop", price: 45000, stock: 5 },
  { id: 102, name: "Mobile", price: 60000, stock: 0 },
  { id: 103, name: "Tablet", price: 55000, stock: 3 },
  { id: 104, name: "Camera", price: 70000, stock: 8 },
];

let newProduct = products.find((pro) => pro.price > 50000 && pro.stock > 0);
console.log(newProduct);

// ------------------------------------------------------------------------------------------//

// 4. Filter User who:
// - Are active (isActive === true)
// - Have a subscription type of "premium"
// are older than 25

let users = [
  { name: "A", age: 28, subscription: "premium", isActive: true },
  { name: "B", age: 30, subscription: "Basics", isActive: true },
  { name: "C", age: 22, subscription: "premium", isActive: true },
  { name: "D", age: 235, subscription: "premium", isActive: false },
  { name: "E", age: 27, subscription: "premium", isActive: true },
];

let newUsers = users.filter(
  (user) =>
    user.isActive === true && user.subscription === "premium" && user.age > 25,
);
console.log(newUsers);
