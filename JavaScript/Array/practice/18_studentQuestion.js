let marks = [78, 35, 92, 28, 65, 40, 19, 88]
let pass = 0;
let fail = 0
let total = 0

for (let i = 0; i < marks.length; i++) {
    total += marks[i]
    if (marks[i] >= 40) {
        console.log("passed: " + marks[i])
        pass++
    } else {
        console.log("failed" + fail)
    }


}

