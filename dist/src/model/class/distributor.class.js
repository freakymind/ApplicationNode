"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const password_hash_1 = __importDefault(require("password-hash"));
class Distributor {
    constructor(name, email, mobile, country, referenceBy, productId, productName) {
        this.user_name = name;
        this.user_id = "DSC-" + "DIST-" + Math.floor(Math.random() * 10000);
        this.user_email = email;
        this.randomPassword = this.randomNumber();
        this.user_password = this.getPassword();
        this.user_mobile = mobile;
        this.user_country = country;
        this.user_role = "DISTRIBUTOR";
        this.user_status = false;
        this.referenceBy = referenceBy;
        this.product_id = productId;
        this.product_name = productName;
    }
    randomNumber() {
        return "Ojas1525";
    }
    getPassword() {
        return password_hash_1.default.generate(this.randomPassword);
    }
}
exports.Distributor = Distributor;
//# sourceMappingURL=distributor.class.js.map