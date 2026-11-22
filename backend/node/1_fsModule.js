const fs = require("fs");

// let fileData = "Welcome to Node.js";
// fs.writeFileSync("student.txt", fileData);
// console.log("file created successfully");

// fs.writeFile("demo.txt", "Welcome to Node.js", (err) => {
//   if (err) throw err;
//   console.log("file created successfully");
// });

// const data = fs.readFileSync("demo.txt", "utf-8");
// console.log(data);

// fs.readFile("demo.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.appendFileSync("student.txt", "\nWelcome Students");
// console.log("Data added successfully");

// fs.appendFile("demo.txt", "\nWelcome to class", (err) => {
//   if (err) throw err;
//   console.log("Data added successfully");
// });

// fs.renameSync("student.txt", "details.txt");
// console.log("file renamed successfully");

// fs.rename("demo.txt", "practice.txt", (err) => {
//   if (err) throw err;
//   console.log("file renamed successfully");
// });

// fs.unlinkSync("details.txt");
// console.log("file deleted successfully");

// fs.unlink("details.txt", (err) => {
//   if (err) throw err;
//   console.log("file deleted successfully");
// });

// fs.mkdirSync("Students");
// console.log("Folder created successfully");

fs.rmdirSync("Students");
console.log("folder deleetd successfully");
