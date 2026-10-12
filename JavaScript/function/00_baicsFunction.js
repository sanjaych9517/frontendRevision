// Functions:
// 1. function declaration: using "function" keyword
// 2. function expression/assignment
// 3. anonymous function: function without name
// 4. Immediately invoked function: one time execution. - to execute specific task
// 5. Arrow function: ES6
// 6. default parameters
// 7. Closure: outer,inner, functtions
// 8. Callback function: function inside argument - DOM

// greet -> Hello there!
// function greet() {
//     // block of code to be executed/reuse
//     console.log("Hello,User")
// }
// greet()
// greet()


// sum of two numbers using js function
// function sum(num1, num2) { // parameters
//     console.log(num1 + num2)
// }
// sum(20, 40) // arguments - 60
// sum(10, 40, 20); // ignore extra arguments - 50
// sum(10); // NaN(Not a number)/undefined

// default parameter:
// function greet(name = "User") {

//     console.log("Hello, " + name)
// }
// greet("John")
// greet()

// function sum(num1 = 10, num2 = 0) { // parameters
//     console.log(num1 + num2)
// }
// sum(20, 40) // arguments - 60
// sum(10, 40, 20); // 50
// sum(10); // 10
// sum(); // 10


// function expression
// greet(); // greet is not a function
// var greet = function () {
//     console.log("Hello,there!")
// }
// // // greet variable will behave like a function
// // greet()

// // *** Hoisting: to pull variable & function declaration to top of their scope. before ES6 concept
// sum(20, 40); // 60
// function sum(num1, num2) {
//     console.log(num1 + num2)
// }


// greet(); // ReferenceError: Cannot access 'greet' before initialization
// let greet = function () {
//     console.log("Hello,there!")
// }

// var num;
// console.log(num);
// var num;
// num = 20;

// console.log(num) // undefined
// var num = 30;

// console.log(num) //  ReferenceError: Cannot access 'num' before initialization
// let num = 30;


// (function () {
//     console.log("i will execute once")
// })()


// Multiplication table of 5,17,29 using function