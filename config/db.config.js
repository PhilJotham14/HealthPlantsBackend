'use strict';

const mysql = require('mysql');

// Configurations for the database connection
const dbConnect = mysql.createPool({
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'b635cdd78cf9c8',
    password: '12faab67',
    database: 'heroku_d05d884ef7b862e'
});

// dbConnect.connect(function(err) {
//     if (err) throw err;

//     console.log("Database Connected!");
// });

module.exports = dbConnect;