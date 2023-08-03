const emailInput = document.getElementById('email');
const notifyButton = document.getElementById('notify');
const errorMessage = document.querySelector('.error-text');
const successMessage = document.querySelector('.success-text');

notifyButton.addEventListener('click', () => {
    if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        errorMessage.classList.add('active')
        successMessage.classList.remove('active')
        emailInput.classList.add('incorrect')
        emailInput.classList.remove('correct')
    } else {
        errorMessage.classList.remove('active')
        successMessage.classList.add('active')
        emailInput.classList.remove('incorrect')
        emailInput.classList.add('correct')
    }
})