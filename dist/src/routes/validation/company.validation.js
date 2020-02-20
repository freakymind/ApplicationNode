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
const common_config_1 = require("../../util/common.config");
const text_config_1 = require("../../util/text.config");
const db_config_1 = require("../../config/db.config");
exports.CompRegValidation = [
    common_config_1.check('company_name').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('company_email').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('company_address').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('company_mobile').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('user_name').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('email').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('mobile').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('address').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('password').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('country').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('company_name').isString().withMessage(text_config_1.message.company.name_type_err),
    common_config_1.check('company_email').isEmail().withMessage(text_config_1.message.company.invalid_email_err),
    common_config_1.check('company_email').isLength({
        min: 8,
        max: 50
    }).withMessage(text_config_1.message.company.email_length_err),
    common_config_1.check('company_email').custom((email) => __awaiter(void 0, void 0, void 0, function* () {
        let conn = yield db_config_1.DbConn.getCompColl();
        let isExist = yield conn.findOne({ "company_email": email });
        if (isExist) {
            return Promise.reject(text_config_1.message.company.comp_email_exist);
        }
    })),
    common_config_1.check('company_address').isString().withMessage(text_config_1.message.company.address_type),
    common_config_1.check('company_address').isLength({
        min: 5,
        max: 150
    }).withMessage(text_config_1.message.company.address_length),
    common_config_1.check('user_name').isString().withMessage(text_config_1.message.company.owner_name_type),
    common_config_1.check('user_name').isLength({
        min: 5,
        max: 50
    }).withMessage(text_config_1.message.company.owner_name_length),
    common_config_1.check('email').isEmail().withMessage(text_config_1.message.company.invalid_email_err),
    common_config_1.check('email').isLength({
        min: 8,
        max: 50
    }).withMessage(text_config_1.message.company.email_length_err),
    common_config_1.check('email').custom((email) => __awaiter(void 0, void 0, void 0, function* () {
        let conn = yield db_config_1.DbConn.getUserColl();
        let isExist = yield conn.findOne({ "user_email": email });
        if (isExist) {
            return Promise.reject(text_config_1.message.company.user_email_exist);
        }
    })),
    common_config_1.check('mobile').isString().withMessage(text_config_1.message.company.owner_mobile_type),
    common_config_1.check('mobile').isLength({
        min: 8,
        max: 15
    }).withMessage(text_config_1.message.company.owner_mobile_length),
    common_config_1.check('country').isString().withMessage(text_config_1.message.company.owner_country_type),
    common_config_1.check('country').isLength({
        min: 1,
        max: 25
    }).withMessage(text_config_1.message.company.owner_country_type_length)
];
//# sourceMappingURL=company.validation.js.map