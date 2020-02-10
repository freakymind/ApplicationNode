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
 * Comapany DAO
 * This file is responsible for provide database access methods for company services.
 * @package src/model
 * @subpackage model/dao/company.dao
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
const db_config_1 = require("../../config/db.config");
const log_config_1 = require("../../log/log.config");
//Comapny DAO class
class CompanyDAO {
    /**
    @description Method for saving comapny object in DB.
    @param : Compnay collection document.
    @return Returns proper response for success and failure case.
    */
    static saveCompany(comapnyDoc) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let db = yield db_config_1.DbConn.getCollObj();
                let saveCompRes = yield db.insertOne(comapnyDoc);
                log_config_1.log.info("Comapany DAO called");
                return saveCompRes;
            }
            catch (err) {
                log_config_1.log.error("Company DAO error" + err);
            }
        });
    }
}
exports.CompanyDAO = CompanyDAO;
//# sourceMappingURL=company.dao.js.map