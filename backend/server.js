
// Importing required modules
const mongoose = require('mongoose'); // MongoDB object modeling tool
const bodyParser = require('body-parser'); // Parse incoming request bodies
const cors = require('cors'); // Enable Cross-Origin Resource Sharing
const express = require('express'); // Fast, unopinionated, minimalist web framework for Node.js

const app = express(); // Create an instance of the express application

app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB database
mongoose.connect('mongodb+srv://ahkcht981:Ahkcht98@bstorec.5l8i8lk.mongodb.net/?retryWrites=true&w=majority&appName=bstorec', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Start the server
const PORT = 6500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
