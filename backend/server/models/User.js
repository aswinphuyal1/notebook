const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
   
      name: {
        type: String,
        required: true
      },
      Email: {
        type: String,
        required: true
        },
        password: {
            type: String,
            required: true
          },
          phone: {
            type: String,
            required: true
          },
          address: {
            type: String,
            required: true
          },
          city: {
            type: String,
            required: true
          },
          state: {
            type: String,
            required: true
          },
          zip: {
            type: String,
            required: true
          },
          country: {
            type: String,
            required: true }
 
});

mongoose.exports = mongoose.model('User', userSchema);