'use strict';
require('body-parser');
// import the remedy model from the models folder
const Review = require('../models/review.model');


exports.findAll = function(req, res) {
    Review.findAll(function(err, review) {
        // console.log('controller');

        if (err)

        res.send(err);

        // console.log('res', remedy);
        res.send(review);
        
    });
};

exports.create = function(req, res) {
    const newReview = new Review(req.body);

    // console.log(JSON.stringify(newReview);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
             error: true,
             message: "Please provide all required fields" 
            });
    } else {
        Review.create(newReview, function(err, review) {
            if (err)
            res.send(err);
            res.json({ 
                error: false, 
                message: "Review added successfully.", 
                data: review});
        });
    }
};

exports.delete = function(req, res) {
    Review.delete( req.params.id, function(err, employee) { //employee??
        if (err)  res.send(err);
        res.json({ error:false,
            message: 'review successfully deleted' });
        });
};

