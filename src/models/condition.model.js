'use strict';

// import dbConnect from the db.config.js file in the configurations folder.
var dbConnect = require('./../../config/db.config');

// Create a condition object.
var Condition = function(condition){
    this.affliction_common_name = condition.affliction_common_name; 
    this.affliction_latin_name = condition.affliction_latin_name;
    this.affliction_description = condition.affliction_description;
};

Condition.create = function (newCondition, result){
    
    dbConnect.query("INSERT INTO AFFLICTION set ?", newCondition, function(err, res){
        // console.log(newCondition);
        if (err) {
            console.log("error: ", err);

            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Condition.findAll = function (result) {
    dbConnect.query("SELECT user_id, affliction_common_name, affliction_latin_name FROM AFFLICTION", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('CONDITIONS: ', res);
            result(null, res);
        }
    });
};

module.exports = Condition;