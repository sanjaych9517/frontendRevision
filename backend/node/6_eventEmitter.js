const { emit } = require("cluster");
const EventEmitter = require("events");
const event = new EventEmitter();

// Register event
// event.on("welcome", () => {
//   console.log("Welcom to Node.js!");
// });

// // Trigger event
// event.emit("welcome");

// ---------------------------------------------- //

// event.on("student", (name, age) => {
//   console.log("Student Name: ", name);
//   console.log("Student Age: ", age);
// });
// event.emit("student", "Oliver", 25);

// ---------------------------------------------- //

// event.on("login", () => {
//   console.log("User logged In");
// });
// event.on("logout", () => {
//   console.log("User logged Out");
// });

// event.emit("login");
// event.emit("logout");

// ------------------------------------------ //

// event.once("message", () => {
//   console.log("Message Event Executed");
// });
// event.emit("message");
// event.emit("message");
// event.emit("message");

// -------------------------------------------- //

// function welcome() {
//   console.log("Welcome Students!");
// }
// event.on("welcome", welcome);
// event.emit("welcome");
// event.removeListener("welcome", welcome);
// event.emit("welcome");

// ---------------------------------------------- //

event.on("login", () => {
  console.log("Login event");
});
event.on("logout", () => {
  console.log("logout event");
});
event.removeAllListeners();
event.emit("login");
event.emit("logout");
console.log("all events removed");

// --------------------------------------------- //

// 1.  Scenario: Whenever a student register, the system should display a registration confirmation
// 2.  Create a login event
// accepts employee name
// display login success message
// display the operating sytem platform and hostname
// 3. Create a studentRegistered event
// accept student name and course
// generates a unique student ID
// display student details and generated IT when the event is triggered
