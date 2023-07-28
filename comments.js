// create web server for comment
//======================================

//import module
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use body-parser middleware to parse JSON data
app.use(bodyParser.json());

// Store comments in an array (for simplicity, not for production use)
const comments = [];

// Define a route to handle new comments
app.post('/comments', (req, res) => {
  const { author, comment } = req.body;
  if (!author || !comment) {
    return res.status(400).json({ error: 'Author and comment are required' });
  }

  const newComment = { author, comment };
  comments.push(newComment);
  res.status(201).json(newComment);
});

// Define a route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
