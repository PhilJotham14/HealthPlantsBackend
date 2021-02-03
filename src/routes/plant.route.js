const express = require('express');

const router = express.Router();

//import the plantController fromthe controllers folder.
const plantController = require('../controllers/plant.controller');

// Route to retrieve all plants.
router.get('/', plantController.findAll);

// Route to create a new plant entry.
router.post('/', plantController.create);

module.exports = router;