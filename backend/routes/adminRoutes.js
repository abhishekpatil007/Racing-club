const express = require('express');
const router = express.Router();

// Define your admin routes here
router.get('/', (req, res) => {
    res.send('Admin Home');
});

// Add more admin routes as needed

module.exports = router;