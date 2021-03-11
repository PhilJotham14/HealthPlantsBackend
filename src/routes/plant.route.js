const express = require('express');
const multer = require('../../config/multer');

const router = express.Router();

//import the plantController fromthe controllers folder.
const plantController = require('../controllers/plant.controller');
const newPlant = require('../models/plant.model');

// Route to retrieve all plants.
router.get('/', plantController.findAll);

// Route to create a new plant entry.
router.post('/', multer.single('myImage'), plantController.create);
// multer.single('myImage'),

// Retrieve a single employee with id
router.get('/:id', plantController.findById);

// Update a employee with id
router.put('/:id', plantController.update);

// Delete a employee with id
router.delete('/:id', plantController.delete);


module.exports = router;