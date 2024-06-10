// Vitória Karoline de Carvalho Bernardo

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    alert('Formulário enviado com sucesso!');
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor

    this.reset(); // Reseta o formulário após o envio
});
