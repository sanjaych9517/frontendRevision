let randomBtn = document.querySelector(".randomBtn");
let colorInput = document.querySelector("#colorInput");
let applyBtn = document.querySelector(".applyBtn");
let currentColorValue = document.querySelector(".currentColorValue");
let contianer = document.querySelector(".contianer");

const colorArray = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F1C40F",
  "#9B59B6",
  "#1ABC9C",
  "#E74C3C",
  "#34495E",
  "#E67E22",
  "#2ECC71",
  "#3498DB",
  "#E84393",
  "#6C5CE7",
  "#00CEC9",
  "#FAB1A0",
  "#ffeaa7",
  "#55efc4",
  "#74b9ff",
  "#a29bfe",
  "#fd79a8",
];

const generateRandomColor = () => {
  const rendomNumber = Math.floor(Math.random() * colorArray.length);
  return colorArray[rendomNumber];
};

const changeColor = (color) => {
  contianer.style.backgroundColor = color;
  currentColorValue.innerText = color;
};

const handleRandomButtonClick = () => {
  const color = generateRandomColor()
    changeColor(color);
  
};
const handleApplyButtonClick = () => {
  const color = colorInput.value;
  changeColor(color);
};

randomBtn.addEventListener("click", handleRandomButtonClick);
applyBtn.addEventListener("click", handleApplyButtonClick);
