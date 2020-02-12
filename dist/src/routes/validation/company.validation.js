"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_config_1 = require("../../util/common.config");
const text_config_1 = require("../../util/text.config");
exports.CompRegValidation = [
    common_config_1.check('company_name').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('company_email').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('company_address').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('name').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('email').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('mobile').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('country').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('company_name').isString().withMessage(text_config_1.message.company.name_type_err),
    common_config_1.check('company_email').isEmail().withMessage(text_config_1.message.company.invalid_email_err),
    common_config_1.check('company_email').isLength({
        min: 8,
        max: 50
    }).withMessage(text_config_1.message.company.email_length_err),
    common_config_1.check('company_address').isString().withMessage(text_config_1.message.company.address_type),
    common_config_1.check('company_address').isLength({
        min: 10,
        max: 150
    }).withMessage(text_config_1.message.company.address_length),
    common_config_1.check('name').isString().withMessage(text_config_1.message.company.owner_name_type),
    common_config_1.check('name').isLength({
        min: 5,
        max: 50
    }).withMessage(text_config_1.message.company.owner_name_length),
    common_config_1.check('email').isEmail().withMessage(text_config_1.message.company.invalid_email_err),
    common_config_1.check('email').isLength({
        min: 8,
        max: 50
    }).withMessage(text_config_1.message.company.email_length_err),
    common_config_1.check('mobile').isString().withMessage(text_config_1.message.company.owner_mobile_type),
    common_config_1.check('mobile').isLength({
        min: 8,
        max: 15
    }).withMessage(text_config_1.message.company.owner_mobile_length),
    common_config_1.check('country').isString().withMessage(text_config_1.message.company.owner_country_type),
    common_config_1.check('country').isLength({
        min: 1,
        max: 4
    }).withMessage(text_config_1.message.company.owner_country_type_length)
];
//# sourceMappingURL=company.validation.js.map