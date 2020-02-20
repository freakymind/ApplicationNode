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
class UserDAO {
    static saveUser(user, session) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let coll = yield db_config_1.DbConn.getUserColl();
                let saveUserRes = yield coll.insertOne(user, { session });
                log_config_1.log.info(saveUserRes);
                return saveUserRes.ops[0];
            }
            catch (err) {
                log_config_1.log.error(err);
            }
        });
    }
}
exports.UserDAO = UserDAO;
//# sourceMappingURL=user.dao.js.map