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
 * company controller
 * This file to extract request body data from request object.
 * @package src/controller
 * @subpackage controller/company.controller
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
var common_config_1 = require("../config/common.config");
var text_config_1 = require("../config/text.config");
var response_config_1 = require("../config/response.config");
var user_class_1 = require("../model/class/user.class");
var comapny_class_1 = require("../model/class/comapny.class");
var company_services_1 = require("../services/company.services");
var log_config_1 = require("../log/log.config");
var CompanyController = /** @class */ (function () {
    function CompanyController() {
    }
    CompanyController.companyValidation = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var errors, _a, _b, name, email, mobile, country, comapnyName, companyEmail, comapnyAddress, user, company, saveComp, err_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        errors = common_config_1.validationResult(req);
                        if (!!errors.isEmpty()) return [3 /*break*/, 2];
                        _b = (_a = res.status(422)).send;
                        return [4 /*yield*/, response_config_1.ResponseHandler.error(errors.array(), text_config_1.message.basic.req_body_validation_err)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                    case 2:
                        name = req.body.name;
                        email = req.body.email;
                        mobile = req.body.name;
                        country = req.body.name;
                        comapnyName = String = req.body.company_name;
                        companyEmail = String = req.body.comapany_email;
                        comapnyAddress = String = req.body.comapny_address;
                        user = new user_class_1.User(name, email, mobile, country);
                        company = new comapny_class_1.Company(comapnyName, companyEmail, comapnyAddress);
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, company_services_1.CompanyServices.registerCompany(user, company)];
                    case 4:
                        saveComp = _c.sent();
                        log_config_1.log.info("Comapny Controller called");
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _c.sent();
                        log_config_1.log.error("Error at company controller");
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return CompanyController;
}());
exports.CompanyController = CompanyController;
