'use strict';

// import dbConnect from the db.config.js file in the configurations folder.
var dbConnect = require('./../../config/db.config');

// Create a user object.
var User = function(user){
    this.full_name = user.full_name;
    this.email = user.email;
    this.phone_number = user.phone_number;
    this.password = user.password;
};

User.create = function (newUser, result){
    
    dbConnect.query("INSERT INTO USER set ?", newUser, function(err, res){
        // console.log(newUser);
        if (err) {
            console.log("error: ", err);

            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

User.findAll = function (result) {
    dbConnect.query("SELECT user_id, full_name, email, phone_number FROM USER", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('USERS: ', res);
            result(null, res);
        }
    });
};

module.exports = User;