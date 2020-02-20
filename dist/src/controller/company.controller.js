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
const company_admin_class_1 = require("../model/class/company_admin.class.");
const comapny_class_1 = require("../model/class/comapny.class");
const company_services_1 = require("../services/company.services");
const log_config_1 = require("../log/log.config");
const utill_methods_1 = require("../util/utill.methods");
class CompanyController {
    static companyValidation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = common_config_1.validationResult(req);
            if (!errors.isEmpty()) {
                let errRes = yield response_config_1.ResponseHandler.error(errors.array(), text_config_1.message.basic.req_body_validation_err);
                return res.status(422).send(errRes);
            }
            let user_name = req.body.user_name;
            let email = req.body.email;
            let password = req.body.password;
            let mobile = req.body.mobile;
            let country = req.body.country;
            let address = req.body.address;
            let company_name = req.body.company_name;
            let company_email = req.body.company_email;
            let company_mobile = req.body.company_mobile;
            let company_address = req.body.company_address;
            let salt = yield utill_methods_1.Utill.generateSalt();
            let hashPw = yield utill_methods_1.Utill.generatePassword(password, salt);
            let user = new company_admin_class_1.CompanyAdmin(user_name, email, hashPw, mobile, country, salt, address);
            let company = new comapny_class_1.Company(company_name, company_email, company_mobile, company_address, user.getUserId());
            try {
                log_config_1.log.info("Comapny Controller called");
                let saveComp = yield company_services_1.CompanyServices.registerCompany(user, company);
                return res.status(201).send(yield response_config_1.ResponseHandler.info(saveComp, text_config_1.message.company.succ));
            }
            catch (err) {
                log_config_1.log.error("Error at company controller");
                return res.status(500).send(yield response_config_1.ResponseHandler.error(err, text_config_1.message.company.err));
            }
        });
    }
}
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map