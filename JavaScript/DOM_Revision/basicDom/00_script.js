/*
  5 Phases of Dom Manuplation

1. DOM
2. Selection of HTML element
3. How to change or manuplate HTML
4. CSS ko kaose change kar sakte hai
5. Event Listeners {event ko kaise suna jaye} 

*/
// 1. DOM
// let h1=document.querySelector("h1")
// console.log(h1);

// h1.innerHTML = "meri hai he nhi"

// let p = document.querySelector("p")
// p.innerHTML = "hello kya hall hai lorem"
// console.log(para)

// let h1 = document.querySelector('h1')
// h1.style.backgroundColor = "green"
// h1.style.color = "black"

// let h1 = document.querySelector("h1");
// h1.addEventListener("click", () => {
//   h1.style.backgroundColor = "green";
//   h1.style.color = "black";
//   h1.innerHTML = "mast hai";
// });

let box = document.querySelector("p");

let on = document.querySelector("button");
on.addEventListener("click", () => {
  box.style.backgroundColor = "yellow";
});

let off = document.querySelector(".offButton");
off.addEventListener("click", () => {
  box.style.backgroundColor = "black";
});

