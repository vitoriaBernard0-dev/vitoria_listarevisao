// Vitória Karoline de Carvalho Bernardo
function validarFormulario() {
    var nome = document.getElementById('nome').value.trim();
    var numeroCartao = document.getElementById('numeroCartao').value.trim();
    var cvv = document.getElementById('cvv').value.trim();
    var validade = document.getElementById('validade').value.trim();
    var errorNome = document.getElementById('errorNome');
    var errorNumeroCartao = document.getElementById('errorNumeroCartao');
    var errorCVV = document.getElementById('errorCVV');
    var errorValidade = document.getElementById('errorValidade');
    var isValid = true;

    if (nome === '') {
        errorNome.textContent = 'Por favor, preencha o nome no cartão.';
        isValid = false;
    } else {
        errorNome.textContent = '';
    }

    if (numeroCartao === '' || numeroCartao.length !== 16) {
        errorNumeroCartao.textContent = 'Por favor, preencha um número de cartão válido.';
        isValid = false;
    } else {
        errorNumeroCartao.textContent = '';
    }

    if (cvv === '' || cvv.length !== 3) {
        errorCVV.textContent = 'O CVV deve ter 3 dígitos.';
        isValid = false;
    } else {
        errorCVV.textContent = '';
    }

    if (validade === '' || !validarDataValidade(validade)) {
        errorValidade.textContent = 'Por favor, preencha uma data de validade válida no formato MM/AA.';
        isValid = false;
    } else {
        errorValidade.textContent = '';
    }

    return isValid;
}

function validarDataValidade(data) {
    var regexData = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    return regexData.test(data);
}
