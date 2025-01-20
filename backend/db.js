const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/admin";

const connectToMongo = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to Mongo Successfully");
        })
        .catch((err) => {
            console.error("Error connecting to Mongo:", err);
        });
};

module.exports = connectToMongo;