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
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = require("../../config/db.config");
const log_config_1 = require("../../log/log.config");
class AuthDAO {
    static authenticate(username) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let coll = yield db_config_1.DbConn.getCollObj();
                let cursor = yield coll.find({ "user.user_email": username })
                    .project({ _id: 0, "user.user_password": 1, "user.password_salt": 1,
                    "user.user_email": 1, "user.user_role": 1 })
                    .toArray();
                return cursor;
            }
            catch (err) {
                log_config_1.log.error(err);
                throw err;
            }
        });
    }
}
exports.AuthDAO = AuthDAO;
//# sourceMappingURL=auth.dao.js.map