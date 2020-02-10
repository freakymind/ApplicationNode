"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * company controller
 * This file to extract request body data from request object.
 * @package src/controller
 * @subpackage controller/company.controller
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
const common_config_1 = require("../config/common.config");
const text_config_1 = require("../config/text.config");
const response_config_1 = require("../config/response.config");
const user_class_1 = require("../model/class/user.class");
const comapny_class_1 = require("../model/class/comapny.class");
const company_services_1 = require("../services/company.services");
const log_config_1 = require("../log/log.config");
class CompanyController {
    static companyValidation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = common_config_1.validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).send(yield response_config_1.ResponseHandler.error(errors.array(), text_config_1.message.basic.req_body_validation_err));
            }
            //TODO : Extract the data from request object and call the services
            let name = req.body.name;
            let email = req.body.email;
            let mobile = req.body.mobile;
            let country = req.body.country;
            let comapnyName = req.body.company_name;
            let companyEmail = req.body.company_email;
            let comapnyAddress = req.body.company_address;
            let user = new user_class_1.User(name, email, mobile, country);
            let company = new comapny_class_1.Company(comapnyName, companyEmail, comapnyAddress);
            try {
                let saveComp = yield company_services_1.CompanyServices.registerCompany(user, company);
                log_config_1.log.info("Comapny Controller called");
            }
            catch (err) {
                log_config_1.log.error("Error at company controller");
            }
        });
    }
}
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map