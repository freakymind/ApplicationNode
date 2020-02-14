"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const password_hash_1 = __importDefault(require("password-hash"));
class User {
    constructor(name, email, password, mobile, country, address) {
        this.user_name = name;
        this.user_email = email;
        this.user_mobile = mobile;
        this.user_country = country;
        this.user_password = (password != "undefined" && password != null && password == '') ? password : this.generatePassword(password_hash_1.default.generate(password));
        this.user_role = this.setRole();
        this.user_status = true;
        this.created_on = new Date();
        this.updated_on = new Date();
    }
    generatePassword(password) {
        return password_hash_1.default.generate(password);
    }
    setRole() {
        return "COMPANY_ADMIN";
    }
}
exports.User = User;
//# sourceMappingURL=user.class.js.map