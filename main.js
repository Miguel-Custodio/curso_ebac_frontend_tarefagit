const form = document.getElementById('form-exercicio');
const numberA = document.getElementById('campo-a');
const numberB = document.getElementById('campo-b');
const containerMensagemSucesso = document.querySelector('.success-message');

function validaNumber() {
    return Number(numberB.value) > Number(numberA.value);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `O numero B: <b>${numberB.value}</b> é MAIOR que o numero A: <b>${numberA.value}</b>`;
    const formEValido = validaNumber();

    if (formEValido) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numberA.value = '';
        numberB.value = '';
    } else {
        numberA.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
});

numberB.addEventListener('keyup', function(e) {
    const formEValido = validaNumber();

    if (!formEValido) {
        numberB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        numberB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});
