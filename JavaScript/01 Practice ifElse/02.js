// Take a number.
// • If divisible by 3 and 5 → print "Divisible by 3 and 5"
// • If divisible by only 3 → print "Divisible by 3"
// • If divisible by only 5 → print "Divisible by 5"
// • Else → print "Not divisible by 3 or 5"

let num = 25


if (num % 3 == 0 && num % 5 == 0) {
    console.log("Divisible by 3 and 5")
} else if (num % 3 == 0) {
    console.log("Divisible by 3")
} else if (num % 5 == 0) {
    console.log("Divisible by 5")
} else {
    console.log("Not divisible by 3 or 5")
}