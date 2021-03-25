const express = require('express');

const router = express.Router();

//import the reviewController fromthe controllers folder.
const reviewController = require('../controllers/review.controller');
const newReview = require('../models/review.model');

// Route to retrieve all reviews.
router.get('/', reviewController.findAll);

// Route to create a new review entry.
router.post('/', reviewController.create);

// Delete a review with id
router.delete('/:id', reviewController.delete);

module.exports = router;