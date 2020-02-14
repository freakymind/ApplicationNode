/**
 * common config
 * This file is to store common imports and config data for  the application.
 * @package src/config
 * @subpackage config/common.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */

//import passwordHash, { generate } from 'password-hash';


export const {
    check,
    validationResult,
    body
  } = require('express-validator');
  
export const {
  Request,
  Response 
}  = require('express');
  
