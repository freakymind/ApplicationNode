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
const user_dao_1 = require("../model/dao/user.dao");
const log_config_1 = require("../log/log.config");
const jwt_class_1 = require("../model/class/jwt.class");
const common_config_1 = require("../util/common.config");
const db_config_1 = require("../config/db.config");
class CompanyServices {
    static registerCompany(user, company) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield db_config_1.DbConn.getConnObj();
            let session = yield conn.startSession();
            try {
                yield session.withTransaction(() => __awaiter(this, void 0, void 0, function* () {
                    yield user_dao_1.UserDAO.saveUser(user, session);
                    yield company_dao_1.CompanyDAO.saveCompany(company, session);
                }), common_config_1.transactionOptions);
                return this.getResObj(user, company);
            }
            catch (err) {
                log_config_1.log.error(err);
            }
            finally {
                yield session.endSession();
            }
        });
    }
    static getResObj(user, company) {
        return __awaiter(this, void 0, void 0, function* () {
            let resObj = {
                "user_name": user.getUserName(),
                "user_email": user.getUserEmail(),
                "user_mobile": user.getUserMobile(),
                "user_country": user.getUserCountry(),
                "user_role": user.getUserRole(),
                "user_status": user.getUserStatus(),
                "company_name": company.getCompName(),
                "company_email": company.getCompEmail(),
                "company_mobile": company.getCompMobile(),
                "company_address": company.getCompAddress(),
                "token": yield jwt_class_1.JWT.generateToken({
                    'user_email': user.getUserEmail(),
                    'role': user.getUserRole()
                }),
                "created_on": user.getUserCreatedOn(),
                "updated_on": user.getUserUpdatedOn(),
            };
            return [resObj];
        });
    }
}
exports.CompanyServices = CompanyServices;
CompanyServices.secretKey = process.env.SECRETKEY;
//# sourceMappingURL=company.services.js.map