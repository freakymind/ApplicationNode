"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, email, password, mobile, country) {
        this.userName = name;
        this.userEmail = email;
        this.userMmobile = mobile;
        this.userCountry = country;
        this.password = (password != "undefined" && password != null && password == '') ? password : this.generatePassword();
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