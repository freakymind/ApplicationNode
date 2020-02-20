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
const auth_dao_1 = require("../model/dao/auth.dao");
const utill_methods_1 = require("../util/utill.methods");
const jwt_class_1 = require("../model/class/jwt.class");
const log_config_1 = require("../log/log.config");
class AuthServices {
    static login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let authRes = yield auth_dao_1.AuthDAO.authenticate(username);
                if (authRes.length > 0) {
                    let user_email = authRes[0].user_email;
                    let user_role = authRes[0].user_role;
                    let user_id = authRes[0].user_id;
                    let salt = authRes[0].password_salt;
                    let userPw = authRes[0].user_password;
                    let hashPw = yield utill_methods_1.Utill.generatePassword(password, salt);
                    if (hashPw == userPw) {
                        return yield this.resObj(user_email, user_role, user_id, true);
                    }
                    return yield this.resObj('', '', '', false);
                }
                else {
                    return yield this.resObj('', '', '', false);
                }
            }
            catch (err) {
                log_config_1.log.error(err);
            }
        });
    }
    static resObj(email, role, user_id, isSuccess) {
        return __awaiter(this, void 0, void 0, function* () {
            let loginRes = [];
            if (isSuccess) {
                let obj = {
                    token: yield jwt_class_1.JWT.generateToken({
                        email: email,
                        user_id: user_id,
                        role: role
                    }),
                    status: isSuccess
                };
                loginRes.push(obj);
            }
            else {
                let obj = {
                    status: isSuccess
                };
                loginRes.push(obj);
            }
            return loginRes;
        });
    }
}
exports.AuthServices = AuthServices;
//# sourceMappingURL=auth.services.js.map