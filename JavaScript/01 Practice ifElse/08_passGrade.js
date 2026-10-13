// Q8.
// Take marks.
// * marks ≥ 90 → "Grade A+ : Excellent"
//     * marks ≥ 75 → "Grade A : Very Good"
//         * marks ≥ 60 → "Grade B : Good"
//             * marks ≥ 40 → "Grade C : Pass"
//                 * Else → "Fail"

let mark = 30;

if (mark >= 90) console.log("Grade A+ : Excellent")
else if (mark >= 75) console.log("Grade A : Very Good")
else if (mark >= 60) console.log("Grade B : Good")
else if (mark >= 40) console.log("Grade C : Pass")
else console.log("Fail")