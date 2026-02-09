// --- ACTUALIZAR AÑO EN FOOTER ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- REFERENCIAS DOM ---
const mobileBtn = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const menuLinks = document.querySelectorAll('.nav-links a');

// --- MENÚ MÓVIL ---
// Toggle del menú cuando se hace click en el botón
mobileBtn.addEventListener('click', () => {
  mobileBtn.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Cerrar el menú cuando se hace click en un enlace
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileBtn.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// --- ANIMACIÓN DE BARRAS DE PROGRESO ---
// Configuración del Intersection Observer
const observerOptions = {
  threshold: 0.2
};

// Animar barras de progreso cuando se hacen visibles en pantalla
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const targetWidth = bar.getAttribute('data-width');
      bar.style.width = targetWidth;
      observer.unobserve(bar);
    }
  });
}, observerOptions);

// Observar todos los elementos con clase progress-fill
document.querySelectorAll('.progress-fill').forEach(bar => {
  observer.observe(bar);
});