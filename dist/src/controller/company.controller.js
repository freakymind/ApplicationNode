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
const common_config_1 = require("../util/common.config");
const text_config_1 = require("../util/text.config");
const response_config_1 = require("../util/response.config");
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
            let name = req.body.name;
            let email = req.body.email;
            let mobile = req.body.mobile;
            let country = req.body.country;
            let password = req.body.password;
            let comapnyName = req.body.company_name;
            let companyEmail = req.body.company_email;
            let comapnyAddress = req.body.company_address;
            let user = new user_class_1.User(name, email, password, mobile, country);
            let company = new comapny_class_1.Company(comapnyName, companyEmail, comapnyAddress);
            try {
                log_config_1.log.info("Comapny Controller called");
                let saveComp = yield company_services_1.CompanyServices.registerCompany(user, company);
                return res.status(201).send(yield response_config_1.ResponseHandler.info(saveComp.ops, text_config_1.message.company.succ));
            }
            catch (err) {
                log_config_1.log.error("Error at company controller");
                return res.status(500).send(yield response_config_1.ResponseHandler.error(err, text_config_1.message.company.err));
            }
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const companyServices = new company_services_1.CompanyServices();
                let userName = req.body.userName;
                let password = req.body.password;
                let getDetails = yield companyServices.getDetails(userName, password, next);
                if (getDetails.status == 0) {
                    console.log("get", getDetails);
                    delete getDetails.status;
                    let data = getDetails;
                    return res.status(200).send(yield response_config_1.ResponseHandler.info(data, "login successfully done"));
                }
                else {
                    return res.status(401).send(yield response_config_1.ResponseHandler.error({}, getDetails.message));
                }
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map