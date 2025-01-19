const express = require('express');
const mongoose = require('mongoose');
const ConnectToMongo = require('./db'); // Ensure this path is correct

ConnectToMongo(); // Call the function to connect to MongoDB

const app = express();
const port = 3000;

// Remove redundant MongoDB connection code
// mongoose.connect('mongodb://localhost:27017/notebook', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((error) => {
//   console.error('Error connecting to MongoDB:', error);
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
