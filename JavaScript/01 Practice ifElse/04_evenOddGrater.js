// Take a number.
// * If number is even and greater than 50 → "Even and greater than 50"
//     * If number is even but ≤ 50 → "Even but small"
//         * If number is odd and greater than 50 → "Odd and greater than 50"
//             * Else → "Odd but small"

let num = 36;

if(num %2 ==0 && num >50){
    console.log("Even and greater than 50")
} else if (num % 2 == 0 && num <= 50) {
    console.log("Even but small")
} else if (num % 2 != 0 && num > 50) {
    console.log("Odd and greater than 50")
} else if (num % 2 != 0 && num <= 50) {
    console.log("Odd but small")
}