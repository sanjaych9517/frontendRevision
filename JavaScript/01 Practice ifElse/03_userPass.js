// Take username and password.
// • If username is "admin" AND password is "1234" → "Login Successful"
// • If username is wrong → "Invalid username"
// • If password is wrong → "Invalid password"
//     (Use string comparison + logical operators)


let username = "admin";
let password = "1234";

if (username !== "admin") {
    console.log("invalid username")
} else if (password !== "1234") {
    console.log("invalid Password")
}else  {
    console.log("login successfully")
} 