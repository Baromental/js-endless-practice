// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input)
// підставляє його поточне значення в span#name-output як ім’я для привітання. 
// Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або
// містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".



const inputElem = document.querySelector('input');
const spanElem = document.querySelector('span');

inputElem.addEventListener('input', onInput)

function onInput(event) {
    const inputValue = event.currentTarget.value.trim();
    spanElem.textContent = inputValue || 'Anonymous';
    // ? inputValue : 'Anonymous';
    // if (spanElem.textContent === 0 || inputValue === 0) {
    //     spanElem.textContent = 'Anonymous';
    // } else {
    //     spanElem.textContent = inputValue;
    // }
}
