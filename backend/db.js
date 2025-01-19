const mongoose = require('mongoose');

const ConnectToMongo = () => {
  mongoose.connect('mongodb://localhost:27017/notebook', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
};

module.exports = ConnectToMongo;
