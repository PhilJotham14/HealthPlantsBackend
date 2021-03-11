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
            res.status(200).json({ message: "Plant added successfully.", data: plant});
        });
    }


//     // New code.....
    
    

};


// exports.create = async function(req, res) {
//     // async
//     const ImgResponse = await cloudinary.uploader.upload(
//         req.file.path
        
//     ).catch(error => {
//         console.log(error);
//     });
//     console.log(ImgResponse);
// };