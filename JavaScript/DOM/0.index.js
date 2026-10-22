// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>Introduction to DOM</h1>
//     <h3 id="heading">This is a normal heading</h3>
//     <p class="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eveniet aspernatur fuga error, blanditiis eaque aut cupiditate voluptatem. Rem voluptas cupiditate vitae, molestias placeat optio repellendus recusandae illo itaque maiores.</p>
//     <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio similique odit quibusdam repudiandae tempore asperiores, autem ut ex aperiam error neque exercitationem debitis aspernatur tenetur in itaque a expedita iusto!</p>
//     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum porro rerum sit perferendis eveniet dolorem fugit inventore recusandae impedit dolore officiis illum ut, adipisci veniam. Ducimus molestiae sed recusandae alias.</p>
//     <img src="https://www.tutorialspoint.com/html/images/html_dom.jpg" alt="" class="image"> <br>
//     <button>Click Button</button>
//     <hr>
//     <ul class="list1">
//         <li>HTML</li>
//         <li>CSS</li>
//         <li>JS</li>
//     </ul>
//     <ul class="list2">
//         <li>Node</li>
//         <li>Express</li>
//         <li>Mongo</li>
//     </ul>
    
//     <script>
//        let heading =  document.getElementById("heading")
//        console.log(heading)
//     //    update content -> innerText
//     heading.innerText = "This is the new content using DOM";

//     let para = document.getElementsByClassName("para")
//     console.log(para)
//     // para[0].innerText = "This is the new paragraph content...1"
//     // para[1].innerText = "This is the new paragraph content...2"
//     for(let i = 0;i < para.length;i++){
//         para[i].innerText =   "This is new paragraphh content."
//     }

//     let image = document.querySelector(".image")
//     console.log(image)
//     image.src = "https://www.w3schools.com/js/img_htmltree_800.svg";

//     let paragraph = document.querySelector(".para")
//     console.log(paragraph)

//     // let list = document.getElementsByTagName("li")
//     let lists = document.querySelectorAll(".list2 li")
//     console.log(lists)

//     </script>
// </body>
// </html>
// <!-- 
// DOM in JS: DOM stands for Document Object Model. DOM alloows us to interact and manipulate with html elements directly
// without dom concept we cann't modify(add,update,delete) html element's content/styles

// eg.
// hello students
// button -> change color
// when you click on button -> Welcome to JavaScript

// -------------------------------------------------------------------------------------------
// 1. target element
// 2. store that element into js variable
// 3. Manipulation

// How to target element?
// 1. id selector: getElementById() - single element property change
// 2. class selector: getElementsByClassName() - target multiple elements, return array
// 3. element selector: getElementsByTagName() - target element(s) - return array

// 4. querySelector: querySelector(".para") - target first match element/selector
// multiple p,li,...
// you want to target 1st p 
// 5. querySelectorAll: querySelectorAll("div h3/.list li")

// -----------------------------------------------------------------------------------------
// Try all selectors and change the content/images of targeted elements 
// --></img>