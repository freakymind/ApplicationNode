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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const log_config_1 = require("../../log/log.config");
class JWT {
    static generateToken(data) {
        return __awaiter(this, void 0, void 0, function* () {
            log_config_1.log.info('JWT token generation method called');
            try {
                return jsonwebtoken_1.default.sign(data, JWT.key, { expiresIn: '1h' });
            }
            catch (err) {
                log_config_1.log.error(err);
                throw new Error(err);
            }
        });
    }
    static verifyToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            log_config_1.log.info('JWT token verification method called');
            try {
                let decode = jsonwebtoken_1.default.verify(token, JWT.key);
                return decode;
            }
            catch (err) {
                log_config_1.log.error(err);
                throw new Error(err);
            }
        });
    }
}
exports.JWT = JWT;
JWT.key = process.env.JWT_SECRETKEY;
//# sourceMappingURL=jwt.class.js.map