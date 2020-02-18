"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../../../server");
const password_validation_1 = require("../validation/password.validation");
const password_controller_1 = require("../../controller/password.controller");
server_1.router.post('/forgot_password', password_validation_1.ForgotPassValidation, password_controller_1.PasswordController.forgotPasswordValidation);
server_1.router.post('/reset_password', password_validation_1.ResetPassValidation, password_controller_1.PasswordController.resetPasswordValidation);
module.exports = server_1.router;
//# sourceMappingURL=password.api.js.map