// Take name and age.
// * If age ≥ 18 → print
// "Hello <name>, you are eligible for voting"
//     * Else →
// "Hello <name>, you are not eligible for voting"
//     (Use string concatenation, not template literals)

let name = "Sanjay Kapoor"
let age = "12"

if (age >= 18) {
    console.log(`Hello ${name}, you are eligible for voting`)
} else {
    console.log(`Hello ${name}, you are, not eligible for voting`)
}