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
    vendorId: 'u2',
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
    vendorId: 'u2',
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
    vendorId: 'u4',
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
    vendorId: 'u5',
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
    vendorId: 'u6',
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
    vendorId: 'u7',
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
    vendorId: 'u8',
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
    vendorId: 'u9',
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
let session = { token: null, user: null };
let activeChatWith = null;

// Permite apuntar a otra API si el HTML se abre como archivo local o desde otro puerto
// Usa window.__PHASVY_API__ para sobreescribir manualmente el endpoint
const API_BASE =
  window.__PHASVY_API__ ||
  (window.location.protocol === 'file:' ? 'http://localhost:4000' : '') ||
  '';

const sessionStatus = document.getElementById('session-status');
const notificationList = document.getElementById('notification-list');
const notificationBadge = document.querySelector('[data-notification-badge]');
const chatThreads = document.getElementById('chat-threads');
const chatMessages = document.getElementById('chat-messages');
const chatForm = document.getElementById('chat-form');
const chatText = document.getElementById('chat-text');
const demoLoginButtons = document.querySelectorAll('[data-demo-login]');

const persistSession = () => {
  if (session?.token && session?.user) {
    localStorage.setItem('phasvy_session', JSON.stringify(session));
  } else {
    localStorage.removeItem('phasvy_session');
  }
};

const restoreSession = () => {
  const stored = localStorage.getItem('phasvy_session');
  if (stored) {
    try {
      session = JSON.parse(stored);
    } catch (_) {
      session = { token: null, user: null };
    }
  }
};

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
      <div class="product__actions">
        <button class="btn btn--ghost" data-contact="${p.vendor.contact}">Contactar vendedor</button>
        <button class="btn btn--primary" data-chat="${p.vendor.name}" data-user="${p.vendorId || p.vendor.id || ''}">Abrir chat</button>
      </div>
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
const publicFetch = (path, options = {}) => fetch(`${API_BASE}${path}`, options);

// Evita que res.json() reviente cuando el servidor responde vacío o con HTML de error
async function safeJson(response) {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch (error) {
    console.warn('Respuesta no JSON', text);
    return { raw: text };
  }
}

async function handleRegister(event) {
  event.preventDefault();
  try {
    const data = Object.fromEntries(new FormData(event.target));
    const res = await publicFetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const json = await safeJson(res);
    if (!res.ok) throw new Error(json.message || 'No se pudo registrar (respuesta vacía)');
    session = { token: json.token, user: json.user };
    persistSession();
    updateSessionUI();
    alert(`Cuenta creada. Hola ${json.user.name}`);
  } catch (error) {
    alert(error.message || 'No se pudo registrar');
    console.error('Registro', error);
  }
}

async function handleLogin(event) {
  event.preventDefault();
  try {
    const data = Object.fromEntries(new FormData(event.target));
    const res = await publicFetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const json = await safeJson(res);
    if (!res.ok) throw new Error(json.message || 'Error de inicio de sesión (respuesta vacía)');
    alert(`Bienvenido ${json.user.name}. Rol: ${json.user.role}`);
    session = { token: json.token, user: json.user };
    persistSession();
    updateSessionUI();
    await loadNotifications();
    await loadThreads();
  } catch (error) {
    alert(error.message || 'Error de inicio de sesión');
    console.error('Login', error);
  }
}

// Sesiones demo rápidas para probar chat y notificaciones
async function loginDemo(role) {
  const demoCreds = {
    cliente: { email: 'carlos@demo.com', password: 'Cliente123!' },
    vendedor: { email: 'laura@demo.com', password: 'Vendedor123!' },
    admin: { email: 'admin@demo.com', password: 'Admin123!' }
  }[role];

  if (!demoCreds) return;
  const res = await publicFetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(demoCreds)
  });
  const json = await safeJson(res);
  if (res.ok) {
    session = { token: json.token, user: json.user };
    persistSession();
    updateSessionUI();
    await loadNotifications();
    await loadThreads();
    if (json.user.role === 'cliente') activeChatWith = 'u2';
    if (json.user.role === 'vendedor') activeChatWith = 'u3';
    if (activeChatWith) await loadConversation(activeChatWith);
  } else {
    alert(json.message || 'No se pudo iniciar sesión demo');
  }
}

const authFetch = async (url, options = {}) => {
  if (!session.token) return Promise.reject(new Error('Requiere sesión'));
  const response = await fetch(`${API_BASE}${url}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${session.token}`
    }
  });
  if (response.status === 401) {
    session = { token: null, user: null };
    persistSession();
    updateSessionUI();
  }
  return response;
};

function updateSessionUI() {
  if (!sessionStatus) return;
  if (!session.user) {
    sessionStatus.textContent = 'Sin sesión activa. Usa un demo para probar chat y notificaciones.';
    return;
  }
  sessionStatus.textContent = `${session.user.name} (${session.user.role}) conectado con JWT.`;
}

async function loadNotifications() {
  if (!notificationList || !session.token) return;
  try {
    const res = await authFetch('/api/notifications');
    const data = await safeJson(res);
    notificationList.innerHTML = data.items
      .map(
        (n) => `
          <li class="notice ${n.read ? 'is-read' : ''}">
            <div>
              <p class="notice__title">${n.title || n.type}</p>
              <p class="notice__text">${n.content}</p>
            </div>
            <span class="notice__meta">${new Date(n.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </li>
        `
      )
      .join('');
    const unread = data.items.filter((n) => !n.read).length;
    if (notificationBadge) notificationBadge.textContent = unread > 0 ? unread : '';
    await authFetch('/api/notifications/read', { method: 'PATCH' });
  } catch (error) {
    console.error('No se pudieron cargar notificaciones', error);
  }
}

async function loadThreads() {
  if (!chatThreads || !session.token) return;
  try {
    const res = await authFetch('/api/chat/threads');
    const data = await safeJson(res);
    chatThreads.innerHTML = data.threads
      .map(
        (t) => `
          <button class="thread ${activeChatWith === t.with.id ? 'active' : ''}" data-thread="${t.with.id}">
            <div>
              <strong>${t.with.name}</strong>
              <p class="muted">${t.lastMessage.text.slice(0, 42)}${t.lastMessage.text.length > 42 ? '…' : ''}</p>
            </div>
            ${t.unread ? `<span class="badge badge--pill">${t.unread}</span>` : ''}
          </button>
        `
      )
      .join('');
    if (!activeChatWith && data.threads.length) {
      activeChatWith = data.threads[0].with.id;
      await loadConversation(activeChatWith);
    }
  } catch (error) {
    console.error('No se pudieron cargar chats', error);
  }
}

async function loadConversation(userId) {
  if (!chatMessages || !session.token) return;
  try {
    const res = await authFetch(`/api/chat/with/${userId}`);
    const data = await safeJson(res);
    activeChatWith = userId;
    chatMessages.innerHTML = data.messages
      .map(
        (m) => `
          <div class="bubble ${m.from === session.user.id ? 'me' : ''}">
            <p>${m.text}</p>
            <small>${new Date(m.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small>
          </div>
        `
      )
      .join('');
  } catch (error) {
    console.error('No se pudo cargar la conversación', error);
  }
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
    const chatBtn = e.target.closest('button[data-chat]');
    if (chatBtn) {
      activeChatWith = chatBtn.dataset.user;
      updateSessionUI();
      if (!session.token) {
        alert('Inicia sesión demo para abrir el chat');
        return;
      }
      loadConversation(activeChatWith);
      loadThreads();
    }
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

if (chatThreads) {
  chatThreads.addEventListener('click', (e) => {
    const thread = e.target.closest('[data-thread]');
    if (thread) loadConversation(thread.dataset.thread);
  });
}

if (chatForm) {
  chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!session.token) return alert('Inicia sesión para chatear');
    if (!activeChatWith) return alert('Selecciona un hilo');
    const text = chatText.value.trim();
    if (!text) return;
    await authFetch('/api/chat/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to: activeChatWith, text })
    });
    chatText.value = '';
    await loadConversation(activeChatWith);
    await loadThreads();
    await loadNotifications();
  });
}

if (demoLoginButtons.length) {
  demoLoginButtons.forEach((btn) => btn.addEventListener('click', () => loginDemo(btn.dataset.demoLogin)));
}

restoreSession();
updateSessionUI();

renderProducts();
renderVendors();
startSlider();

if (session.token) {
  loadNotifications();
  loadThreads();
}
