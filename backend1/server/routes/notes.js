const express = require('express');
const router = express.Router();

// Define your routes for notes here
router.get('/', (req, res) => {
    res.send('Notes page');
});

module.exports = router;
