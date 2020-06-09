var express = require('express')
var app = express()
const bodyParser = require("body-parser");
const db = require('./db.js');
var ip = require("ip");
console.dir ( ip.address() );


// parse requests of content-type: application/json
app.use(bodyParser.json());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world')
})

require("./route.js")(app);

db.init().then(() => {
    // set port, listen for requests
    app.listen(3000, () => { console.log("Server is running on port 3000."); });
}).catch((err) => {
    console.error(err);
    process.exit(1);
});
// // set port, listen for requests
// app.listen(3000, () => {
//     console.log("Server is running on port 3000.");
// });