// let program = "JavaScript";
// console.log(`I am learning ${program}`);

// ------------------------------------------ //
// Arrow function
// function greet() {
//   return "Hello,User";
// }

// let greet = () => {
//   return "Hello,User";
// };
// console.log(greet());

// function add(a, b) {
//   return a + b;
// }

// let add = (a, b) => a + b;
// console.log(add(10, 20));

// function square(num) {
//   return num * num;
// }

// const square = (num) => num * num;
// console.log(square(10));

// even odd
// function checkNum(num) {
//   if (num % 2 === 0) {
//     return "Even Num";
//   } else {
//     return "Odd Num";
//   }
// }

// let checkNum = (num) => {
//   if (num % 2 === 0) {
//     return "Even Num";
//   } else {
//     return "Odd Num";
//   }
// };
// console.log(checkNum(11));

// ----------------------------------------- //
// Array methods:
// filter(): return new array, length of the original array will be changed
// let numbers = [24, 6, 87, 12, 2, 23, 9, 4, 18];
// let newArr = numbers.filter(function (num) {
//   // this num parameter will check each element and apply condition and return the result
//   return num > 10;
// });
// console.log(newArr);

// // even number
// let evenNums = numbers.filter((num) => num % 2 === 0);
// console.log(evenNums);

// filter employee belongs to IT dept
// let team = [
//   { name: "John", dept: "IT" },
//   { name: "Alice", dept: "HR" },
//   { name: "Bob", dept: "IT" },
//   { name: "Jack", dept: "Finance" },
// ];
// let ITDept = team.filter((department) => department.dept === "IT");
// console.log(ITDept);

// odd numbers, positive numbers/negative nums,
// array of objects name,dept,salary -> filter employees more than 50000 salary

// map: return new array but this method will not update the length of the original array by applying operations
// let arr = [1, 2, 3, 4, 5];
// // // [2,4,6,8,10]
// // // [1,4,9,16,25]

// let newArr = arr.map((num) => num * 2);
// // let newArr = arr.map((num) => num * num);
// console.log(newArr);

// find: return first match value

// let numbers = [24, 6, 87, 12, 2, 63, 9, 4, 58];
// // > 50
// // first match even num - 24
// // odd - 87
// let num = numbers.find((val) => val > 50);
// console.log(num);

// Given an array of book objects, filter out books where the title length is greater than
// 10 characters.
// const books = [
//   { title: "Short", authors: ["Author A"] },
//   { title: "This is a Long Title", authors: ["Author B"] },
//   { title: "Medium Title", authors: ["Author C"] },
// ];
// let result = books.filter((book) => book.title.length > 10);
// console.log(result);

// Given an array of objects representing books, filter out the books written by a specific author.
// const books = [
//   { title: "Book One", author: { name: "Author A" } },
//   { title: "Book Two", author: { name: "Author B" } },
//   { title: "Book Three", author: { name: "Author A" } },
//   { title: "Book Four", author: { name: "Author C" } },
// ];
// // ['Book One','Book Three']
// // let result = books
// //   .filter((book) => book.author.name === "Author A")
// // .map((bookTitle) => bookTitle.title);

// let result = books.filter((book) => book.author.name === "Author A");
// let bookTitle = result.map((bTitle) => bTitle.title);

// console.log(bookTitle);

// reduce(): used to reduce an array into a single value
// calculating sum of numbers
// finding product of numbrs
// max or min value
// combining array values into an object
// arr.reduce(function(accumulator,currentValue){// return updated accumulator},initialValue)
// accumulator - store the accumulated result
// currentValue - current value of an array
// initialvalue - initial value of the accumulator

// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((total, num) => {
//   return total + num;
// }, 0);
// console.log(sum);

// maximum number:
// let numbers = [10, 45, 20, 80, 30];
// let maximum = numbers.reduce((max, num) => (num > max ? num : max));
// console.log(maximum);

// let marks = [80, 75, 90, 85, 70];
// count total marks, average

// ------------------------------------------------------------------------- //
// let book = ["EcmaScript6", 1500, 700, ["Js Publication", 2015]];
// // let [bookName, pages, price, [publicationName, publicationYear]] = book;
// let [bookName, , price] = book;
// console.log(bookName, price);

// let book = {
//   bookName: "Advanced Js",
//   pages: 1800,
//   price: 750,
//   publication: {
//     name: "JS Publication",
//     year: 2015,
//   },
// };
// let {
//   bookName: bookTitle,
//   pages,
//   price: bookPrice,
//   publication: { name, year },
// } = book;
// console.log(bookTitle, bookPrice);

// spread operators: ...arr
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [10, 20, 30, 40, 50, ...arr1];
// // let newArr = [...arr1];
// // let mergedArr = [...arr1, ...arr2];
// // console.log(mergedArr);
// console.log(arr2);

// Given an array of numbers, filter out the even numbers and destructure the first and
// third even numbers into separate variables.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let filteredArr = numbers.filter((num) => num % 2 === 0);
// console.log(filteredArr);
// let [first, , third] = filteredArr;
// console.log(first, third);

// ------------------------------------------------------------------------------------- //
// Promise - resolve

// creating Promise
// let promise = new Promise((resolve, reject) => {
//   resolve("Task completed successfully..");
// });
// // consuming promise
// promise.then((result) => console.log(result));

// let age = 12;

// let promise = new Promise((resolve, reject) => {
//   if (age >= 18) {
//     resolve("Eligible to vote");
//   } else {
//     reject("Not eligible to vote");
//   }
// });
// promise
//   .then((result) => console.log(result)) // resolve
//   .catch((error) => console.log(error)); // reject

// fake api
// url: https://fakestoreapi.com/users
// fetch() : used to fetch data from an api endpoint, we pass url as argument
// response.json(): convert the JSON response into javascript data

// function getUsers() {
//   return new Promise((resolve, reject) => {
//     fetch("https://fakestoreapi.com/users")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }
// getUsers()
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// async-await

console.log("I will execute first");
async function getUsers() {
  try {
    let response = await fetch("https://fakestoreapi.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getUsers();
console.log("I will execute before data fetching");

// let getUsers = async () =>{}

// async: to create asynchronous function we use async keyword before function
// await fetch(): waits for the API response
// await response.json(): wait for the JSON data to be converted in JS data.
