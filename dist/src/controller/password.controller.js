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
const common_config_1 = require("../util/common.config");
const response_config_1 = require("../util/response.config");
const text_config_1 = require("../util/text.config");
const log_config_1 = require("../log/log.config");
const password_service_1 = require("../services/password.service");
class PasswordController {
    static forgotPasswordValidation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = common_config_1.validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).send(yield response_config_1.ResponseHandler.error(errors.array(), text_config_1.message.basic.req_body_validation_err));
            }
            let email = req.body.email;
            try {
                let forgotPass = yield password_service_1.PasswordService.forgotPassword(email);
                return res.status(201).send(forgotPass);
            }
            catch (err) {
                log_config_1.log.error("Error at password controller");
                return res.status(500).send(response_config_1.ResponseHandler.error(err, text_config_1.message.password.resetErr));
            }
        });
    }
    static resetPasswordValidation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = common_config_1.validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).send(yield response_config_1.ResponseHandler.error(errors.array(), text_config_1.message.basic.req_body_validation_err));
            }
            let data = {
                email: req.body.email,
                password: req.body.password
            };
            try {
                let resetPass = yield password_service_1.PasswordService.resetPassword(data);
                return res.status(201).send(resetPass);
            }
            catch (err) {
                log_config_1.log.error("Error at password controller");
                return res.status(500).send(response_config_1.ResponseHandler.error(err, text_config_1.message.password.resetErr));
            }
        });
    }
}
exports.PasswordController = PasswordController;
//# sourceMappingURL=password.controller.js.map