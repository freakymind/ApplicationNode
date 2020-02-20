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
const db_config_1 = require("../config/db.config");
class Init {
    static init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.conn = yield db_config_1.DbConn.getConnObj();
            this.db = yield this.conn.db(process.env.DBNAME);
            this.db.createCollection(this.user_coll);
            this.db.createCollection(this.comp_coll);
        });
    }
    static deleteDoc() {
        return __awaiter(this, void 0, void 0, function* () {
            this.user = yield db_config_1.DbConn.getUserColl();
            this.user.drop();
            this.comp = yield db_config_1.DbConn.getCompColl();
            this.comp.drop();
        });
    }
    static demo() {
        return __awaiter(this, void 0, void 0, function* () {
            let userColl = yield db_config_1.DbConn.getUserColl();
            yield userColl.insertOne({ demo: "Demo" });
            let compColl = yield db_config_1.DbConn.getCompColl();
            yield compColl.insertOne({ demo: "Demo" });
        });
    }
}
exports.Init = Init;
Init.conn = null;
Init.db = null;
Init.user_coll = process.env.USER_COLL;
Init.comp_coll = process.env.COMP_COLL;
Init.user = null;
Init.comp = null;
Init.schema = {
    validator: {
        $jsonSchema: {
            required: ["user", "company"],
            properties: {
                user: {
                    bsonType: "array"
                },
                company: {
                    bsonType: "object",
                    required: ["company_name", "company_email", "company_mobile", "company_address"],
                    properties: {
                        "company_name": { bsonType: "string", description: "company_name has to be string" },
                        "company_email": { bsonType: "string", description: "company_email has to be string" },
                        "company_mobile": { bsonType: "string", description: "company_mobile has to be string" },
                        "company_address": { bsonType: "string", description: "company_address has to be string" }
                    }
                }
            }
        }
    }
};
//# sourceMappingURL=init.config.js.map