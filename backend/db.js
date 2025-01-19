
// const mongoose =required('mongoose')
// const mongourl="mongodb://localhost:27017/"

// const ConnectTomongo=()=>
// {
// mongoose.Connect(mongourl,()=>{
//     console.log("connect");
// })
// }
// module.exports=ConnectTomongo;

const mongoose = require('mongoose'); // Fix 'required' to 'require'
const mongoUrl = "mongodb://localhost:27017/yourDatabaseName"; // Replace 'yourDatabaseName' with your actual database name

const ConnectToMongo = () => {
    mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to MongoDB successfully");
        })
        .catch((error) => {
            console.error("Failed to connect to MongoDB:", error);
        });
};

module.exports = ConnectToMongo; // Fix 'required' to 'require'
