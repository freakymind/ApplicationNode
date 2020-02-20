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
    static saveCompany(company, session) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let coll = yield db_config_1.DbConn.getCompColl();
                let saveCompRes = yield coll.insertOne(company, { session });
                log_config_1.log.info("Comapany DAO called");
                return saveCompRes.ops[0];
            }
            catch (err) {
                log_config_1.log.error("Company DAO error" + err);
                throw new Error(err);
            }
        });
    }
    static findUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let db = yield db_config_1.DbConn.getUserColl();
                let saveCompRes = yield db.findOne({ "user.user_email": `${email}` });
                log_config_1.log.info("Comapany DAO called");
                return saveCompRes;
            }
            catch (err) {
                log_config_1.log.error("Company DAO error" + err);
            }
        });
    }
    static updatePassword(email, hasPwd, salt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let db = yield db_config_1.DbConn.getUserColl();
                let updatePass = db.updateOne({ "user.user_email": email }, {
                    $set: {
                        'user.$.user_password': hasPwd,
                        'user.$.password_salt': salt
                    }
                });
                log_config_1.log.info("Comapany DAO called");
                return updatePass;
            }
            catch (err) {
                return err;
                log_config_1.log.error("Company DAO error" + err);
            }
        });
    }
}
exports.CompanyDAO = CompanyDAO;
//# sourceMappingURL=company.dao.js.map