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
const auth_services_1 = require("../services/auth.services");
class AuthController {
    static validateAuthReq(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = common_config_1.validationResult(req);
            if (!errors.isEmpty()) {
                let errRes = yield response_config_1.ResponseHandler.error(errors.array(), text_config_1.message.basic.req_body_validation_err);
                return res.status(422).send(errRes);
            }
            let user_id = req.body.user_id;
            let password = req.body.password;
            let authRes = yield auth_services_1.AuthServices.login(user_id, password);
            if (authRes[0].status) {
                let succRes = yield response_config_1.ResponseHandler.info(authRes, text_config_1.message.login.succ);
                return res.status(200).send(succRes);
            }
            let errRes = yield response_config_1.ResponseHandler.error(authRes, text_config_1.message.login.fail);
            return res.status(422).send(errRes);
        });
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map