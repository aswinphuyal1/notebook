const express = require('express');
const router = express.Router();

// ...existing code...
router.get('/', (req, res) => {

    obj = {
        "name": "Rajesh",
        "age": 25,
        "city": "Bangalore"
    };
    res.json(obj);
});
module.exports = router;