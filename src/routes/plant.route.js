const express = require('express');
const multer = require('../../config/multer');

const router = express.Router();

//import the plantController fromthe controllers folder.
const plantController = require('../controllers/plant.controller');
const newPlant = require('../models/plant.model');

// Route to retrieve all plants.
router.get('/', plantController.findAll);

// Route to create a new plant entry.
// router.post('/', plantController.create); to be uncommented.....

router.post('/', multer.single('myImage'), plantController.create);

module.exports = router;