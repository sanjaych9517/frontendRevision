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

// console.log("I will execute first");
// async function getUsers() {
//   try {
//     let response = await fetch("https://fakestoreapi.com/users");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getUsers();
// console.log("I will execute before data fetching");

// let getUsers = async () =>{}

// async: to create asynchronous function we use async keyword before function
// await fetch(): waits for the API response
// await response.json(): wait for the JSON data to be converted in JS data.

// ************************* practice *********************************************

// create a function check result the returns a promise if marks are above 40 , resolve with stuent Passed, otherwise reject with student failed
// create an async functiom to display the result using await

function checkResult(marks) {
  return new Promise((resolve, reject) => {
    if (marks > 40) {
      resolve("Student Passed");
    } else {
      reject("Student failed");
    }
  });
}

let displayResult = async (marks) => {
  try {
    const result = await checkResult(78);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

displayResult();

// Create a function to calculateSalary(basicSalary, bonous) that return a promise calculate the tootal salary if the basics salary is positive otherwise reject with invalid salary
// display the total salary using async await
function calculateSalary(basicSalary, bonous) {
  return new Promise((resolve, reject) => {
    if (basicSalary > 0) {
      resolve((totalSalary = basicSalary + bonous));
    } else {
      reject("invalid salary");
    }
  });
}

let displaySalary = async (basicSalary, bonous) => {
  try {
    const totSalary = await calculateSalary(10000, 2500);
    console.log(totSalary);
  } catch (error) {
    console.log(error);
  }
};

displaySalary();
