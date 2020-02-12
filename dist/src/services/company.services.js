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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const company_dao_1 = require("../model/dao/company.dao");
const log_config_1 = require("../log/log.config");
const passwordHash = __importStar(require("password-hash"));
const jwt = __importStar(require("jsonwebtoken"));
class CompanyServices {
    constructor() {
        this.secretKey = process.env.SECRETKEY;
    }
    generateToken(id) {
        return jwt.sign({ email: id }, this.secretKey, {
            expiresIn: '30MIN'
        });
    }
    static registerCompany(user, company) {
        return __awaiter(this, void 0, void 0, function* () {
            let compnayDoc = {
                user: [user],
                comapny: company
            };
            try {
                log_config_1.log.info("Company service called");
                let saveComp = yield company_dao_1.CompanyDAO.saveCompany(compnayDoc);
                delete saveComp.ops[0].user[0].randomString;
                delete saveComp.ops[0].user[0].password;
                return saveComp;
            }
            catch (err) {
                log_config_1.log.error("Error occured at company services" + err);
                throw err;
            }
        });
    }
    getDetails(userName, password, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const companyDao = new company_dao_1.CompanyDAO();
            let usrPwd = password;
            let userData = {
                userEmail: userName,
                password: passwordHash.generate(password)
            };
            try {
                let getDetails = yield companyDao.getDetails_User(userData);
                if (getDetails) {
                    console.log("getDetails", getDetails);
                    for (let user of getDetails.user) {
                        console.log("user", user);
                        if (passwordHash.verify(usrPwd, user.password)) {
                            let token = this.generateToken(userData.userEmail);
                            if (token) {
                                user.token = token;
                                user.status = 0;
                                delete user.password;
                                return user;
                            }
                        }
                        else {
                            let user = {};
                            user["status"] = 1;
                            user["message"] = 'invalid password';
                            return user;
                        }
                    }
                }
                else {
                    let user = {};
                    user["status"] = 1;
                    user["message"] = 'invalid userName';
                    return user;
                }
            }
            catch (err) {
                log_config_1.log.error("Error occured at company services" + err);
                next(err);
            }
        });
    }
}
exports.CompanyServices = CompanyServices;
//# sourceMappingURL=company.services.js.map