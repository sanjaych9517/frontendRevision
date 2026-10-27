// // let h1 = document.querySelector('h1')
// // h1.tag = 'p'
// // console.log(h1.tagName)
// // h1.innerText = "baki jo bacha tha kale chor le gaye"
// // console.log(h1.innerText)
// // console.log(h1.textContent)

// // h1.innerHTML= "<p>baki jo bacha tha kale more le gaye</p>"

// // console.log(h1.innerHTML)
// // console.log(h1.firstChild)

// // console.log(h1.tagName);
// // console.log(h1.nodeName)
// // console.log(h1.innerText)
// // console.log(h1.textContent)
// // console.log(h1.innerHTML)

// // ------------------------------------------Inserting Element ------------------------------------

// // let div = document.querySelector("div");
// let elem1 = document.createElement("p");
// // console.log(elem1);
// elem1.innerText = "new elem1Graph";
// // div.append(elem1);

// // let elem2 = document.createElement('p')
// // elem2.textContent = "new insertrd heading"
// // div.prepend(elem2)

// // // div.after(elem1)
// // div.before(elem2)

// // div.insertAdjacentElement('beforebegin', elem1)
// // div.insertAdjacentElement("afterbegin", elem1);
// // div.insertAdjacentElement("beforeend", elem1);
// // div.insertAdjacentElement("afterend", elem1);

// // div.remove()
// // let p = div.children[1]
// // p.remove()

// let para = document.querySelector("#alpha");
// alpha.style.backgroundColor = "blue";


// // let parentNode = alpha.parentNode;
// // parentNode.appendChild(elem1);

// let newElem = document.createElement("div");
// newElem.innerText = "new element";

// parentNode.replaceChild(newElem, alpha);

// parentNode.removeChild(newElem);


// Attributes

let div = document.querySelector(".box")
// console.log(div.Attribute)
// console.log(div.getAttribute('title'))
div.setAttribute("class","name")
console.log(div.attributes.class.value);
