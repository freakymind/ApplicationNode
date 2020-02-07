"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_config_1 = require("./config/environment.config");
var express = require("express");
var bodyparser = require("body-parser");
//declare let app : any;
var app = express();
exports.router = express.Router();
require('dotenv').config();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.listen(environment_config_1.DBPORT, function () {
    console.log('Server is running on port ' + environment_config_1.DBPORT + '...!!!');
});
module.exports = app;
