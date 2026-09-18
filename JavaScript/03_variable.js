// Variable in JS: it is like a container which store value/data.
// rules:  variable name must be meaningful and camelcasing. do not starts with numeric digit or capital letter, cannot contains any special character only contains $ _
// user name
// userName,userAge

// variable declaration:
// var - before ES6, global scope,variable name can be reaasigned, value can be updated
// let - after ES6, local scope, variable name can not be reaasigned, value can be updated
// const - constant. after ES6,local scope variable name can not be reaasigned,

// scope {}

// ------------------------------------------------------------------------------- //

// var num; // declaration
// num = 20; // assignment/expression
// console.log(num)

// var num = 30;
// {
//     var num = 50;

// }
// console.log(num)

// {
//     let num = 50;
// }
// console.log(num); // ReferenceError: num is not defined

// let num = 20;
// let num = 40;
// console.log(num); // SyntaxError: Identifier 'num' has already been declared

// {
//     let num = 50;
//     console.log(num)
// }
// {
//     let num = 40;
//     console.log(num)
// }


// let num = 40;
// num = 10;
// console.log(num)

const num = 40;
num = 10;
console.log(num) // TypeError: Assignment to constant variable.