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
//Comapny class
class CompanyServices {
    //Method for registering company.
    static registerCompany(user, company) {
        return __awaiter(this, void 0, void 0, function* () {
            //Collection object
            let compnayDoc = {
                user: [user],
                comapny: company
            };
            try {
                log_config_1.log.info("Company service called");
                let saveComp = yield company_dao_1.CompanyDAO.saveCompany(compnayDoc);
                return saveComp;
            }
            catch (err) {
                log_config_1.log.error("Error occured at company services" + err);
            }
        });
    }
}
exports.CompanyServices = CompanyServices;
//# sourceMappingURL=company.services.js.map