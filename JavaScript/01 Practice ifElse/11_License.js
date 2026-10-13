// Q11.
// Take speed.
// * speed > 120 → "License cancelled"
//     * speed > 80 → "Fine 2000"
//         * speed > 60 → "Warning"
//             * Else → "Safe speed"

let speed = 61;

if (speed > 120) console.log("License cancelled")
else if (speed > 80) console.log("Fine 2000")
else if (speed > 60) console.log("Warning")
else console.log("Safe speed")