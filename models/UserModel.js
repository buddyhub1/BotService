/**
 * This file is intended to store the model for storing conversational data.
 */
"use strict";
const mongoose = require('mongoose');
//define schema for storing user data
var UserSchema = mongoose.Schema({
    emp_id: String,
    user_name: String,
    user_email: String,
    password: String
});
var UserInfoObject = mongoose.model('User', UserSchema);
module.exports.UserInfoObject = UserInfoObject;