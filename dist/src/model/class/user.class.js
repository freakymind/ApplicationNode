"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const passwordHash = __importStar(require("password-hash"));
class User {
    constructor(name, email, password, mobile, country) {
        this.userName = name;
        this.userEmail = email;
        this.userMmobile = mobile;
        this.userCountry = country;
        this.randomString = this.generateRandomNumber();
        this.password = this.generatePassword(this.randomString);
        this.role = this.setRole();
    }
    generateRandomNumber() {
        let randomNumber = "ojas1525";
        console.log(randomNumber);
        return randomNumber;
    }
    generatePassword(randomString) {
        return passwordHash.generate(randomString);
    }
    setRole() {
        return "COMPANY_ADMIN";
    }
}
exports.User = User;
//# sourceMappingURL=user.class.js.map