const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
   
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
         
 
});

mongoose.exports = mongoose.model('User', UserSchema);