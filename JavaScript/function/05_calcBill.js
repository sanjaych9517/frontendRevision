// function calculateBill(price = 100, quantity = 1) {
//     return price * quantity;
// }


// console.log(calculateBill());       
// console.log(calculateBill(200));    
// console.log(calculateBill(200, 3)); 
// console.log(calculateBill(undefined, 2)); 

function createCounter() {
    let count = 0;

    return function (operation) {
        if (operation === "inc") {
            count++;
        } else if (operation === "dec") {
            count--;
        }

        return count;
    };
}

// Testing
const counter = createCounter();

console.log(counter("inc")); // 1
console.log(counter("inc")); // 2
console.log(counter("inc")); // 3
console.log(counter("dec")); // 2
console.log(counter("dec")); // 1
