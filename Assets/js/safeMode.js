document.getElementById('year').textContent = new Date().getFullYear();

const mobileBtn = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const menuLinks = document.querySelectorAll('.nav-links a');

mobileBtn.addEventListener('click', () => {
  mobileBtn.classList.toggle('active');
  navLinks.classList.toggle('active');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileBtn.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

const observerOptions = {
  threshold: 0.2
};

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

document.querySelectorAll('.progress-fill').forEach(bar => {
  observer.observe(bar);
});