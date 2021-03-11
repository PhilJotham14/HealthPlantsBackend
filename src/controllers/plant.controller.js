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

exports.create = async function(req, res) {
    const ImgResponse = await cloudinary.uploader.upload(
                 req.file.path,
                 function(err,result) {
                     console.log(result)
                 }
    )        
    const newPlant = new Plant({
        plant_common_name: req.body.plant_common_name,
        plant_latin_name: req.body.plant_latin_name,
        plant_description: req.body.plant_description,
        plant_image: ImgResponse.secure_url
    });

    // console.log(JSON.stringify(newPlant));

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).json({ error: true, message: "Please provide all required fields" });
    } else {
        Plant.create(newPlant, function(err, plant) {
            if (err)
            // console.log('here:',err)
            res.send(err);
            res.json({
                error: false,
                message: "Plant added successfully.",
                data: plant});
        });
    }
 };

 exports.findById = function(req, res) {
    Plant.findById(req.params.id, function(err, plant) {
        if (err)  res.send(err);
        res.json(employee);
    });
};
exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({
            error:true,
            message: 'Please provide all required field'
        });
    }else{
        Plant.update(req.params.id, new Plant(req.body),
        function(err, employee) {
            if (err)   res.send(err);
            res.json({ error:false,
                message: 'Plant successfully updated'
            });
        });
    }
};
exports.delete = function(req, res) {
    Plant.delete( req.params.id, function(err, employee) {
        if (err)  res.send(err);
        res.json({ error:false,
            message: 'Plant successfully deleted' });
        });
};

