let cEven = 0;
let cOdd = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        cEven += 1;
    } else {
        cOdd += 1
    }

}
console.log('Total even number = ' + cEven)
console.log('Total odd number = ' + cOdd)