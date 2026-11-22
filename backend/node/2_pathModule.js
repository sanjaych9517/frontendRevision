const path = require("path");

// const filePath = "C:/College/Node/student.txt";

// console.log(path.basename(filePath));
// console.log(path.dirname(filePath));

// const filePath = "student.txt";
// console.log(path.extname(filePath));

// const result = path.join("College", "NodeJs", "student.txt");
// console.log(result);

// const absolutePath = path.resolve("user", "local", "file.txt");
// console.log(absolutePath);

// const messyPath = "/user//local/.../file.txt";
// console.log(path.normalize(messyPath));

console.log(path.isAbsolute("/user/local/file.txt"));
console.log(path.isAbsolute("file.txt"));
