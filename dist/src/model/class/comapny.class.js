"use strict";
/**
 * common config
 * This file is to store common imports and config data for  the application.
 * @package src/config
 * @subpackage config/common.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
//Comapny class
var Company = /** @class */ (function () {
    function Company(name, email, address) {
        this.compName = name;
        this.compEmail = email;
        this.compAddress = address;
    }
    return Company;
}());
exports.Company = Company;
