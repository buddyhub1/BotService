"use strict";
var mongoose = require('mongoose');
var config = require('../routes/config');
var options = {
    // server: {

    // connectTimeoutMS: 300000,
    // socketTimeoutMS: 300000,

    reconnectTries: 300000,
    autoReconnect: true



    // poolSize: 5,
    // auto_reconnect: true,
    // socketOptions: {
    //     keepAlive: 1,
    // connectTimeoutMS: c,
    // socketTimeoutMS: 300000
    //}
    //}
};

var connectionWithDB = function() {
    mongoose.connect(config.mongoConnectionUrl, options);
    mongoose.connection.on('connected', function() {
        console.log("connected");
    });
    mongoose.connection.on('error', function() {
        console.log("error");

    });
    mongoose.connection.on('disconnected', function() {
        console.log("disconnected");

    });
}
module.exports.connectionWithDB = connectionWithDB;