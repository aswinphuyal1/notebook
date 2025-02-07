const mongoose = require('mongoose');

// Use the provided connection string
const mongoURI = "mongodb://127.0.0.1:27017/curd";
const connectToMongo = () => {
    mongoose.connect(mongoURI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000 // Increase timeout to 30 seconds
    }, (err) => {
        if (err) {
            console.error("Error connecting to MongoDB:", err.message);
        } else {
            console.log("Connected to Mongo Successfully");
        }
    });
};


module.exports = connectToMongo;