// Create a function calculateSalary(basic = 20000, bonus = 5000) that returns the final salary.What happens when only the basic salary is provided ?

function calculateSalary(basic = 20000, bonus = 5000) {
    return basic + bonus;
}

console.log(calculateSalary()); 