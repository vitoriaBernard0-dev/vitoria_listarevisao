// Vitória Karoline de Carvalho Bernardo

document.addEventListener('DOMContentLoaded', function() {
    function filterGallery(category) {
        let items = document.querySelectorAll('.gallery-item');
        if (category === 'all') {
            items.forEach(item => {
                item.classList.add('show');
            });
        } else {
            items.forEach(item => {
                if (item.classList.contains(category)) {
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                }
            });
        }
    }

    // Adiciona eventos de clique aos botões de filtro
    let filterButtons = document.querySelectorAll('.filter-buttons button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            let category = this.getAttribute('data-category');
            filterGallery(category);
        });
    });

    // Mostrar todos os itens por padrão
    filterGallery('all');
});
