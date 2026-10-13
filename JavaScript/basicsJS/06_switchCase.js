// Switch case/statements: The switch statement in JS is a conditional statement used to execute one block of code from multiple possible blocks.
// it is alternative to using multiple if-else if statements when we need to compare one expression against several possible values

// syntax:
// switch (expression / key) {
//     case value1:
//         // code to be executed

//         break;

//     case value2:
//         // code to be executed

//         break;

//     default:
//         // remaining part to be executed
//         break;
// }
// console.log("Switch End")

// Print the day of the week
// let day = 8;
// switch (day) {
//     case 1:
//         console.log("Monday")

//         break;
//     case 2:
//         console.log("Tuesday")

//         break;
//     case 3:
//         console.log("Wednesday")

//         break;
//     case 4:
//         console.log("Thursday")

//         break;
//     case 5:
//         console.log("Friday")

//         break;
//     case 6:
//         console.log("Saturday")

//         break;
//     case 7:
//         console.log("Sunday")

//         break;

//     default:
//         console.log("Invalid day")
//         break;
// }

// switch with string values

// let fruit = "banana";
// switch (fruit) {
//     case "apple":
//         console.log("You like apple")

//         break;
//     case "orange":
//         console.log("You like orange")

//         break;
//     case "cherry":
//         console.log("You like cherry")

//         break;

//     default:
//         console.log("you don't like any of these fruits")
//         break;
// }

// 1. Create calculator using switch for addition,subtraction,multiplication,and division
// let num1;
// let num2;
// let operator = "+";
// 2. WAC that accepts a number from 1 to 7 and prints whether it is a weekday or weekend
let day;
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday")
        break;
    case 6:
    case 7:
        console.log("Weekend")
        break; default:
        console.log("Invalid day")
        break;
}

// 3. ATM Menu: - user input
// Create an ATM menu using switch:
// 1. Check balance
// 2. Deposit money
// 3. Withdraw money
// 4. Exit.
// Display the apporpriate message for each choice
let choice = parseInt(prompt("ATM MENU:\n1.Check balance \n2. Deposit Money \n3. Withdraw Money \n4. Exit \n Enter Your Choice:")) 