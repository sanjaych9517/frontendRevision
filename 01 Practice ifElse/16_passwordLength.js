// Take username.
// * If username is empty → "Username required"
//     * If length < 4 → "Username too short"
//         * If length > 10 → "Username too long"
//             * Else → "Username accepted"

let username = prompt("Enter a Password")

if(username === ""){
    console.log("Username required")
}else if(username.length < 4){
    console.log("Username too short")
} else if(username.length> 10){
    console.log("Username too long")
} else{
    console.log("Username accepted")
}