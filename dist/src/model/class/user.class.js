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
var User = /** @class */ (function () {
    function User(name, email, mobile, country) {
        this.userName = name;
        this.userEmail = email;
        this.userMmobile = mobile;
        this.userCountry = country;
        this.password = this.generatePassword();
        this.role = this.setRole();
    }
    User.prototype.generatePassword = function () {
        return "xyz";
    };
    User.prototype.setRole = function () {
        return "COMPANY_ADMIN";
    };
    return User;
}());
exports.User = User;
