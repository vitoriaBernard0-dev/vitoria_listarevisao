// Vitória Karoline de Carvalho Bernardo
var itens = document.querySelectorAll("#listaItens li");
itens.forEach(function(item) {
    item.addEventListener("click", function() {
        itens.forEach(function(item) {
            item.classList.remove("destacado");
        });
        this.classList.add("destacado");
    });
});
