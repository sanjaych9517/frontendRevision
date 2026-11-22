const EventEmitter = require("events");
const eventEmitter = new EventEmitter(); 

eventEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}`);
});

eventEmitter.emit("greet", "John");

// ------------------------------Login Event ---------------- //

eventEmitter.on("login", ()=>{
  console.log("user login")
})
eventEmitter.emit("login")

