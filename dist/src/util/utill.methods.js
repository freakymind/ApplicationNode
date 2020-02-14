"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class Utill {
    static generateSalt() {
        return __awaiter(this, void 0, void 0, function* () {
            let salt = crypto_1.default.randomBytes(256).toString('hex');
            return salt;
        });
    }
    static generatePassword(password, salt) {
        return __awaiter(this, void 0, void 0, function* () {
            let hashedPw = crypto_1.default.pbkdf2Sync(password, salt, 99999, 512, 'sha512');
            return hashedPw.toString('hex');
        });
    }
}
exports.Utill = Utill;
//# sourceMappingURL=utill.methods.js.map