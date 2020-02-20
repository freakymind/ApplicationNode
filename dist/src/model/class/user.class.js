"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_config_1 = require("../../util/common.config");
class User {
    constructor(name, email, password, mobile, country, salt, address) {
        this.user_id = this.generateUserId();
        this.user_name = name;
        this.user_email = email;
        this.user_mobile = mobile;
        this.user_country = country;
        this.user_address = address;
        this.password_salt = salt;
        this.user_password = password;
        this.user_role = this.setRole();
        this.user_status = this.setStatus();
        this.created_on = new Date();
        this.updated_on = new Date();
    }
    setStatus() {
        return common_config_1.status.pending;
    }
    getUserId() {
        return this.user_id;
    }
    getUserName() {
        return this.user_name;
    }
    getUserEmail() {
        return this.user_email;
    }
    getUserMobile() {
        return this.user_mobile;
    }
    getUserCountry() {
        return this.user_country;
    }
    getUserAddress() {
        return this.user_address;
    }
    getUserRole() {
        return this.user_role;
    }
    getUserStatus() {
        return this.user_status;
    }
    getUserCreatedOn() {
        return this.created_on;
    }
    getUserUpdatedOn() {
        return this.updated_on;
    }
}
exports.User = User;
//# sourceMappingURL=user.class.js.map