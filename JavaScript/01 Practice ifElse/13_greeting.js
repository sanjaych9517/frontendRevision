// Q13.
// Take time(0–23).
// * 5–11 → "Good Morning"
//     * 12–16 → "Good Afternoon"
//         * 17–20 → "Good Evening"
//             * Else → "Good Night"

let time = Number(prompt("Enter Time between 0 - 23 Format"));

if (time >= 5 && time <= 11) console.log("Good Morning")
else if (time >= 12 && time <= 16) console.log("Good Afternoon")
else if (time >= 17 && time <= 20) console.log("Good Night")
else console.log("Good Night")
