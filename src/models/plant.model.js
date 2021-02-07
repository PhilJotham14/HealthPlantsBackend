'use strict';

// import dbConnect from the db.config.js file in the configurations folder.
var dbConnect = require('./../../config/db.config');

// Create a plant object.
var Plant = function(plant){
    this.plant_common_name = plant.plant_common_name;
    this.plant_latin_name = plant.plant_latin_name;
    this.plant_description = plant.plant_description;
    this.plant_image = plant.plant_image;
};
// var newPlant = function(req, res){
//     const plant_common_name = req.body.plant_common_name;
//     const plant_latin_name = req.body.plant_latin_name;
//     const plant_description = req.body.plant_description;

    // dbConnect.query("INSERT INTO PLANT (plant_common_name, plant_latin_name, plant_description) VALUES[?,?,?]",
    // [plant_common_name, plant_latin_name, plant_description],
    // (err, result) => {
    //     if (err) {
    //         console.log(err);
    //     }else{
    //         res.send("Values added");
    //     };
    //     // console.log(plant_common_name + plant_latin_name + plant_description);

    //     return result;
    // });
//     console.log(plant_latin_name);
//     console.log(newPlant);
// };

Plant.create = function (newPlant, result){
    
    dbConnect.query("INSERT INTO PLANT set ?", newPlant, function(err, res){
        // console.log(newPlant);
        if (err) {
            console.log("error: ", err);

            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Plant.findAll = function (result) {
    dbConnect.query("SELECT * FROM PLANT", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('PLANT: ', res);
            result(null, res);
        }
    });
};

module.exports = Plant;
// module.exports = newPlant;