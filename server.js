const express = require('express');
const app = express();
const routes = require('./routes');

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use routes
app.use('/api', routes);

// Route for notes page
app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/public/notes.html');
});

// Route for homepage
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
