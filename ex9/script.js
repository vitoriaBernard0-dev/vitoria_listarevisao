// Vitória Karoline de Carvalho Bernardo

document.getElementById('animateButton').addEventListener('click', function() {
    let button = document.getElementById('animateButton');
    button.classList.remove('animate');
    void button.offsetWidth; // Força o reflow
    button.classList.add('animate');
});
