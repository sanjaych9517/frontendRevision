// Q9.
// Take age and gender.
// * Male & age ≥ 21 → "Male eligible for marriage"
//     * Female & age ≥ 18 → "Female eligible for marriage"
//         * Else → "Not eligible for marriage"

let age = 19;
let gender = "Female"

if (gender === "Male" && age >= 21) {
    console.log("Male eligible for marriage")
} else if (gender === "Female" && age >= 18) {
    console.log("Female eligible for marriage")
} else {
    console.log("Not eligible for marriage"
    )
}