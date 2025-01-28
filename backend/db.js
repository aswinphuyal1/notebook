const mongoose = require('mongoose');

//const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const mongoURI = "mongodb://localhost:27017/curd?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log("Connected to Mongo Successfully");
    });
};

module.exports = connectToMongo;