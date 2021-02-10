'use strict';

// import dbConnect from the db.config.js file in the configurations folder.
var dbConnect = require('./../../config/db.config');

// Create a Remedy object.
var Remedy= function(remedy){
    this.name = remedy.name;
    this.preparation = remedy.preparation;
};

Remedy.create = function (newRemedy, result){
    
    dbConnect.query("INSERT INTO REMEDY set ?", newRemedy, function(err, res){
        // console.log(newRemedy);
        if (err) {
            console.log("error: ", err);

            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Remedy.findAll = function (result) {
    dbConnect.query("SELECT remedy_id, name, preparation FROM REMEDY", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('REMEDYS: ', res);
            result(null, res);
        }
    });
};

module.exports = Remedy;