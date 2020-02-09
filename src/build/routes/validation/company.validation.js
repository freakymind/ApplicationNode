"use strict";
// /**
//  * company request validation
//  * This file is to check the validation of company API requests.
//  * @package src/routes/validation
//  * @subpackage validation/company.validation.js
//  * @author Sekhara suman sahu <sekharasahu@gmail.com>
//  */
// // import {
// //     check
// //   } from '../../config/db.config';
// //   import {
// //     message
// //   } from '../../config/text.config';
//   export const RegisterCompValidation = [
//     //Validation for required keys are present or not.
//     check('company_name').notEmpty().withMessage(message.basic.key_missing),
//     check('company_email').notEmpty().withMessage(message.basic.key_missing),
//     check('company_address').notEmpty().withMessage(message.basic.key_missing),
//     check('owner_name').notEmpty().withMessage(message.basic.key_missing),
//     check('owner_email').notEmpty().withMessage(message.basic.key_missing),
//     check('owner_mobile').notEmpty().withMessage(message.basic.key_missing),
//     check('owner_country').notEmpty().withMessage(message.basic.key_missing),
//     //Company name restriction for string type only.
//     check('company_name').isString().withMessage(message.company.name_type_err),
//     //Validation for company email.
//     check('company_email').isEmail().withMessage(message.company.invalid_email_err),
//     check('company_email').isLength({
//       min: 8,
//       max: 50
//     }).withMessage(message.company.email_length_err),
//     //validation for comapny address key
//     check('company_address').isString().withMessage(message.company.address_type),
//     check('company_address').isLength({
//       min: 10,
//       max: 150
//     }).withMessage(message.company.address_length),
//     //Validation for company owner name
//     check('owner_name').isString().withMessage(message.company.owner_name_type),
//     check('owner_name').isLength({
//       min: 5,
//       max: 50
//     }).withMessage(message.company.owner_name_length),
//     //Validation for owner_email key
//     check('owner_email').isEmail().withMessage(message.company.invalid_email_err),
//     check('owner_email').isLength({
//       min: 8,
//       max: 50
//     }).withMessage(message.company.email_length_err),
//     //Validation for owner mobile number
//     check('owner_mobile').isString().withMessage(message.company.owner_mobile_type),
//     check('owner_mobile').isLength({
//       min: 8,
//       max: 15
//     }).withMessage(message.company.owner_mobile_length),
//     //Validation for owner country
//     check('owner_country').isString().withMessage(message.company.owner_country_type),
//     check('owner_country').isLength({
//       min : 1,
//       max : 4
//     }).withMessage(message.company.owner_country_type_length)
//   ];
