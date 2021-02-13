'use strict';
require('body-parser');
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

exports.create = function(req, res) {
    const newUser = new User(req.body);

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