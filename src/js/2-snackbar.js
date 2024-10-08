import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e){
    e.preventDefault()
    const delayInput = document.querySelector('input[name="delay"]');
    const delayValue = +delayInput.value;
    const stateInput = document.querySelector('input[name="state"]:checked');
    const stateValue = stateInput.value;
    function createPromise(userVariant, delay) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userVariant === 'fulfilled') {
                    resolve('Success');
                } else {
                    reject('Error');
                }
            }, delay);
        });
        promise
        .then(data =>{
            iziToast.show({
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: 'topRight',
                timeout: delay,
              });
        })
        .catch(error =>{
            iziToast.error({
                message: `❌ Rejected promise in ${delay}ms`,
                position: 'topRight',
                timeout: delay,
              });
        })
    }
    createPromise(stateValue, delayValue)
}