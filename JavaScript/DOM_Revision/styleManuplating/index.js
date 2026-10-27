let div = document.querySelector('div')
// div.setAttribute('class', "redBG")

// div.style.backgroundColor="blue"
// div.style.fontSize = '60px'

// div.style.cssText = "background-color:blue; font-size:60px"

// div.className = "redBG"

div.classList.add("redBG")
div.classList.add("blueBG")
console.log(div.className)
div.classList.remove('blueBG')
console.log(div.className);
