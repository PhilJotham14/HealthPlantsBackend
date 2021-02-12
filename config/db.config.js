'use strict';

const mysql = require('mysql');

// Configurations for the database connection
const dbConnect = mysql.createConnection({
    host: 'localhost',
    user: 'walter',
    password: 'password',
    database: 'health_plants_of_uganda'
});

dbConnect.connect(function(err) {
    if (err) throw err;

    console.log("Database Connected!");
});

module.exports = dbConnect;