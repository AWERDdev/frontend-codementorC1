const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3500;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files directly from the 'src' directory
app.use('/src', express.static(path.join(__dirname, '../src')));

// Serve the index.html from the 'Build' directory
app.get('/DevTest', (req, res) => {
  res.sendFile(path.join(__dirname, '../Build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/DevTest`);
});

