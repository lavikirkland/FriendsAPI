const mysql = require("mysql");
//const dbConfig = require("../db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
    host: "localhost", //dbConfig.HOST,
    user: "root", // dbConfig.USER,
    password: '123@ABcd', //dbConfig.PASSWORD,
    database: "testdb", // dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection;