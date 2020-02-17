import {router} from "../../../server";
import {ForgotPassValidation,ResetPassValidation} from "../validation/password.validation";
import {PasswordController} from "../../controller/password.controller";

router.post('/forgot_password', ForgotPassValidation, PasswordController.forgotPasswordValidation);
router.post('/reset_password', ResetPassValidation, PasswordController.resetPasswordValidation);

module.exports = router;
