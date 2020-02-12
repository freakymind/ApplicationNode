"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const password_hash_1 = __importDefault(require("password-hash"));
class User {
    constructor(name, email, password, mobile, country) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.country = country;
        this.password = (password != "undefined" && password != null && password == '') ? password : this.generatePassword(password_hash_1.default.generate(password));
        this.role = this.setRole();
        this.status = true;
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