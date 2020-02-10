"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * company route
 * This file to define routes for company file.
 * @package src/routes
 * @subpackage routes/API/company
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
const server_1 = require("../../../server");
const company_validation_1 = require("../validation/company.validation");
const company_controller_1 = require("../../controller/company.controller");
//Default route for checking server status
server_1.router.get('/', (req, res) => {
    res.status(200).send({ msg: 'Server running...!!!', status: 0 });
});
//Router for Compeny registrtion
server_1.router.post('/service/registerCompany', company_validation_1.CompRegValidation, company_controller_1.CompanyController.companyValidation);
module.exports = server_1.router;
//# sourceMappingURL=company.api.js.map