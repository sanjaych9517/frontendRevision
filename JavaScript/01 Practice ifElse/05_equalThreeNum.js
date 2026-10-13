// Take Three Number

// If all are equal → "All numbers are equal"
//     * If any two are equal → "Two numbers are equal"
//         * Else → "All numbers are different"

let num1, num2, num3;

num1 = 40;
num2 = 10;
num3 = 10;

if(num1 === num2 && num1 === num3){
    console.log("All numbers are equal");
} else if (num1 === num2 || num1 === num3 || num2 === num3) {
    console.log("Two numbers are equal");
}else{
    console.log("All numbers are different")
}