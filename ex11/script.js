// Vitória Karoline de Carvalho Bernardo
function toggleNavbar() {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("responsive");
  var icon = document.querySelector(".icon i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
}
