const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// GET method
router.get('/', (req, res) => {
  res.redirect('/testimonials'); // or render a homepage
});

// GET- submit method
router.get('/submit', (req, res) => {
  res.render('submit');
});

// POST - submit method
router.post('/submit', async (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.render('submit', { error: 'All fields are required.' });
  }

  const testimonial = new Testimonial({ name, message });
  await testimonial.save();
  res.redirect(`/testimonial/${testimonial._id}`);
});

// Show all testimonials
router.get('/testimonials', async (req, res) => {
  const testimonials = await Testimonial.find().sort({ createdAt: -1 });
  res.render('testimonials', { testimonials }); 
});

// Show single testimonial by ID
router.get('/testimonial/:id', async (req, res) => {
  const testimonial = await Testimonial.findById(req.params.id);
  if (!testimonial) return res.status(404).send('Testimonial not found');
  res.render('single', { testimonial }); 
});

module.exports = router;
