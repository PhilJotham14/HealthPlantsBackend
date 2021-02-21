'use strict';
require('body-parser');
// import the remedy model from the models folder
const Remedy = require('../models/remedy.model');


exports.findAll = function(req, res) {
    Remedy.findAll(function(err, remedy) {
        // console.log('controller');

        if (err)

        res.send(err);

        // console.log('res', remedy);
        res.send(remedy);
        
    });
};

exports.create = function(req, res) {
    const newRemedy = new Remedy(req.body);

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