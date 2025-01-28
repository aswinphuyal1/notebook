const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/curd", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

const userSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    city: { type: String }
});

const UserModel = mongoose.model('User', userSchema);

app.get("/getUsers", async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: "Error fetching users" });
    }
});

try {
    app.use('/api/auth', require('./routes/auth'));
} catch (err) {
    console.error("Error loading auth routes:", err);
}

try {
    app.use('/api/notes', require('./routes/notes'));
} catch (err) {
    console.error("Error loading notes routes:", err);
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});