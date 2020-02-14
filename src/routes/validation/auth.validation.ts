/**
 * auth validation
 * This file is to implement the validation for login request body.
 * @package src/routes
 * @subpackage routes/validation/auth.validation
 * @author Sekhara suman sahu <sekharasahu@gmail.com>,krishnakanth<krishnakanth.r@ojas-it.com>
 */

 import { check } from '../../util/common.config';
 import { message } from '../../util/text.config';

export const authValidation = [
  //Key is present or not
  check('user_id').notEmpty().withMessage(message.basic.key_missing),
  check('password').notEmpty().withMessage(message.basic.key_missing),

  check('user_id').isString().withMessage(message.login.user_id_type),
  check('password').isString().withMessage(message.login.password_type),

  check('user_id').isLength({
    min : 1,
    max : 50
  }).withMessage(message.login.user_id_length),
  check('password').isLength({
    min : 1,
    max : 50
  }).withMessage(message.login.password_length),

];