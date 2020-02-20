"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utill_methods_1 = require("../../util/utill.methods");
class Company {
    constructor(name, email, mobile, address) {
        this.company_id = this.generateCompId();
        this.company_name = name;
        this.company_email = email;
        this.company_mobile = mobile;
        this.company_address = address;
        this.users = [];
        this.distributors = [];
        this.created_on = new Date();
        this.updated_on = new Date();
    }
    generateCompId() {
        return 'DSC-COMP-' + utill_methods_1.Utill.getRandomString();
    }
    getCompName() {
        return this.company_name;
    }
    getCompEmail() {
        return this.company_email;
    }
    getCompAddress() {
        return this.company_address;
    }
    getCompMobile() {
        return this.company_mobile;
    }
}
exports.Company = Company;
//# sourceMappingURL=comapny.class.js.map