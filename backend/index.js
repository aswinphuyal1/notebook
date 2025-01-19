// const ConnectTomongo= required('./db')

// ConnectTomongo();

const ConnectToMongo = require('./db'); // Fix 'required' to 'require'

ConnectToMongo(); // Call the function to connect to MongoDB
