"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_config_1 = require("../../util/common.config");
const text_config_1 = require("../../util/text.config");
exports.AddUserValidation = [
    common_config_1.check('name').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('email').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('mobile').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('country').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('address').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('role').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('name').isString().withMessage(text_config_1.message.company_user.name_type),
    common_config_1.check('name').isLength({
        min: 1,
        max: 100
    }).withMessage(text_config_1.message.company_user.name_length),
    common_config_1.check('email').isEmail().withMessage(text_config_1.message.basic.invalid_email),
    common_config_1.check('email').isLength({
        min: 8,
        max: 100
    }).withMessage(text_config_1.message.company.email_length_err),
    common_config_1.check('mobile').isString().withMessage(text_config_1.message.company_user.mobile_number_type),
    common_config_1.check('mobile').isLength({
        min: 8,
        max: 15
    }).withMessage(text_config_1.message.company_user.user_mobile_length),
    common_config_1.check('country').isString().withMessage(text_config_1.message.company.owner_country_type),
    common_config_1.check('country').isLength({
        min: 3,
        max: 25
    }).withMessage(text_config_1.message.company.owner_country_type_length),
    common_config_1.check('address').isString().withMessage(text_config_1.message.company_user.user_address_type),
    common_config_1.check('address').isLength({
        min: 5,
        max: 150
    }).withMessage(text_config_1.message.company_user.user_address_length),
];
//# sourceMappingURL=user.validation.js.map