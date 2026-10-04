const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: String,
  userType: { type: String, enum: ['Individual', 'Student', 'Organization'], default: 'Individual' },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  ecoPoints: { type: Number, default: 0 },
  level: { type: String, default: '🌱 Seedling' },
}, { timestamps: true });

const actionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: { type: String, enum: ['Waste', 'Water', 'Energy', 'Transport'] },
  points: { type: Number, required: true }
});

const reportSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  issueType: String,
  title: String,
  description: String,
  location: String,
  status: { type: String, enum: ['Reported', 'In Progress', 'Resolved'], default: 'Reported' },
}, { timestamps: true });

module.exports = {
  User: mongoose.model('User', userSchema),
  EcoAction: mongoose.model('EcoAction', actionSchema),
  EnvironmentalReport: mongoose.model('EnvironmentalReport', reportSchema)
};
