//  < !--Take two numbers.
// * If both are positive → print "Both numbers are positive"
//     * If both are negative → print "Both numbers are negative"
//         * Else → print "One positive and one negative" -- >



let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));

console.log(num1);
console.log(num2);

if (num1 > 0 && num2 > 0) {
    console.log(" Both number are positive");
} else if (num1 < 0 && num2 < 0) {
    console.log("Both number are negative");
} else {
    console.log("One positive one negative");
}