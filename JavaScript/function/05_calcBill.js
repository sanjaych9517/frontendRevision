function calculateBill(price = 100, quantity = 1) {
    return price * quantity;
}


console.log(calculateBill());       
console.log(calculateBill(200));    
console.log(calculateBill(200, 3)); 
console.log(calculateBill(undefined, 2)); 