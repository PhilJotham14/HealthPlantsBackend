'use strict';

// import dbConnect from the db.config.js file in the configurations folder.
var dbConnect = require('./../../config/db.config');

// Create a Remedy object.
var Review= function(review){
    this.review_date = review.review_date;
    this.review_description = review.review_description;
    this.user_id = review.user_id;
    this.remedy_id = review.remedy_id;
    this.plant_variant_id = review.plant_variant_id;
    this.affliction_id = review.affliction_id;
};

Review.create = function (newReview, result){
    
    dbConnect.query("INSERT INTO review set ?", [newReview], (err, res) =>{
        // console.log(newReview);
        if (err) {
            console.log("error: ", err);

            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Review.findAll = function (result) {
    // dbConnect.query("SELECT review_id, review_date, review_description, user_full_name, remedy_name FROM review INNER JOIN (user) USING (user_id) INNER JOIN (remedy) using (remedy_id);",
    // dbConnect.query("SELECT review_id, review_date, review_description, user_full_name, remedy_name FROM review INNER JOIN (user) USING (user_id) INNER JOIN (remedy) using (remedy_id);",
    dbConnect.query("SELECT * FROM review",
    function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('Reviews: ', res);
            result(null, res);
        }
    });
};

Review.findById = function (id, result) {
    dbConnect.query("SELECT * FROM review WHERE review_id = ?", review_id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else{
            result(err, null);
        }
        
    });
    
};

Review.delete = function(review_id, result){
    dbConnect.query("DELETE FROM review WHERE review_id = ?", [review_id],
    function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};




module.exports = Review;