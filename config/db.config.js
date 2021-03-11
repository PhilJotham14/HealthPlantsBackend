'use strict';

const mysql = require('mysql2');

// Configurations for the database connection
const dbConnect = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DB
});

// dbConnect.connect(function(err) {
//     if (err) throw err;

//     console.log("Database Connected!");
// });

module.exports = dbConnect;