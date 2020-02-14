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
const response_config_1 = require("../util/response.config");
const distributor_class_1 = require("../model/class/distributor.class");
const distributor_services_1 = require("../services/distributor.services");
class DistributorClass {
    static addDistributor(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let referenceBy = req.body.reference_by;
                let name = req.body.name;
                let email = req.body.email;
                let mobile = req.body.mobile;
                let country = req.body.country;
                let distributor = new distributor_class_1.Distributor(name, email, mobile, country, referenceBy);
                let adddistributor = yield distributor_services_1.DistributorService.adddistributor(distributor);
                console.log(adddistributor);
                res.send(adddistributor);
            }
            catch (err) {
                res.send(new response_config_1.AppError(`${err}`, 400));
            }
        });
    }
}
exports.DistributorClass = DistributorClass;
//# sourceMappingURL=distributor.controller.js.map