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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * db config
 * db file is to store all the database configurations required for the application. it get the value from
 * the .env file present at src/.env
 * @package src/config
 * @subpackage config/db.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
var log_config_1 = require("../log/log.config");
var text_config_1 = require("../config/text.config");
//Mongodb configuration class
var MongoClient = require('mongodb').MongoClient;
var DbConn = /** @class */ (function () {
    function DbConn() {
    }
    DbConn.getCollObj = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, err_1;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 6, , 7]);
                        if (!(this.coll == null)) return [3 /*break*/, 5];
                        _a = this;
                        return [4 /*yield*/, new MongoClient(this.url, this.options)];
                    case 1:
                        _a.client = _e.sent();
                        _b = this;
                        return [4 /*yield*/, this.client.connect()];
                    case 2:
                        _b.conn = _e.sent();
                        _c = this;
                        return [4 /*yield*/, this.conn.db(process.env.DBNAME)];
                    case 3:
                        _c.db = _e.sent();
                        _d = this;
                        return [4 /*yield*/, this.db.collection(process.env.COLLNAME)];
                    case 4:
                        _d.coll = _e.sent();
                        _e.label = 5;
                    case 5:
                        log_config_1.log.info(text_config_1.message.basic.db_succ);
                        return [2 /*return*/, this.coll];
                    case 6:
                        err_1 = _e.sent();
                        log_config_1.log.error(text_config_1.message.basic.db_err + err_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    DbConn.client = null;
    DbConn.conn = null;
    DbConn.db = null;
    DbConn.coll = null;
    DbConn.url = 'mongodb://' + process.env.DBHOST + ':' + process.env.DBPORT;
    DbConn.options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    return DbConn;
}());
exports.DbConn = DbConn;
