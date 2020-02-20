"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_class_1 = require("./user.class");
const utill_methods_1 = require("../../util/utill.methods");
const common_config_1 = require("../../util/common.config");
class CompanyAdmin extends user_class_1.User {
    constructor(name, email, password, mobile, country, salt, address) {
        super(name, email, password, mobile, country, salt, address);
    }
    generateUserId() {
        return 'DSC-USER-' + utill_methods_1.Utill.getRandomString();
    }
    setRole() {
        return common_config_1.role.company_admin;
    }
}
exports.CompanyAdmin = CompanyAdmin;
//# sourceMappingURL=company_admin.class..js.map