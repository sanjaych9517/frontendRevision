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
