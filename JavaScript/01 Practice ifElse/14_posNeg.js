// Take number.
// * If number is positive
// o If divisible by 2 → "Positive Even"
// o Else → "Positive Odd"

// Else
// o If divisible by 2 → "Negative Even"
// o Else → "Negative Odd"

const num = Number(prompt("Enter a number"));

if (num > 0) {
    if (num % 2 == 0) {
        console.log("Positive Even")
    }
    else {
        console.log("Positive Odd")
    }
} else {
    if (num % 2 == 0) {
        console.log("Negative Even")
    }
    else {
        console.log("Negative Odd")
    }
}