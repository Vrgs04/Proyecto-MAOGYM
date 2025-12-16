// main.js
// Comportamiento de la landing: slider, menú responsive y modales de contacto.

const products = [
  {
    id: 'p1',
    title: 'Bowl de quinoa y pollo',
    price: 12.5,
    description: 'Receta saludable lista en 15 minutos.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    tags: ['saludable'],
    vendor: {
      name: 'Laura Chef',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
      contact: '+57 300 111 2233'
    }
  },
  {
    id: 'p2',
    title: 'Hamburguesa artesanal',
    price: 9.99,
    description: 'Pan brioche, carne angus y salsas caseras.',
    image: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=800&q=80',
    tags: ['rapida'],
    vendor: {
      name: 'Laura Chef',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
      contact: '+57 300 111 2233'
    }
  },
  {
    id: 'p3',
    title: 'Croissants de mantequilla',
    price: 7.5,
    description: 'Hojaldre crujiente recién horneado.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['postres'],
    vendor: {
      name: 'Panadería París',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      contact: 'ventas@paris.com'
    }
  },
  {
    id: 'p4',
    title: 'Box de frutas orgánicas',
    price: 15.0,
    description: 'Selección semanal de frutas de temporada.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    tags: ['saludable', 'vegano'],
    vendor: {
      name: 'Huerta Verde',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      contact: '+57 311 444 5566'
    }
  },
  {
    id: 'p5',
    title: 'Cold brew con cacao',
    price: 5.5,
    description: 'Infusión lenta con notas de cacao y naranja.',
    image: 'https://images.unsplash.com/photo-1481391194949-4d63c38778aa?auto=format&fit=crop&w=800&q=80',
    tags: ['bebidas', 'vegano'],
    vendor: {
      name: 'Café Bruma',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      contact: 'cafe@bruma.co'
    }
  },
  {
    id: 'p6',
    title: 'Tacos de birria lenta',
    price: 13.0,
    description: 'Estofado de res con especias, tortillas hechas a mano.',
    image: 'https://images.unsplash.com/photo-1608039858984-738af0cfa55b?auto=format&fit=crop&w=800&q=80',
    tags: ['rapida'],
    vendor: {
      name: 'Sazón Norte',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80',
      contact: 'wa.me/573154445566'
    }
  },
  {
    id: 'p7',
    title: 'Bao de portobello glaseado',
    price: 11.0,
    description: 'Hongos caramelizados, pepino encurtido y mayonesa de miso.',
    image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=800&q=80',
    tags: ['vegano', 'gourmet'],
    vendor: {
      name: 'Nube Umami',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
      contact: 'hola@nubeumami.com'
    }
  },
  {
    id: 'p8',
    title: 'Cheesecake de maracuyá',
    price: 8.25,
    description: 'Base de galleta con topping cítrico y cremoso.',
    image: 'https://images.unsplash.com/photo-1475856033578-76b4a180a6a5?auto=format&fit=crop&w=800&q=80',
    tags: ['postres', 'gourmet'],
    vendor: {
      name: 'Dulce Búho',
      avatar: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80',
      contact: 'pasteles@dulcebuho.com'
    }
  }
];

const vendors = [
  {
    id: 'u2',
    name: 'Laura Chef',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    bio: 'Comida casera saludable',
    contact: '+57 300 111 2233'
  },
  {
    id: 'u4',
    name: 'Panadería París',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    bio: 'Pan artesanal y repostería',
    contact: 'ventas@paris.com'
  },
  {
    id: 'u5',
    name: 'Huerta Verde',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    bio: 'Canastas orgánicas con cosecha local',
    contact: '+57 311 444 5566'
  },
  {
    id: 'u6',
    name: 'Café Bruma',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    bio: 'Bebidas frías y métodos filtrados',
    contact: 'cafe@bruma.co'
  },
  {
    id: 'u7',
    name: 'Sazón Norte',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80',
    bio: 'Tacos y antojitos del norte',
    contact: 'wa.me/573154445566'
  },
  {
    id: 'u8',
    name: 'Nube Umami',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    bio: 'Fusión asiática con verduras de temporada',
    contact: 'hola@nubeumami.com'
  },
  {
    id: 'u9',
    name: 'Dulce Búho',
    avatar: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80',
    bio: 'Postres cremosos y pastelería moderna',
    contact: 'pasteles@dulcebuho.com'
  }
];

const productGrid = document.getElementById('product-grid');
const vendorGrid = document.getElementById('vendor-grid');
const modal = document.getElementById('contact-modal');
const contactInfo = document.getElementById('contact-info');
const modalClose = document.querySelector('.contact-modal__close');
const chips = document.querySelectorAll('.chip');
let currentFilter = 'all';

function renderProducts() {
  if (!productGrid) return;
  const list = currentFilter === 'all'
    ? products
    : products.filter((p) => p.tags?.includes(currentFilter));

  productGrid.innerHTML = list.map((p) => `
    <article class="card product">
      <img src="${p.image}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="product__meta">
        <span class="price">$${p.price.toFixed(2)}</span>
        <div class="product__seller">
          <img src="${p.vendor.avatar}" alt="${p.vendor.name}">
          <span>${p.vendor.name}</span>
        </div>
      </div>
      <button class="btn btn--ghost" data-contact="${p.vendor.contact}">Contactar vendedor</button>
    </article>
  `).join('');
}

function renderVendors() {
  if (!vendorGrid) return;
  vendorGrid.innerHTML = vendors.map((v) => `
    <article class="card vendor">
      <img src="${v.avatar}" alt="${v.name}">
      <div>
        <h3>${v.name}</h3>
        <p>${v.bio}</p>
        <small>Contacto: ${v.contact} · Perfil público: /vendedor/${v.id}</small>
      </div>
    </article>
  `).join('');
}

// Slider automático
const slides = Array.from(document.querySelectorAll('.slide'));
const dotsContainer = document.querySelector('.slider__dots');
let current = 0;

function buildDots() {
  slides.forEach((_, idx) => {
    const btn = document.createElement('button');
    btn.setAttribute('aria-label', `Ir al slide ${idx + 1}`);
    btn.addEventListener('click', () => goToSlide(idx));
    dotsContainer.appendChild(btn);
  });
}

function goToSlide(index) {
  slides[current].classList.remove('active');
  dotsContainer.children[current].classList.remove('active');
  current = index;
  slides[current].classList.add('active');
  dotsContainer.children[current].classList.add('active');
}

function startSlider() {
  if (!slides.length || !dotsContainer) return;
  dotsContainer.innerHTML = '';
  buildDots();
  goToSlide(0);
  setInterval(() => {
    const next = (current + 1) % slides.length;
    goToSlide(next);
  }, 5500);
}

// Modal de contacto
function openModal(contact) {
  contactInfo.textContent = contact;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}
function closeModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
}

// Formularios (demostrativo: imprime la respuesta del backend)
async function handleRegister(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target));
  const res = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const json = await res.json();
  alert(json.message || 'Usuario creado, revisa la consola.');
  console.log('Registro', json);
}

async function handleLogin(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target));
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const json = await res.json();
  if (res.ok) {
    alert(`Bienvenido ${json.user.name}. Rol: ${json.user.role}`);
    // Aquí podrías redirigir según rol
    // if (json.user.role === 'admin') window.location = '/admin';
  } else {
    alert(json.message || 'Error de inicio de sesión');
  }
  console.log('Login', json);
}

// Menú responsive
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) menuToggle.addEventListener('click', () => nav.classList.toggle('open'));

// Delegación de eventos
if (productGrid) {
  productGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-contact]');
    if (btn) openModal(btn.dataset.contact);
  });
}
if (chips.length) {
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilter = chip.dataset.filter || 'all';
      renderProducts();
    });
  });
}
if (modalClose) modalClose.addEventListener('click', closeModal);
if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
if (registerForm) registerForm.addEventListener('submit', handleRegister);
if (loginForm) loginForm.addEventListener('submit', handleLogin);

renderProducts();
renderVendors();
startSlider();
