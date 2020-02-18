"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_config_1 = require("../../util/common.config");
const text_config_1 = require("../../util/text.config");
exports.ForgotPassValidation = [
    common_config_1.check('email').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('email').isEmail().withMessage(text_config_1.message.company.invalid_email_err),
    common_config_1.check('email').isLength({
        min: 8,
        max: 50
    }).withMessage(text_config_1.message.company.email_length_err),
];
exports.ResetPassValidation = [
    common_config_1.check('email').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('password').notEmpty().withMessage(text_config_1.message.basic.key_missing)
];
//# sourceMappingURL=password.validation.js.map