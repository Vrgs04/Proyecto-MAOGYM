const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.sidebar__toggle');
const nav = sidebar?.querySelector('nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.style.display === 'block';
    nav.style.display = isOpen ? 'none' : 'block';
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });
}
