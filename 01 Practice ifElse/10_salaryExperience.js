// Q10.
// Take salary and experience.
// * salary ≥ 50000 AND experience ≥ 5 → "Senior Level"
//     * salary ≥ 30000 AND experience ≥ 2 → "Mid Level"
//         * salary ≥ 15000 → "Junior Level"
//             * Else → "Not eligible"

let salary = 40000;
let exp = 5;

if (salary >= 50000 && exp >= 5) console.log("Senior Level")
else if (salary >= 30000 && exp >= 2) console.log("Mid Level")
else if (salary >= 15000 ) console.log("Junior Level")
else console.log("Not eligible")