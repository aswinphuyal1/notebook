const express = require('express');
const router = express.Router();

// ...existing code...
const users = [
    { id: 1, username: 'user1', password: 'pass1' },
    { id: 2, username: 'user2', password: 'pass2' }
];

router.get('/', (req, res) => {
    const obj = {
        "name": "Rajesh",
        "age": 25,
        "city": "Bangalore"
    };
    res.json(obj);
});

module.exports = router;