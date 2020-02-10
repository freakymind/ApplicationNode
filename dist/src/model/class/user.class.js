"use strict";
/**
 * common config
 * This file is to store common imports and config data for  the application.
 * @package src/config
 * @subpackage config/common.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
//User class
class User {
    constructor(name, email, mobile, country) {
        this.userName = name;
        this.userEmail = email;
        this.userMmobile = mobile;
        this.userCountry = country;
        this.password = this.generatePassword();
        this.role = this.setRole();
    }
    generatePassword() {
        return "xyz";
    }
    setRole() {
        return "COMPANY_ADMIN";
    }
}
exports.User = User;
//# sourceMappingURL=user.class.js.map