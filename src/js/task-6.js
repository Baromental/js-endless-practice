const boxesElem = document.querySelector('#boxes')
const inputElem = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');


inputElem.addEventListener('input', onInput)
createBtn.addEventListener('click', onBtnCreate)
destroyBtn.addEventListener('click', onBtnDestroy)

function onInput(e) {
  return +inputElem.value
}

function onBtnCreate(){
  onBtnDestroy();
  let boxAmount = onInput();
  const markupCreate = [];
  let width = 30;
  let height = 30;
  if (boxAmount > 0 && boxAmount <= 100) {
    for (let i = 0; i < boxAmount; i++) {
      const box = document.createElement('div')
      box.style.width = `${width}px`;
      box.style.height = `${height}px`;
      box.style.backgroundColor = getRandomHexColor();
      markupCreate.push(box);

      width += 10;
      height += 10;
    }
  }

  boxesElem.append(...markupCreate)

  inputElem.value = '';
}

function onBtnDestroy(){
  boxesElem.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}