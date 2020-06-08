var express = require('express')
var app = express()
const bodyParser = require("body-parser");

// parse requests of content-type: application/json
app.use(bodyParser.json());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world')
})

require("./route.js")(app);

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});