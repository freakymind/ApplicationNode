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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const log_config_1 = require("../log/log.config");
const company_dao_1 = require("../model/dao/company.dao");
const response_config_1 = require("../util/response.config");
const mailConfiguration_1 = require("../util/mailConfiguration");
const crypto_1 = __importDefault(require("crypto"));
const utill_methods_1 = require("../util/utill.methods");
function encrypt(email) {
    var cipher = crypto_1.default.createCipher('aes-256-cbc', 'd6F3Efeq');
    var crypted = cipher.update(email, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}
function decrypt(email) {
    var decipher = crypto_1.default.createDecipher('aes-256-cbc', 'd6F3Efeq');
    var dec = decipher.update(email, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}
class PasswordService {
    static forgotPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let encrypted = yield encrypt(email);
                let url = 'http://' + process.env.UI_HOST + ':' + process.env.UI_PORT + '/resetPassword/' + encrypted;
                let userEmail = yield company_dao_1.CompanyDAO.findUserByEmail(email);
                if (userEmail) {
                    let mailResponse = mailConfiguration_1.MailConfiguration.mailtrigger(email, "Reset Password", `Please Click below link to reset your Password ${url}`);
                    if (mailResponse) {
                        let response = response_config_1.ResponseHandler.info({}, 'Mail Successfully sent to reset Password.');
                        return response;
                    }
                    else {
                        let response = response_config_1.ResponseHandler.error({}, 'Mail Trigger Error.');
                        return response;
                    }
                }
                else {
                    let response = response_config_1.ResponseHandler.error({}, 'NO USER FOUND PLEASE REGISTER.');
                    return response;
                }
            }
            catch (err) {
                let response = response_config_1.ResponseHandler.error({}, err);
                return response;
                log_config_1.log.error("Error occured at forgot Password Services" + err);
            }
        });
    }
    static resetPassword(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let decryptedMail = yield decrypt(data.email);
                let userEmail = yield company_dao_1.CompanyDAO.findUserByEmail(decryptedMail);
                if (userEmail) {
                    let salt = yield utill_methods_1.Utill.generateSalt();
                    let hashPw = yield utill_methods_1.Utill.generatePassword(data.password, salt);
                    let updatePass = yield company_dao_1.CompanyDAO.updatePassword(decryptedMail, hashPw, salt);
                    if (updatePass) {
                        let response = response_config_1.ResponseHandler.info({}, 'Password Updated Successfully');
                        return response;
                    }
                    else {
                        let response = response_config_1.ResponseHandler.error({}, 'Error while updating Password');
                        return response;
                    }
                }
                else {
                    let response = response_config_1.ResponseHandler.error({}, 'No User Found');
                    return response;
                }
            }
            catch (err) {
                let response = response_config_1.ResponseHandler.error({}, err);
                return response;
            }
        });
    }
}
exports.PasswordService = PasswordService;
//# sourceMappingURL=password.service.js.map