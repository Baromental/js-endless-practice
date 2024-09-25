const bodyElem = document.querySelector('body')
const btnBackground = document.querySelector('.change-color');
const spanElem = document.querySelector('.color')

btnBackground.addEventListener('click', onBtnClick)

function onBtnClick(e) {
  const newColor = getRandomHexColor();
  bodyElem.style.backgroundColor = newColor;
  spanElem.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}