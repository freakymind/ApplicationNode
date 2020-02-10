"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * app.js
 * This file acts as main file for this application a.k.a server file.
 * @package src/app.js
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
const express = require("express");
const bodyparser = require("body-parser");
const app = express();
exports.router = express.Router();
require('dotenv').config();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
//Router files
app.use(require('./src/routes/API/company.api'));
app.listen(process.env.SERVER_PORT, () => {
    console.log('Server is running on port as ' + process.env.SERVER_PORT + '...!!!');
});
module.exports = app;
//# sourceMappingURL=server.js.map