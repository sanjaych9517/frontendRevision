// 6. Factorial 
// Find the factorial of a number using while. 

let num = 5;
let sum = 1;


if (num < 0) {
    console.log("Enter a positive number")
} else {
    while (num > 0 || num === 1) {
        sum = sum * num;
        num--;
    }
    console.log(sum)
}
