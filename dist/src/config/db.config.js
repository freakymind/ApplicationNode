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
const log_config_1 = require("../log/log.config");
const text_config_1 = require("../util/text.config");
const MongoClient = require('mongodb').MongoClient;
class DbConn {
    static getConnObj() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.conn == null) {
                    this.client = new MongoClient(this.url, this.options);
                    this.conn = yield this.client.connect();
                }
                return this.conn;
            }
            catch (err) {
                log_config_1.log.error(err);
                throw err;
            }
        });
    }
    static getUserColl() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.user_coll == null) {
                    this.db = yield this.getDbObj();
                    this.user_coll = yield this.db.collection(process.env.USER_COLL);
                }
                log_config_1.log.info(text_config_1.message.basic.db_succ);
                return this.user_coll;
            }
            catch (err) {
                log_config_1.log.error(text_config_1.message.basic.db_err + err);
                throw err;
            }
        });
    }
    static getCompColl() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.comp_coll == null) {
                    this.db = yield this.getDbObj();
                    this.comp_coll = yield this.db.collection(process.env.COMP_COLL);
                }
                log_config_1.log.info(text_config_1.message.basic.db_succ);
                return this.comp_coll;
            }
            catch (err) {
                log_config_1.log.error(text_config_1.message.basic.db_err + err);
                throw err;
            }
        });
    }
    static getDbObj() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.db == null) {
                    this.client = new MongoClient(this.url, this.options);
                    this.conn = yield this.client.connect();
                    this.db = yield this.conn.db(process.env.DBNAME);
                }
                return this.db;
            }
            catch (err) {
                log_config_1.log.error(text_config_1.message.basic.db_err + err);
                throw err;
            }
        });
    }
}
exports.DbConn = DbConn;
DbConn.client = null;
DbConn.conn = null;
DbConn.db = null;
DbConn.user_coll = null;
DbConn.comp_coll = null;
DbConn.url = "mongodb+srv://" + process.env.ATLAS_USER_NAME + ':' + process.env.ATLAS_PW + '@cluster0-ysylc.mongodb.net/test?retryWrites=true&w=majority';
DbConn.options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
//# sourceMappingURL=db.config.js.map