"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const password_hash_1 = __importDefault(require("password-hash"));
class Distributor {
    constructor(name, email, mobile, country) {
        this.name = name;
        this.email = email;
        this.randomPassword = this.randomNumber();
        this.password = this.getPassword();
        this.mobile = mobile;
        this.country = country;
        this.role = "DISTRIBUTOR";
        this.status = false;
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