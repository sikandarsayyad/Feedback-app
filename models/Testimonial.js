//importing mongoose
const mongoose = require('mongoose');

//scheme creating at mongodb 
const testimonialSchema = new mongoose.Schema({
  name: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Testimonial', testimonialSchema);