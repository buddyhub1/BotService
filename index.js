var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var mongo_connection = require('./webService/MongoConnection');
mongo_connection.connectionWithDB();
var app = express();
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//------- Body parser
// app.use(bodyParser.text());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())
app.use('/userRoute', require('./routes/userRoute'));
//------- Start app at post 9090
var port = process.env.PORT || 9090;
app.listen(port, function() {
    console.log("Server listening at " + port);
});