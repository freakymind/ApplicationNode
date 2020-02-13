/**
 * company request validation
 * This file is to check the validation of company API requests.
 * @package src/routes/validation
 * @subpackage validation/company.validation.js
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { check} from '../../util/common.config';
import { message } from '../../util/text.config';
import { DbConn } from '../../config/db.config';
  
  export const CompRegValidation = [
    //Validation for required keys are present or not.
    check('company_name').notEmpty().withMessage(message.basic.key_missing),
    check('company_email').notEmpty().withMessage(message.basic.key_missing),
    check('company_address').notEmpty().withMessage(message.basic.key_missing),
    check('company_mobile').notEmpty().withMessage(message.basic.key_missing),
    
    check('user_name').notEmpty().withMessage(message.basic.key_missing),
    check('email').notEmpty().withMessage(message.basic.key_missing),
    check('mobile').notEmpty().withMessage(message.basic.key_missing),
    check('address').notEmpty().withMessage(message.basic.key_missing),
    check('password').notEmpty().withMessage(message.basic.key_missing),
    check('country').notEmpty().withMessage(message.basic.key_missing),    
  
    //Company name restriction for string type only.
    check('company_name').isString().withMessage(message.company.name_type_err),
  
    //Validation for company email.
    check('company_email').isEmail().withMessage(message.company.invalid_email_err),
    check('company_email').isLength({
      min: 8,
      max: 50
    }).withMessage(message.company.email_length_err),
    check('company_email').custom(async (email : string) =>{
      let conn = await DbConn.getCollObj();
      let isExist = await conn.findOne({"comapny.compEmail" : email});
      if(isExist){
        return Promise.reject(message.company.comp_email_exist);
      }
    }),
  
    //validation for comapny address key
    check('company_address').isString().withMessage(message.company.address_type),
    check('company_address').isLength({
      min: 5,
      max: 150
    }).withMessage(message.company.address_length),
  
    //Validation for company owner name
    check('user_name').isString().withMessage(message.company.owner_name_type),
    check('user_name').isLength({
      min: 5,
      max: 50
    }).withMessage(message.company.owner_name_length),
  
    //Validation for owner_email key
    check('email').isEmail().withMessage(message.company.invalid_email_err),
    check('email').isLength({
      min: 8,
      max: 50
    }).withMessage(message.company.email_length_err),
    check('email').custom(async (email : string) =>{
      let conn = await DbConn.getCollObj();
      let isExist = await conn.findOne({"user.email" : email});
      if(isExist){
        return Promise.reject(message.company.comp_email_exist);
      }
    }),
  
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
      max : 25
    }).withMessage(message.company.owner_country_type_length)
  ];