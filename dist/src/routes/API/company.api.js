"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../../../server");
const company_validation_1 = require("../validation/company.validation");
const company_controller_1 = require("../../controller/company.controller");
server_1.router.get('/test', (req, res) => {
    res.status(200).send({ msg: 'Server running...!!!', status: 0 });
});
server_1.router.post('/registerCompany', company_validation_1.CompRegValidation, company_controller_1.CompanyController.companyValidation);
module.exports = server_1.router;
//# sourceMappingURL=company.api.js.map