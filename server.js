// server.js
// Backend básico para marketplace con roles ADMIN, VENDEDOR y CLIENTE
// Para producción sustituye el arreglo en memoria por modelos de MongoDB.

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'clave-secreta-demo';

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('.'));

// ------------------ Simulación de base de datos ------------------
// En un entorno real, aquí conectaríamos a MongoDB con mongoose.connect()
// y reemplazaríamos estos arreglos por modelos Usuario y Producto.
let users = [
  {
    id: 'u1',
    name: 'Admin Demo',
    email: 'admin@demo.com',
    role: 'admin',
    passwordHash: bcrypt.hashSync('Admin123!', 10),
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    bio: 'Gestiona el marketplace',
    contact: 'admin@demo.com',
    active: true
  },
  {
    id: 'u2',
    name: 'Laura Chef',
    email: 'laura@demo.com',
    role: 'vendedor',
    passwordHash: bcrypt.hashSync('Vendedor123!', 10),
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    bio: 'Comida casera saludable',
    contact: '+57 300 111 2233',
    active: true
  },
  {
    id: 'u3',
    name: 'Carlos Cliente',
    email: 'carlos@demo.com',
    role: 'cliente',
    passwordHash: bcrypt.hashSync('Cliente123!', 10),
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    bio: 'Amante de la buena comida',
    contact: 'carlos@example.com',
    active: true
  },
  {
    id: 'u4',
    name: 'Huerta Verde',
    email: 'huerta@demo.com',
    role: 'vendedor',
    passwordHash: bcrypt.hashSync('Vendedor123!', 10),
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    bio: 'Canastas orgánicas con cosecha local',
    contact: '+57 311 444 5566',
    active: true
  },
  {
    id: 'u5',
    name: 'Café Bruma',
    email: 'bruma@demo.com',
    role: 'vendedor',
    passwordHash: bcrypt.hashSync('Vendedor123!', 10),
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    bio: 'Bebidas frías y métodos filtrados',
    contact: 'cafe@bruma.co',
    active: true
  },
  {
    id: 'u6',
    name: 'Sazón Norte',
    email: 'sazon@demo.com',
    role: 'vendedor',
    passwordHash: bcrypt.hashSync('Vendedor123!', 10),
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80',
    bio: 'Tacos y antojitos del norte',
    contact: 'wa.me/573154445566',
    active: true
  },
  {
    id: 'u7',
    name: 'Nube Umami',
    email: 'umami@demo.com',
    role: 'vendedor',
    passwordHash: bcrypt.hashSync('Vendedor123!', 10),
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    bio: 'Fusión asiática con verduras de temporada',
    contact: 'hola@nubeumami.com',
    active: true
  },
  {
    id: 'u8',
    name: 'Dulce Búho',
    email: 'dulce@demo.com',
    role: 'vendedor',
    passwordHash: bcrypt.hashSync('Vendedor123!', 10),
    avatar: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80',
    bio: 'Postres cremosos y pastelería moderna',
    contact: 'pasteles@dulcebuho.com',
    active: true
  }
];

let products = [
  {
    id: 'p1',
    title: 'Bowl de quinoa y pollo',
    price: 12.5,
    description: 'Receta saludable lista en 15 minutos.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    vendorId: 'u2',
    active: true
  },
  {
    id: 'p2',
    title: 'Hamburguesa artesanal',
    price: 9.99,
    description: 'Pan brioche, carne angus y salsas caseras.',
    image: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=800&q=80',
    vendorId: 'u2',
    active: true
  },
  {
    id: 'p3',
    title: 'Box de frutas orgánicas',
    price: 15.0,
    description: 'Selección semanal de frutas de temporada.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    vendorId: 'u4',
    active: true
  },
  {
    id: 'p4',
    title: 'Cold brew con cacao',
    price: 5.5,
    description: 'Infusión lenta con notas de cacao y naranja.',
    image: 'https://images.unsplash.com/photo-1481391194949-4d63c38778aa?auto=format&fit=crop&w=800&q=80',
    vendorId: 'u5',
    active: true
  },
  {
    id: 'p5',
    title: 'Tacos de birria lenta',
    price: 13.0,
    description: 'Estofado de res con especias, tortillas hechas a mano.',
    image: 'https://images.unsplash.com/photo-1608039858984-738af0cfa55b?auto=format&fit=crop&w=800&q=80',
    vendorId: 'u6',
    active: true
  },
  {
    id: 'p6',
    title: 'Bao de portobello glaseado',
    price: 11.0,
    description: 'Hongos caramelizados, pepino encurtido y mayonesa de miso.',
    image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=800&q=80',
    vendorId: 'u7',
    active: true
  },
  {
    id: 'p7',
    title: 'Cheesecake de maracuyá',
    price: 8.25,
    description: 'Base de galleta con topping cítrico y cremoso.',
    image: 'https://images.unsplash.com/photo-1475856033578-76b4a180a6a5?auto=format&fit=crop&w=800&q=80',
    vendorId: 'u8',
    active: true
  }
];

let messages = [
  {
    id: 'msg_seed1',
    from: 'u3',
    to: 'u2',
    text: 'Hola Laura, me interesa el bowl de quinoa con pollo, ¿aún lo tienes disponible hoy?',
    productId: 'p1',
    date: new Date().toISOString(),
    read: false
  },
  {
    id: 'msg_seed2',
    from: 'u2',
    to: 'u3',
    text: '¡Hola Carlos! Sí, puedo prepararlo para la tarde y enviarte el costo del envío.',
    productId: 'p1',
    date: new Date().toISOString(),
    read: false
  }
];
let notifications = {};

// Ruta de estado para verificar conexión desde el front
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    mode: 'memdb',
    users: users.length,
    products: products.length,
    message: 'Si ves esto, el backend está corriendo. Ejecuta "npm start" en puerto 4000.'
  });
});

const ensureInbox = (userId) => {
  if (!notifications[userId]) notifications[userId] = [];
};

users.forEach((u) => ensureInbox(u.id));

// ------------------ Utilidades ------------------
const generateId = (prefix = 'id') => `${prefix}_${Math.random().toString(36).slice(2, 9)}`;

const signToken = (user) => jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '2h' });

const addNotification = (userId, payload) => {
  ensureInbox(userId);
  notifications[userId].unshift({
    id: generateId('ntf'),
    date: new Date().toISOString(),
    read: false,
    ...payload
  });
};

const broadcastNotification = (roles, payload) => {
  users
    .filter((u) => u.active && roles.includes(u.role))
    .forEach((u) => addNotification(u.id, payload));
};

broadcastNotification(['cliente', 'vendedor'], {
  type: 'actualizacion',
  title: 'Catálogo Phasvy listo',
  content: 'Cargamos el catálogo inicial con lanzamientos naranjas.'
});

const authMiddleware = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: 'Token requerido' });
  const [, token] = header.split(' ');
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const user = users.find((u) => u.id === payload.id);
    if (!user || !user.active) return res.status(401).json({ message: 'Usuario inactivo o inexistente' });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

const requireRole = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'No autorizado' });
  }
  next();
};

// ------------------ Rutas de autenticación ------------------
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password, role = 'cliente', avatar, bio, contact } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: 'Faltan datos obligatorios' });
    if (!['cliente', 'vendedor', 'admin'].includes(role)) {
      return res.status(400).json({ message: 'Rol inválido' });
    }
    const exists = users.find((u) => u.email === email);
    if (exists) return res.status(409).json({ message: 'El email ya está registrado' });

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = {
      id: generateId('u'),
      name,
      email,
      role,
      passwordHash,
      avatar: avatar || 'https://placehold.co/80x80',
      bio: bio || '',
      contact: contact || email,
      active: true
    };
    users.push(newUser);
    ensureInbox(newUser.id);
    const token = signToken(newUser);
    return res.status(201).json({ token, user: { id: newUser.id, name, email, role, avatar: newUser.avatar, bio: newUser.bio, contact: newUser.contact } });
  } catch (error) {
    return res.status(500).json({ message: 'Error al registrar', error: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
  if (!user.active) return res.status(403).json({ message: 'Usuario desactivado' });
  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ message: 'Credenciales incorrectas' });
  const token = signToken(user);
  return res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role, avatar: user.avatar, bio: user.bio, contact: user.contact } });
});

// ------------------ Rutas protegidas ------------------
app.get('/api/auth/me', authMiddleware, (req, res) => {
  const { id, name, email, role, avatar, bio, contact, active } = req.user;
  res.json({ id, name, email, role, avatar, bio, contact, active });
});

// Usuarios (solo admin)
app.get('/api/users', authMiddleware, requireRole('admin'), (req, res) => {
  const safeUsers = users.map(({ passwordHash, ...rest }) => rest);
  res.json(safeUsers);
});

app.patch('/api/users/:id/toggle', authMiddleware, requireRole('admin'), (req, res) => {
  const user = users.find((u) => u.id === req.params.id);
  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
  user.active = !user.active;
  res.json({ id: user.id, active: user.active });
});

// Productos
app.get('/api/products', (req, res) => {
  const publicProducts = products
    .filter((p) => p.active)
    .map((p) => ({
      ...p,
      vendor: users.find((u) => u.id === p.vendorId && u.active) || null
    }))
    .filter((p) => p.vendor);
  res.json(publicProducts);
});

app.post('/api/products', authMiddleware, requireRole('vendedor', 'admin'), (req, res) => {
  const { title, price, description, image } = req.body;
  if (!title || !price) return res.status(400).json({ message: 'Título y precio son obligatorios' });
  const newProduct = {
    id: generateId('p'),
    title,
    price: Number(price),
    description: description || '',
    image: image || 'https://placehold.co/600x400',
    vendorId: req.user.id,
    active: true
  };
  products.push(newProduct);
  broadcastNotification(['cliente', 'vendedor'], {
    type: 'producto',
    title: 'Nuevo producto',
    content: `${req.user.name} publicó ${title}`
  });
  res.status(201).json(newProduct);
});

app.put('/api/products/:id', authMiddleware, requireRole('vendedor', 'admin'), (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
  if (req.user.role === 'vendedor' && product.vendorId !== req.user.id) {
    return res.status(403).json({ message: 'No puedes editar productos de otros vendedores' });
  }
  const { title, price, description, image } = req.body;
  if (title) product.title = title;
  if (price) product.price = Number(price);
  if (description) product.description = description;
  if (image) product.image = image;
  broadcastNotification(['cliente', 'vendedor'], {
    type: 'actualizacion',
    title: 'Producto actualizado',
    content: `${product.title} recibió cambios de ${req.user.name}`
  });
  res.json(product);
});

app.delete('/api/products/:id', authMiddleware, requireRole('vendedor', 'admin'), (req, res) => {
  const idx = products.findIndex((p) => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: 'Producto no encontrado' });
  const product = products[idx];
  if (req.user.role === 'vendedor' && product.vendorId !== req.user.id) {
    return res.status(403).json({ message: 'No puedes eliminar productos de otros vendedores' });
  }
  products.splice(idx, 1);
  res.json({ message: 'Producto eliminado' });
});

app.patch('/api/products/:id/toggle', authMiddleware, requireRole('vendedor', 'admin'), (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
  if (req.user.role === 'vendedor' && product.vendorId !== req.user.id) {
    return res.status(403).json({ message: 'No puedes actualizar productos de otros vendedores' });
  }
  product.active = !product.active;
  broadcastNotification(['cliente', 'vendedor'], {
    type: 'actualizacion',
    title: 'Estado de producto',
    content: `${product.title} ahora está ${product.active ? 'visible' : 'pausado'}`
  });
  res.json({ id: product.id, active: product.active });
});

// Perfil público del vendedor
app.get('/api/vendors/:id', (req, res) => {
  const vendor = users.find((u) => u.id === req.params.id && u.role === 'vendedor');
  if (!vendor || !vendor.active) return res.status(404).json({ message: 'Vendedor no encontrado' });
  const vendorProducts = products.filter((p) => p.vendorId === vendor.id && p.active);
  const { passwordHash, ...safeVendor } = vendor;
  res.json({ vendor: safeVendor, products: vendorProducts });
});

// Perfil privado del cliente
app.put('/api/clients/me', authMiddleware, requireRole('cliente'), (req, res) => {
  const { name, avatar, bio, contact } = req.body;
  if (name) req.user.name = name;
  if (avatar) req.user.avatar = avatar;
  if (bio) req.user.bio = bio;
  if (contact) req.user.contact = contact;
  const { passwordHash, ...safeUser } = req.user;
  res.json({ user: safeUser });
});

// Notificaciones
app.get('/api/notifications', authMiddleware, (req, res) => {
  ensureInbox(req.user.id);
  res.json({ items: notifications[req.user.id] });
});

app.patch('/api/notifications/read', authMiddleware, (req, res) => {
  ensureInbox(req.user.id);
  notifications[req.user.id] = notifications[req.user.id].map((n) => ({ ...n, read: true }));
  res.json({ read: true });
});

// Chat cliente-vendedor
app.post('/api/chat/send', authMiddleware, (req, res) => {
  const { to, text, productId } = req.body;
  if (!to || !text) return res.status(400).json({ message: 'Destino y texto son obligatorios' });
  const recipient = users.find((u) => u.id === to && u.active);
  if (!recipient) return res.status(404).json({ message: 'Destinatario no encontrado o inactivo' });

  const message = {
    id: generateId('msg'),
    from: req.user.id,
    to,
    text,
    productId: productId || null,
    date: new Date().toISOString(),
    read: false
  };
  messages.push(message);
  addNotification(to, {
    type: 'mensaje',
    title: 'Nuevo mensaje',
    content: `${req.user.name}: ${text.slice(0, 70)}${text.length > 70 ? '…' : ''}`
  });
  res.status(201).json({ message });
});

app.get('/api/chat/threads', authMiddleware, (req, res) => {
  const relevant = messages.filter((m) => m.from === req.user.id || m.to === req.user.id);
  const grouped = {};

  relevant.forEach((m) => {
    const otherId = m.from === req.user.id ? m.to : m.from;
    if (!grouped[otherId]) {
      grouped[otherId] = { last: m, unread: 0 };
    }
    if (new Date(m.date) > new Date(grouped[otherId].last.date)) grouped[otherId].last = m;
    if (!m.read && m.to === req.user.id) grouped[otherId].unread += 1;
  });

  const threads = Object.entries(grouped)
    .map(([otherId, data]) => {
      const other = users.find((u) => u.id === otherId);
      if (!other) return null;
      const { passwordHash, ...safeOther } = other;
      return { with: safeOther, lastMessage: data.last, unread: data.unread };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.lastMessage.date) - new Date(a.lastMessage.date));

  res.json({ threads });
});

app.get('/api/chat/with/:id', authMiddleware, (req, res) => {
  const other = users.find((u) => u.id === req.params.id);
  if (!other) return res.status(404).json({ message: 'Usuario no encontrado' });
  const conversation = messages
    .filter((m) =>
      (m.from === req.user.id && m.to === other.id) || (m.to === req.user.id && m.from === other.id)
    )
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  conversation.forEach((m) => {
    if (m.to === req.user.id) m.read = true;
  });

  const { passwordHash, ...safeOther } = other;
  res.json({ with: safeOther, messages: conversation });
});

// -------------- Inicio del servidor --------------
app.listen(PORT, () => {
  console.log(`API marketplace ejecutándose en http://localhost:${PORT}`);
});
