'use strict';
require('body-parser');
// import the Plant model from the models folder
const Plant = require('../models/plant.model');

// import the cloudinary.
const cloudinary = require('../../config/cloudinary');



exports.findAll = function(req, res) {
    Plant.findAll(function(err, plant) {
        // console.log('controller');

        if (err)

        res.send(err);

        // console.log('res', plant);
        res.send(plant);
        
    });
};

exports.create = function(req, res) {
    const newPlant = new Plant(req.body);

    // console.log(JSON.stringify(newPlant));

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: "Please provide all required fields" });
    } else {
        Plant.create(newPlant, function(err, plant) {
            if (err)
            res.send(err);
            res.json({ error: false, message: "Plant added successfully.", data: plant});
        });
    }
};