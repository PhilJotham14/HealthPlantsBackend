'use strict';

// import dbConnect from the db.config.js file in the configurations folder.
var dbConnect = require('./../../config/db.config');

// Create a plant object.
var Plant = function(plant){
    this.plant_common_name = plant.plant_common_name;
    this.plant_latin_name = plant.plant_latin_name;
    this.plant_description = plant.plant_description;
    this.plant_image = plant.plant_image;
    // let file = req.fles.uploaded_image;
    // this.plant_image = file.name;
};
// var file = req.files.uploaded_image;
// 		var img_name=file.name;
Plant.create = function (newPlant, result){                   
    // file.mv('public/images/upload_images/'+file.name, function(err) {
                   
    //     if (err)
 
    //     return res.status(500).send(err);
    
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
        if (err) { //SELECT plant_id, plant_common_name, plant_latin_name FROM PLANT
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('PLANT: ', res);
            result(null, res);
        }
    });
};

module.exports = Plant;