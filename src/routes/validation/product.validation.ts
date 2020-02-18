

/**
 * product request validation
 * This file is to check the validation of company API requests.
 * @package src/routes/validation
 * @subpackage validation/product.validation.js
 * @author keshavareddy chinthala <chintalakeshava251@gmail.com>
 */

// import { check } from '../../config/common.config';

import { message } from './../../util/text.config';
import {check} from '../../util/common.config'

export const ProductValidation = [
    check('product_Name').notEmpty().withMessage(message.basic.key_missing),
    check('brand').notEmpty().withMessage(message.basic.key_missing),
    check('product_dimensions').notEmpty().withMessage(message.basic.key_missing),
    check('company_Ref').notEmpty().withMessage(message.basic.key_missing),
    check('UPCA').notEmpty().withMessage(message.basic.key_missing),
    check('countrycode').notEmpty().withMessage(message.basic.key_missing),
    check('Weight').notEmpty().withMessage(message.basic.key_missing),

    check('brand').isString().withMessage(message.product.brand_type),
    check('product_dimensions').isString().withMessage(message.product.product_dimension_type),
    check('company_Ref').isString().withMessage(message.product.company_Ref_Type),
    check('UPCA').isNumeric().withMessage(message.product.UPCA_type),
    check('countrycode').isNumeric().withMessage(message.product.country_Code_Type),
    check('Weight').isNumeric().withMessage(message.product.weight_Type),

    check('brand').isLength({
        min: 4,
        max: 25
    }).withMessage(message.product.brand_length),
    check('product_dimensions').isLength({
        min: 1
    }).withMessage(message.product.product_dimension_length),
    check('company_Ref').isLength({
        min: 5,
        max: 100
    }).withMessage(message.product.company_Ref_length),
    check('UPCA').isLength({
        min: 3,
        max: 15
    }).withMessage(message.product.UPCA_length),
    check('countrycode').isLength({
        min: 4,
        max: 25
    }).withMessage(message.product.contrycode_length),
    check('Weight').isLength({
        min: 1,
        max: 100
    }).withMessage(message.product.weight_length),
];
