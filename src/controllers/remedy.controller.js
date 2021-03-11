'use strict';
require('body-parser');
// import the remedy model from the models folder
const Remedy = require('../models/remedy.model');
// import the cloudinary.
const cloudinary = require('../../config/cloudinary');


exports.findAll = function(req, res) {
    Remedy.findAll(function(err, remedy) {
        // console.log('controller');

        if (err)

        res.send(err);

        // console.log('res', remedy);
        res.send(remedy);
        
    });
};

exports.create = async function(req, res) {
    console.log(req.body.remedy_name);
    // async
    const ImgResponse = await cloudinary.uploader.upload(
        req.file.path
        
    ).catch(error => {
        console.log(error);
    });
    console.log(ImgResponse.url);
    
    const newRemedy = new Remedy({
            remedy_name: req.body.remedy_name,
            remedy_preparation: req.body.remedy_preparation,
            remedy_image: ImgResponse.url });


    // console.log(JSON.stringify(newRemedy);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: "Please provide all required fields" });
    } else {
        Remedy.create(newRemedy, function(err, remedy) {
            if (err)
            res.send(err);
            res.json({ error: false, message: "Remedy added successfully.", data: remedy});
        });
    }
};