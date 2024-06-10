// Vitória Karoline de Carvalho Bernardo 
document.getElementById('meuFormulario').addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    Swal.fire({
        icon: 'success',
        title: 'Envio com sucesso!',
        text: 'Seu formulário foi enviado com sucesso.',
        confirmButtonText: 'OK',
        backdrop: `
            rgba(0,0,123,0.4)
            url("https://media.giphy.com/media/dJtUvIqXpXRxxE4lm1/giphy.gif")
            left top
            no-repeat
        `
    });
});
