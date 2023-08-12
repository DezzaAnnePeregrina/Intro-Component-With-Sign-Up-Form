const form = document.querySelector('form');
const inputs = document.getElementsByClassName('inputs');
const errorMessage = document.querySelectorAll('.message');
const message = document.querySelector('.validity__Message');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checkValidity()) {
            inputs[i].style.borderColor = 'green';
            errorMessage[i].classList.add('hidden');
            inputs[i].classList.remove('errorState');
        } else {
            inputs[i].style.borderColor = 'red';
            errorMessage[i].classList.remove('hidden');
            inputs[i].classList.add('errorState');
        }
    }

    if (!form.checkValidity()) {
        message.textContent = 'Please fill out all error fields';
        message.style.color = 'red';
        return;
    }

    message.textContent = 'Free trial claimed!';
    message.style.color = 'green';
});