'use strict';
require('body-parser');
// import the Condition model from the models folder
const Condition = require('../models/condition.model');


exports.findAll = function(req, res) {
    Condition.findAll(function(err, condition) {
        // console.log('controller');

        if (err)

        res.send(err);

        // console.log('res', condition);
        res.send(condition);
        
    });
};

exports.create = function(req, res) {
    const newCondition = new Condition(req.body);

    // console.log(JSON.stringify(newCondition));

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: "Please provide all required fields" });
    } else {
        Condition.create(newCondition, function(err, condition) {
            if (err)
            res.send(err);
            res.json({ error: false, message: "Condition added successfully.", data: condition});
        });
    }
};