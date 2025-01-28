const mongoose = require('mongoose');


const NodesSchema = new mongoose.Schema({
   
     
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

mongoose.exports = mongoose.model('Nodes', NodesSchema);