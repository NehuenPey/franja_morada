// MENU MOBILE
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

// Abrir / cerrar menú principal
toggle.addEventListener("click", (e) => {
  e.stopPropagation();
  nav.classList.toggle("show");
});

// DROPDOWNS (solo mobile)
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

dropdownToggles.forEach(item => {
  item.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      e.stopPropagation();

      const menu = item.nextElementSibling;
      menu.classList.toggle("show");
    }
  });
});

// CLICK FUERA → cerrar todo
document.addEventListener("click", () => {
  nav.classList.remove("show");

  document.querySelectorAll(".dropdown-menu.show").forEach(menu => {
    menu.classList.remove("show");
  });
});

// Evita que clicks dentro del menú lo cierren
nav.addEventListener("click", (e) => {
  e.stopPropagation();
});