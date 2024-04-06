const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const small = document.getElementById('small');
const main = document.getElementById('main');
const sectionSuccess = document.querySelector('.section__success');
const dismissMessage = document.getElementById('dismiss-message');
console.log(dismissMessage);

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    if (!validateEmail(email)) {
        emailInput.classList.add('error');
        emailInput.value = 'ash@loremcompany.com';
        small.innerHTML = 'Valid email required';
        small.classList.add('error');
    } else {
        main.style.display = 'none';
        small.innerHTML = '';
        small.classList.remove('error');
        emailInput.classList.remove('error');
        emailInput.value = '';
        sectionSuccess.classList.add('success');
    }
});


dismissMessage.addEventListener('click', () => {
    sectionSuccess.classList.remove('success');
    main.style.display = 'flex';
    small.innerHTML = '';
    small.classList.remove('error');
    emailInput.classList.remove('error');
    emailInput.value = '';
    dismissMessage.removeEventListener('click', () => {
        sectionSuccess.classList.remove('success');
        main.style.display = 'flex';
        small.innerHTML = '';
        small.classList.remove('error');
        emailInput.classList.remove('error');
        emailInput.value = '';
    })
});