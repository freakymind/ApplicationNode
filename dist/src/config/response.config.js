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
/**
 * Response config
 * This file is used for response standardization.
 * @package src/config
 * @subpackage config/response.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
//Response handler class
class ResponseHandler {
    //For any success case returns success object
    static info(obj, msg) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                status: 0,
                msg: msg,
                data: obj
            };
        });
    }
    //For any error case returns error object
    static error(obj, errmsg) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                status: 1,
                msg: errmsg,
                data: obj
            };
        });
    }
}
exports.ResponseHandler = ResponseHandler;
//# sourceMappingURL=response.config.js.map