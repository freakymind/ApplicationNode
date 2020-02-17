"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_config_1 = require("../../util/common.config");
const text_config_1 = require("../../util/text.config");
exports.AuthValidation = [
    common_config_1.check('user_id').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('password').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('user_id').isString().withMessage(text_config_1.message.login.user_id_type),
    common_config_1.check('password').isString().withMessage(text_config_1.message.login.password_type),
    common_config_1.check('user_id').isLength({
        min: 1,
        max: 50
    }).withMessage(text_config_1.message.login.user_id_length),
    common_config_1.check('password').isLength({
        min: 1,
        max: 50
    }).withMessage(text_config_1.message.login.password_length),
];
//# sourceMappingURL=auth.validation.js.map