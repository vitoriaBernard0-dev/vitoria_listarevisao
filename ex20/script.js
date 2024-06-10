// Vitória Karoline de Carvalho Bernardo

document.getElementById('fileInput').addEventListener('change', function(event) {
    const files = event.target.files;
    const preview = document.getElementById('preview');
    preview.innerHTML = '';

    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            preview.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
});

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Arquivos prontos para envio!');
});
