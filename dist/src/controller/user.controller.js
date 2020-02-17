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
const jwt_class_1 = require("../model/class/jwt.class");
class UserController {
    static addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = common_config_1.validationResult(req);
            if (!errors.isEmpty()) {
                let errRes = yield response_config_1.ResponseHandler.error(errors.array(), text_config_1.message.basic.req_body_validation_err);
                return res.status(422).send(errRes);
            }
            let token = JSON.stringify(req.headers['authorization']);
            let value = token.split(' ');
            let decode = yield jwt_class_1.JWT.verifyToken(value[1]);
            console.log(decode);
            let name = req.body.name;
            let email = req.body.email;
            let mobile = req.body.mobile;
            let country = req.body.country;
            let address = req.body.address;
            let role = req.body.role;
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map