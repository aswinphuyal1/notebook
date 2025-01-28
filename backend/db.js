const mongoose = require('mongoose');

// Use the provided connection string
const mongoURI = "mongodb://localhost:27017/curd";

const connectToMongo = () => {
    mongoose.connect(mongoURI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000 // Increase timeout to 30 seconds
    }, () => {
        console.log("Connected to Mongo Successfully");
    });
};

module.exports = connectToMongo;