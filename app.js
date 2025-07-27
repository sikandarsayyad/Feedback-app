// app.js

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const app = express();

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/testimonial-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Body parser
app.use(express.urlencoded({ extended: false }));

// Routes
const routes = require('./routes/index');
app.use('/', routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
