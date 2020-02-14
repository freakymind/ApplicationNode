"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Company {
    constructor(name, email, mobile, address) {
        this.company_name = name;
        this.company_email = email;
        this.company_mobile = mobile;
        this.company_address = address;
        this.created_on = new Date();
        this.updated_on = new Date();
    }
}
exports.Company = Company;
//# sourceMappingURL=comapny.class.js.map