/**
 * company request validation
 * This file is to check the validation of company API requests.
 * @package src/routes/validation
 * @subpackage validation/company.validation.js
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { check } from '../../config/db.config';

export const TestNameValidation = [
  check('name').isString().withMessage('Name has to be of String type'),
  check('name').isLength({min : 5, max : 35}).withMessage('Name has to be of length in between 5 to 35 character')
];

export const RegisterCompValidation = [
  check('name').isString().withMessage('Name has to be of String type'),
  check('name').isLength({min : 5, max : 35}).withMessage('Name has to be of length in between 5 to 35 character')
];