"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../../../server");
const company_validation_1 = require("../validation/company.validation");
const auth_validation_1 = require("../validation/auth.validation");
const company_controller_1 = require("../../controller/company.controller");
const auth_controller_1 = require("../../controller/auth.controller");
const user_validation_1 = require("../validation/user.validation");
const user_controller_1 = require("../../controller/user.controller");
server_1.router.get('/test', (req, res) => {
    res.status(200).send({ msg: 'Server running...!!!', status: 0 });
});
server_1.router.post('/registerCompany', company_validation_1.CompRegValidation, company_controller_1.CompanyController.companyValidation);
server_1.router.post('/login', auth_validation_1.AuthValidation, auth_controller_1.AuthController.validateAuthReq);
server_1.router.post('/company/add_user', user_validation_1.AddUserValidation, user_controller_1.UserController.addUser);
module.exports = server_1.router;
//# sourceMappingURL=company.api.js.map