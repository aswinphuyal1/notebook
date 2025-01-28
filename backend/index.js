// //const { connect } = require('mongoose');
// const connectToMongo = require('./db');
// // const express = require('express');
// // var cors = require('cors');

// // connectToMongo();
// // const app = express();
// // const port = 5000;

// // app.use(cors());
// // app.use(express.json());

// // // Available Routes
// // app.use('/api/auth', require('./routes/auth'));
// // app.use('/api/notes', require('./routes/notes'));

// // app.listen(port, () => {
// //   console.log(`iNotebook backend listening at http://localhost:${port}`);
// // });
// connectToMongo();



const { MongoClient } = require('mongodb');

// MongoDB connection string
const uri = "mongodb://localhost:27017/";

// Create a new MongoClient instance
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log("Connected to MongoDB successfully!");

    // Optional: Access a specific database
    const db = client.db('yourDatabaseName'); // Replace 'yourDatabaseName' with your database name

    // Perform operations (e.g., list collections)
    const collections = await db.listCollections().toArray();
    console.log("Collections:", collections);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    // Close the connection
    await client.close();
  }
}

// Call the function
connectToDatabase();
