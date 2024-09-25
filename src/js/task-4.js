
const formElem = document.querySelector('form')

formElem.addEventListener('submit', onFormSubmit)

function onFormSubmit(e){
    e.preventDefault();
    const emailInput = formElem.elements.email.value.trim();
    const passwordInput = formElem.elements.password.value.trim();
    if(!emailInput || !passwordInput){
        alert('All form fields must be filled in')
    } else {
        const formObj = {
            userEmail: emailInput,
            userPassword: passwordInput,
        }
        console.log(formObj);
        formElem.reset();
    }   
}
