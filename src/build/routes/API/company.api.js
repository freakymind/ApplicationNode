"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * company route
 * This file to define routes for company file.
 * @package src/routes
 * @subpackage routes/API/company
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
var app_1 = require("../../app");
//Default route for checking server status
app_1.router.get('/', function (req, res) {
    res.status(200).send({ msg: 'Server running...!!!', status: 0 });
});
//Router for Compeny registrtion
//router.post('/service/registerCompany', RegisterCompValidation, CompanyServices.registerCompany);
module.exports = app_1.router;
