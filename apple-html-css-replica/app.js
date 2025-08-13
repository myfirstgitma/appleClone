// Import the express module
const express = require('express');
const app = express();

// Define a port to run on
const PORT = process.env.PORT || 3000;

// Set up a basic route
app.get('/', (req, res) => {
  res.send('Hello from Node.js on port ' + PORT);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});