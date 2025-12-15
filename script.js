const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.sidebar__toggle');
const nav = sidebar?.querySelector('nav');
const menuLinks = document.querySelectorAll('.menu__item');
const sections = document.querySelectorAll('[data-section]');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.style.display === 'block';
    nav.style.display = isOpen ? 'none' : 'block';
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });
}

const setActiveLink = (targetId) => {
  menuLinks.forEach((link) => {
    const isActive = link.dataset.target === targetId;
    link.classList.toggle('menu__item--active', isActive);
  });
};

menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = link.getAttribute('href');
    const section = document.querySelector(target);
    if (section) {
      event.preventDefault();
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveLink(link.dataset.target);
      if (window.innerWidth <= 920 && nav) {
        nav.style.display = 'none';
      }
    }
  });
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  }, {
    rootMargin: '-40% 0px -45% 0px',
    threshold: 0.25,
  });

  sections.forEach((section) => observer.observe(section));
}
