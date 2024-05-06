document.getElementById('cadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    const regexNome = /^[^\d]+$/;
    const regexEmail  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefone = /^[1-9]{2}[2-9][0-9]{3,4}[0-9]{4}$/;

    const nome = document.getElementById ('nome').value;
    const email = document.getElementById ('email').value;
    const celular = document.getElementById ('celular').value;

    // Validando o nome
    if (!regexNome.test(nome)) {
        alert('Por favor, insira um nome válido (sem números).');
        return;
    }

    // Validando o email
    if (!regexEmail.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    // Validando o telefone
    if (!regexTelefone.test(celular)) {
        alert('Por favor, insira um telefone válido (com DDD no padrão brasileiro).');
        return;
    }

    alert('Formulário enviado com sucesso!');
});