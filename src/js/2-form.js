const STORAGE_KEY = "feedback-form-state";

const formData = {
    email: '',
    message: '',
}

const form = document.querySelector('.feedback-form')

form.addEventListener('input', onInputChange);

function onInputChange(){
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;

    saveToLocalStorage(STORAGE_KEY, formData)
}

form.addEventListener('submit', onSubmit)

function onSubmit(e){
    e.preventDefault();

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);

    form.reset();
}

function saveToLocalStorage(key, value){
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
}

function loadFromLocalStorage(key){
    const jsonData = localStorage.getItem(key);
    try {
        const data = JSON.parse(jsonData);
        return data;
    } catch (error) {
        return jsonData;
    }
}

function restoreInputData(){
    const data = loadFromLocalStorage(STORAGE_KEY) || {};
    form.elements.email.value = data.email;
    form.elements.message.value = data.message;
}

restoreInputData()