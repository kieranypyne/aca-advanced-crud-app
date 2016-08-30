const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Require Routes
const posts = require('./routes/posts');

// Set up database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/crud-posts');

// Create our instance of our app
const app = express();

// Add middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// It forms a middleware that helps to parse form data

// Set our views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set our directory for serving static files
app.use(express.static('public'));

// Registering a simple route to redirect to '/posts'
app.get('/', (req, res, next) => {
  res.redirect('/posts');
});

// Register our routes
app.use('/posts', posts);

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
