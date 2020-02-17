/**
 * user validation
 * This file is to implement the validation addition, updation and deletion of company user.
 * @package src/routes
 * @subpackage routes/validation/user.validation
 * @author Sekhara suman sahu <sekharasahu@gmail.com>,krishnakanth<krishnakanth.r@ojas-it.com>
 */

import { check, header} from '../../util/common.config';
import { message } from '../../util/text.config';

 export const AddUserValidation = [
   //Basic key validation 
   check('name').notEmpty().withMessage(message.basic.key_missing),
   check('email').notEmpty().withMessage(message.basic.key_missing),
   check('mobile').notEmpty().withMessage(message.basic.key_missing),
   check('country').notEmpty().withMessage(message.basic.key_missing),
   check('address').notEmpty().withMessage(message.basic.key_missing),
   check('role').notEmpty().withMessage(message.basic.key_missing),

   //user name key validation
   check('name').isString().withMessage(message.company_user.name_type),
   check('name').isLength({
     min: 1,
     max: 100
   }).withMessage(message.company_user.name_length),

   //user name key validation
   check('email').isEmail().withMessage(message.basic.invalid_email),
   check('email').isLength({
     min: 8,
     max: 100
   }).withMessage(message.company.email_length_err),

   //Validation for owner mobile number
   check('mobile').isString().withMessage(message.company_user.mobile_number_type),
   check('mobile').isLength({
     min: 8,
     max: 15
   }).withMessage(message.company_user.user_mobile_length),

   //Validation for owner country
   check('country').isString().withMessage(message.company.owner_country_type),
   check('country').isLength({
     min: 3,
     max: 25
   }).withMessage(message.company.owner_country_type_length),

   //validation for comapny address key
   check('address').isString().withMessage(message.company_user.user_address_type),
   check('address').isLength({
     min: 5,
     max: 150
   }).withMessage(message.company_user.user_address_length),

   //Header authentication
   //header('Authorization').notEmpty(message.basic.header_missing),

 ];