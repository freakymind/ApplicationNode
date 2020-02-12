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
const db_config_1 = require("../../config/db.config");
const log_config_1 = require("../../log/log.config");
class CompanyDAO {
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
                throw err;
            }
        });
    }
    getDetails_User(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(userData);
                let db = yield db_config_1.DbConn.getCollObj();
                let getDetails = yield db.findOne({ 'user.userEmail': userData.userEmail }, { 'user.randomString': 0 });
                return getDetails;
            }
            catch (err) {
                log_config_1.log.error("Company DAO error" + err);
                console.log(err);
            }
        });
    }
}
exports.CompanyDAO = CompanyDAO;
//# sourceMappingURL=company.dao.js.map