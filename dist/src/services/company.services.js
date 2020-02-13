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
const company_dao_1 = require("../model/dao/company.dao");
const log_config_1 = require("../log/log.config");
const jwt_class_1 = require("../model/class/jwt.class");
class CompanyServices {
    static registerCompany(user, company) {
        return __awaiter(this, void 0, void 0, function* () {
            let compnayDoc = {
                user: [user],
                company: company,
                distributor: [{
                        distributor_id: "", distributor_name: "",
                        products: [{ product_id: "", product_name: "" }]
                    }],
                products: [{ product_id: "", product_name: "", mfg: "", batch: "" }]
            };
            try {
                log_config_1.log.info("Company service called");
                let saveComp = yield company_dao_1.CompanyDAO.saveCompany(compnayDoc);
                return yield this.getResObj(saveComp);
            }
            catch (err) {
                log_config_1.log.error("Error occured at company services" + err);
                throw new Error(err);
            }
        });
    }
    static getResObj(saveComp) {
        return __awaiter(this, void 0, void 0, function* () {
            let resObj = {
                "user_name": saveComp.user[0].user_name,
                "user_email": saveComp.user[0].user_email,
                "user_mobile": saveComp.user[0].user_mobile,
                "user_country": saveComp.user[0].user_country,
                "user_role": saveComp.user[0].user_role,
                "user_status": saveComp.user[0].user_status,
                "company_name": saveComp.company.company_name,
                "company_email": saveComp.company.company_email,
                "company_mobile": saveComp.company.company_mobile,
                "company_address": saveComp.company.company_address,
                "token": yield jwt_class_1.JWT.generateToken({
                    'user_email': saveComp.user[0].user_email,
                    'role': saveComp.user[0].user_role
                }),
                "created_on": saveComp.company.created_on,
                "updated_on": saveComp.company.updated_on,
            };
            return [resObj];
        });
    }
}
exports.CompanyServices = CompanyServices;
CompanyServices.secretKey = process.env.SECRETKEY;
//# sourceMappingURL=company.services.js.map