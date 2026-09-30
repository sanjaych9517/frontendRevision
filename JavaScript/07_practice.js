
let department = prompt("enter the department");
let sal = Number(prompt("Enter Your experience"));
let salary = Number(prompt("Enter Your salaey"));
let bonous = 0;

switch (department.toUpperCase()) {
    case IT:
        bonous =  20

        break;

    case HR:
        bonous =  10

        break;

    case Sales:
        bonous =  15

        break;

    case Finance:
        bonous =  12

        break;

    default:
        console.log("invalid department")
        break;

}

if(bonous > 0 && exp > 5){
   bonud = bonous+5;
}

let amount = salary*bonous;

let tot = salary + amount;

console.log("Bonous: " + bonous + "%")
console.log("bonous smount =" + amount)
console.log("Final salary: " + tot )