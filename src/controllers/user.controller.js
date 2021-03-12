'use strict';
require('body-parser');
// import the cloudinary.
const cloudinary = require('../../config/cloudinary');

// import the User model from the models folder
const User = require('../models/user.model');


exports.findAll = function(req, res) {
    User.findAll(function(err, user) {
        // console.log('controller');

        if (err)

        res.send(err);

        // console.log('res', user);
        res.send(user);
        
    });
};

exports.create = async function(req, res) {


    console.log(req.body.user_full_name);
    // async
    const ImgResponse = await cloudinary.uploader.upload(
        req.file.path
        
    ).catch(error => {
        console.log(error);
    });
    console.log(ImgResponse.url);
    
    const newUser = new User({
            user_full_name: req.body.user_full_name,
            email: req.body.email,
            phone_number: req.body.phone_number,
            user_image: ImgResponse.url });



    // const newUser = new User(req.body);

    // console.log(JSON.stringify(newUser));

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: "Please provide all required fields" });
    } else {
        User.create(newUser, function(err, user) {
            if (err)
            res.send(err);
            res.json({ error: false, message: "User added successfully.", data: user});
        });
    }
};