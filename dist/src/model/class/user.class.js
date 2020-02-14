"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, email, password, mobile, country, salt, address) {
        this.user_id = this.generateUserId();
        this.user_name = name;
        this.user_email = email;
        this.user_mobile = mobile;
        this.user_country = country;
        this.password_salt = salt;
        this.user_password = password;
        this.user_role = this.setRole();
        this.user_status = true;
        this.created_on = new Date();
        this.updated_on = new Date();
    }
    generateUserId() {
        return 'DSC-USER-' + Math.floor(Math.random() * 10000);
    }
    setRole() {
        return "COMPANY_ADMIN";
    }
}
exports.User = User;
//# sourceMappingURL=user.class.js.map