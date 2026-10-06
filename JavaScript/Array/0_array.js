// Array:
// let programming_language = ["C++", "JavaScript", "Python", "TypeScript", "PHP"]
// total no of element - 5
// access JavaScript
// console.log(programming_language[3])
// console.log(programming_language.length)
// console.log(programming_language)

// modifying array
// Java
// programming_language.push("Java") // insert in last index
// programming_language.unshift("Java"); // insert in 0th index
// programming_language.pop(); // remove from last index
// programming_language.pop();
// programming_language.shift(); // remove from 0th index

// for specific index - splice()
// programming_language.splice(2, 1); // remove..... (indexing,number of elm(s) you want to remove)
// programming_language.splice(3, 0, "Java") // indexing,0,"new element"
// programming_language.splice(2, 1, "Java") // indexing,1,"updated element"
// console.log(programming_language)

// let programming_language = ["C++", "JavaScript", "Python", "TypeScript", "PHP"]
// let frameworks = ["React", "Angular", "Django"]
// // merge two or more array/copy/add/concat - concat() - it'll not change/update the original array
// let mergedArr = programming_language.concat(frameworks)
// console.log(mergedArr)

// array to string - join()
// let frameworks = ["React", "Angular", "Django"]
// let arrToStr = frameworks.join(", ")
// console.log(arrToStr)
// string to array - split()
// let language = "javascript";
// let strToArr = language.split("");
// console.log(strToArr)


// slice(): extract part of an array element
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]
// 20, 30, 40, 50
// let newArr = numbers.slice(1, 5); // (starting index, from where to remove
// 40, 50, 60, 70, 80
// let newArr = numbers.slice(3, 8);
// 10, 20, 30, 40, 50, 60
let newArr = numbers.slice(0, 6);
console.log(newArr)