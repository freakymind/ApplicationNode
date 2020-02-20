"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const text_config_1 = require("./../../util/text.config");
const common_config_1 = require("../../util/common.config");
exports.ProductValidation = [
    common_config_1.check('product_Name').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('brand').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('product_dimensions').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('company_Ref').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('UPCA').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('countrycode').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('Weight').notEmpty().withMessage(text_config_1.message.basic.key_missing),
    common_config_1.check('brand').isString().withMessage(text_config_1.message.product.brand_type),
    common_config_1.check('product_dimensions').isString().withMessage(text_config_1.message.product.product_dimension_type),
    common_config_1.check('company_Ref').isString().withMessage(text_config_1.message.product.company_Ref_Type),
    common_config_1.check('UPCA').isNumeric().withMessage(text_config_1.message.product.UPCA_type),
    common_config_1.check('countrycode').isNumeric().withMessage(text_config_1.message.product.country_Code_Type),
    common_config_1.check('Weight').isNumeric().withMessage(text_config_1.message.product.weight_Type),
    common_config_1.check('brand').isLength({
        min: 4,
        max: 25
    }).withMessage(text_config_1.message.product.brand_length),
    common_config_1.check('product_dimensions').isLength({
        min: 1
    }).withMessage(text_config_1.message.product.product_dimension_length),
    common_config_1.check('company_Ref').isLength({
        min: 5,
        max: 100
    }).withMessage(text_config_1.message.product.company_Ref_length),
    common_config_1.check('UPCA').isLength({
        min: 3,
        max: 15
    }).withMessage(text_config_1.message.product.UPCA_length),
    common_config_1.check('countrycode').isLength({
        min: 4,
        max: 25
    }).withMessage(text_config_1.message.product.contrycode_length),
    common_config_1.check('Weight').isLength({
        min: 1,
        max: 100
    }).withMessage(text_config_1.message.product.weight_length),
];
//# sourceMappingURL=product.validation.js.map