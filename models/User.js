// models/User.js
// Ejemplo de esquema Mongoose listo para conectar con MongoDB
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['admin', 'vendedor', 'cliente'], default: 'cliente' },
  avatar: String,
  bio: String,
  contact: String,
  active: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
