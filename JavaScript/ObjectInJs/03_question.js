// create a function that returns an object with increment(), decrement(), and getCount() methods. Use a clouser to maintain count


// function obj() {
//     let count = 0
//     return {
//         increment() {
//             count++
//             return count
//         },
//         decrement() {
//             count--
//             return count
//         },
//         getCount() {
//             return count
//         }

//     }
// }

// let res = obj()
// console.log(res.getCount())
// console.log(res.increment())
// console.log(res.increment())
// console.log(res.decrement())
// console.log(res.getCount())

// ------------------------------------------------------


// create function create bank account() the return an object with Deposit(), withdraw(), 
// getBalance() method  the balance must remain private

function createBankAccount() {
    let totalAmount = 1000
    return {
        deposit(amount) {
            totalAmount -= amount
            return totalAmount
        },
        withdraw(amount) {
            totalAmount += amount
            return totalAmount
        },
        getBalance() {
            return totalAmount
        }
    }
}

let totalBalance = createBankAccount()
console.log(totalBalance.deposit(50))
console.log(totalBalance.withdraw(500))
console.log(totalBalance.withdraw(500))
console.log(totalBalance.deposit(300))
console.log(totalBalance.getBalance())