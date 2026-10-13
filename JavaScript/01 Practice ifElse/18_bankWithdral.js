let balance = 5000;
let withdral = 1000;
if(withdral <=0){
console.log("Invalid withdral ammount")
} else if (withdral > balance){
console.log("Insufficient balance")
}else if(balance -withdral < 1000){
console.log("Minimum balance of 1000 ")
}