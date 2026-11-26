// Export  student   name   , roll number, marks and course from one file to another file

let name = "Sanjay Chaudhary";
let roll_number = 101;
let marks = 82;
let course = "MERN full stack";

// create a default export function to check whether number is odd or even

function checkOddEven(num) {
  if (num % 2 === 0) {
    console.log("Number is even");
  } else {
    console.log("number is odd");
  }
}



export { name, roll_number, marks, course };
export default checkOddEven


// export an arrayy of employee object and display employee details into another file

const employees = [
  {
    id: 1,
    name: "Rahul",
    salary: 30000,
    city: "Lucknow",
  },
  {
    id: 2,
    name: "Amit",
    salary: 40000,
    city: "Noida",
  },
  {
    id: 3,
    name: "Priya",
    salary: 35000,
    city: "Gorakhpur",
  },
];

export { employees};
