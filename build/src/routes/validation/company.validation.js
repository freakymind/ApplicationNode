"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * company request validation
 * This file is to check the validation of company API requests.
 * @package src/routes/validation
 * @subpackage validation/company.validation.js
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
var common_config_1 = require("../../config/common.config");
var text_config_1 = require("../../config/text.config");
exports.CompRegValidation = [
    //Validation for required keys are present or not.
    common_config_1.check('company_name').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('company_email').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('company_address').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('owner_name').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('owner_email').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('owner_mobile').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('owner_country').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    //Company name restriction for string type only.
    common_config_1.check('company_name').isString().withMessage(text_config_1.message.company.name_type_err),
    //Validation for company email.
    common_config_1.check('company_email').isEmail().withMessage(text_config_1.message.company.invalid_email_err),
    common_config_1.check('company_email').isLength({
        min: 8,
        max: 50
    }).withMessage(text_config_1.message.company.email_length_err),
    //validation for comapny address key
    common_config_1.check('company_address').isString().withMessage(text_config_1.message.company.address_type),
    common_config_1.check('company_address').isLength({
        min: 10,
        max: 150
    }).withMessage(text_config_1.message.company.address_length),
    //Validation for company owner name
    common_config_1.check('owner_name').isString().withMessage(text_config_1.message.company.owner_name_type),
    common_config_1.check('owner_name').isLength({
        min: 5,
        max: 50
    }).withMessage(text_config_1.message.company.owner_name_length),
    //Validation for owner_email key
    common_config_1.check('owner_email').isEmail().withMessage(text_config_1.message.company.invalid_email_err),
    common_config_1.check('owner_email').isLength({
        min: 8,
        max: 50
    }).withMessage(text_config_1.message.company.email_length_err),
    //Validation for owner mobile number
    common_config_1.check('owner_mobile').isString().withMessage(text_config_1.message.company.owner_mobile_type),
    common_config_1.check('owner_mobile').isLength({
        min: 8,
        max: 15
    }).withMessage(text_config_1.message.company.owner_mobile_length),
    //Validation for owner country
    common_config_1.check('owner_country').isString().withMessage(text_config_1.message.company.owner_country_type),
    common_config_1.check('owner_country').isLength({
        min: 1,
        max: 4
    }).withMessage(text_config_1.message.company.owner_country_type_length)
];
