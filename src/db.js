const mysql = require("mysql");
const waitPort = require('wait-port');
//const dbConfig = require("../db.config.js");

async function init() {
    await waitPort({ host: process.env.DATABASE_HOST, port : 3306, timeout: 15000 });
}

// Create a connection to the database
const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,//"127.0.0.1",//"localhost", //dbConfig.HOST,
    user: "root", // dbConfig.USER,
    password: '123@ABcd', //dbConfig.PASSWORD,
    database: "testdb", // dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = {
    init,
    connection
};
//module.exports = connection;