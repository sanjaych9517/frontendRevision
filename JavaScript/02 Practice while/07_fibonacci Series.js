// 7. Fibonacci series
// Print Fibonacci series up to N terms using while 

let num1 = 0;
let num2 = 1;
let term = 1;
let sum = 0;

if (num1 >= 0 && num2 >= 0) {
    while (term <= 6) {
        sum = num1 + num2;

        num1 = num2
        num2 = sum
        term++
    }
    console.log(sum)
} else {
    console.log("Please enter positive number")
}

