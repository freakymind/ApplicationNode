import {check} from "../../util/common.config";
import {message} from "../../util/text.config";

export const ForgotPassValidation = [
    check('email').notEmpty().withMessage(message.basic.key_missing),
    //Validation for email key
    check('email').isEmail().withMessage(message.company.invalid_email_err),
    check('email').isLength({
        min: 8,
        max: 50
    }).withMessage(message.company.email_length_err),
    ]


export const ResetPassValidation = [
    check('email').notEmpty().withMessage(message.basic.key_missing),
    check('password').notEmpty().withMessage(message.basic.key_missing)
]
