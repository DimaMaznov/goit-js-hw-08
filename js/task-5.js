
const changeBtnColor = document.querySelector(".change-color");

const changeBodyColor = document.querySelector("body");
const spanColor = document.querySelector(".color");
changeBtnColor.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  
  const color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

    changeBodyColor.style.backgroundColor = color;
spanColor.textContent = color;
}
