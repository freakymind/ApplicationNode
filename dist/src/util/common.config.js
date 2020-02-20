"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
_a = require('express-validator'), exports.check = _a.check, exports.validationResult = _a.validationResult, exports.body = _a.body, exports.header = _a.header;
_b = require('express'), exports.Request = _b.Request, exports.Response = _b.Response;
var status;
(function (status) {
    status["pending"] = "PENDING";
    status["verified"] = "VERIFIED";
    status["rejected"] = "REJECTED";
})(status = exports.status || (exports.status = {}));
var role;
(function (role) {
    role["super_admin"] = "SUPER_AMIN";
    role["company_admin"] = "COMPANY_ADMIN";
    role["distributor"] = "DISTRIBUTOR";
    role["user"] = "USER";
})(role = exports.role || (exports.role = {}));
exports.transactionOptions = {
    readPreference: 'primary',
    readConcern: { level: 'local' },
    writeConcern: { w: 'majority' }
};
//# sourceMappingURL=common.config.js.map