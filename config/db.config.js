'use strict';

const mysql = require('mysql2');

// const mysql = require('mysql');

//Configurations for the database connection
const dbConnect = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DB
});

// const dbConnect = mysql.createConnection({
//     user: "root",
//     host: "localhost",
//     password: "",
//     database: "employeesystem"
// })

// dbConnect.connect(function(err) {
//     if (err) throw err;

//     console.log("Database Connected!");
// });

module.exports = dbConnect;