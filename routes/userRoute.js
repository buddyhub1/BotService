//This class contains all the services related to a userDetail which include create,update,delete,read.
/*

owner : Pranali Gatfane
updated on : 21/05/18

*/
var express = require('express');
var router = express.Router();
var isJSON = require('is-valid-json');
var support = require('./support');
var userModelObject = require('../models/UserModel');
var util = require('./utils');
router.post('/', (request, response) => {
    console.log(request.body);

    (response.send("In User Detail"))
});
router.post('/create', (request, response) => {
    try {
        console.log("inside create post");
        console.log(request.body);
        var data = request.body;
        console.log(JSON.stringify(data));
        // if (data == "" || data == null) {
        //     console.log("inside invalid json");

        // }
        // let body = '';
        // request.on('data', chunk => {
        //     body += chunk.toString();
        // });

        if (Object.keys(request.body).length == 0) {
            var respObj = {};
            respObj["status"] = "201";
            respObj["message"] = "Bad Request";
            response.send(respObj);
        }

        // if (body == '' || body == null || body == undefined) {
        //     console.log("inside invalid json");
        //     // support.badRequest(response);
        //     response.send("bad request");
        // } 
        else {
            // var data = JSON.parse(request.body);
            if (isJSON(data)) {
                console.log("inside valid json");

                var userInfo = new userModelObject.UserInfoObject(data);
                userInfo.save(function(error, result) {
                    if (error) {
                        support.log(error);
                        support.error(response, error.errmsg);
                    } else {
                        support.log("data saved successfully");
                        support.success(response, result);
                    }
                });
            } else {
                support.log("invalid data");
                support.invalidData(response);
            }
        }



    } catch (error) {
        support.log(error);
        support.badRequest(response);
    }
});

// Get meta data list
router.post('/getList', (request, response) => {
    try {
        var data = request.body;
        var query = {};
        if (isJSON(data)) {
            data.query = util.checkEmpty(data.query) ? "" : data.query;
            userModelObject.UserInfoObject.findOne(query, (error, result) => {
                if (error) {
                    support.log(error);
                    support.error(response, error);
                } else {
                    support.log("Success");
                    support.log(" ALL Metadata Found.");
                    support.success(response, result);
                }
            })
        } else {
            support.log("invalid data");
            support.invalidData(response);
        }
    } catch (error) {
        support.log(error);
        support.badRequest(response);
    }
});
module.exports = router;