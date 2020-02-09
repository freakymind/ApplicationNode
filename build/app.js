"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * app.js
 * This file acts as main file for this application a.k.a server file.
 * @package src/app.js
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
var express = require("express");
var bodyparser = require("body-parser");
var app = express();
exports.router = express.Router();
require('dotenv').config();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
//Router files
app.use(require('./routes/API/company.api'));
app.listen(process.env.SERVER_PORT, function () {
    console.log('Server is running on port ' + process.env.SERVER_PORT + '...!!!');
});
module.exports = app;
