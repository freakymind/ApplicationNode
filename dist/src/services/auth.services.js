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
const text_config_1 = require("../util/text.config");
class AuthServices {
    static login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let authRes = yield auth_dao_1.AuthDAO.authenticate(username);
                if (authRes.length > 0) {
                    let hashPw = yield utill_methods_1.Utill.generatePassword(password, authRes[0].user[0].password_salt);
                    if (hashPw == authRes[0].user[0].user_password) {
                        let loginRes = [{
                                token: yield jwt_class_1.JWT.generateToken({
                                    email: authRes[0].user[0].user_email,
                                    role: authRes[0].user[0].user_role
                                }),
                                status: true
                            }];
                        return loginRes;
                    }
                    else {
                        let loginRes = [{
                                status: false
                            }];
                        return loginRes;
                    }
                }
                else {
                    let loginRes = [{
                            status: false,
                            msg: text_config_1.message.login.user_not_found
                        }];
                    return loginRes;
                }
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.AuthServices = AuthServices;
//# sourceMappingURL=auth.services.js.map