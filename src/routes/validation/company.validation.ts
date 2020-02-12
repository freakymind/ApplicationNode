/**
 * company request validation
 * This file is to check the validation of company API requests.
 * @package src/routes/validation
 * @subpackage validation/company.validation.js
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { check } from '../../util/common.config';
import { message } from '../../util/text.config';
  
  export const CompRegValidation = [
    //Validation for required keys are present or not.
    check('company_name').notEmpty().withMessage(message.basic.key_missing),
    check('company_email').notEmpty().withMessage(message.basic.key_missing),
    check('company_address').notEmpty().withMessage(message.basic.key_missing),
    check('name').notEmpty().withMessage(message.basic.key_missing),
    check('email').notEmpty().withMessage(message.basic.key_missing),
    check('mobile').notEmpty().withMessage(message.basic.key_missing),
    check('country').notEmpty().withMessage(message.basic.key_missing),    
  
    //Company name restriction for string type only.
    check('company_name').isString().withMessage(message.company.name_type_err),
  
    //Validation for company email.
    check('company_email').isEmail().withMessage(message.company.invalid_email_err),
    check('company_email').isLength({
      min: 8,
      max: 50
    }).withMessage(message.company.email_length_err),
  
    //validation for comapny address key
    check('company_address').isString().withMessage(message.company.address_type),
    check('company_address').isLength({
      min: 10,
      max: 150
    }).withMessage(message.company.address_length),
  
    //Validation for company owner name
    check('name').isString().withMessage(message.company.owner_name_type),
    check('name').isLength({
      min: 5,
      max: 50
    }).withMessage(message.company.owner_name_length),
  
    //Validation for owner_email key
    check('email').isEmail().withMessage(message.company.invalid_email_err),
    check('email').isLength({
      min: 8,
      max: 50
    }).withMessage(message.company.email_length_err),
  
    //Validation for owner mobile number
    check('mobile').isString().withMessage(message.company.owner_mobile_type),
    check('mobile').isLength({
      min: 8,
      max: 15
    }).withMessage(message.company.owner_mobile_length),  
  
    //Validation for owner country
    check('country').isString().withMessage(message.company.owner_country_type),
    check('country').isLength({
      min : 1,
      max : 4
    }).withMessage(message.company.owner_country_type_length)
  ];