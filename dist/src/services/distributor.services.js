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
const distributor_dao_1 = require("../model/dao/distributor.dao");
const ROLE = ["COMPANY_ADMIN", "DISTRIBUTOR"];
class DistributorService {
    static adddistributor(distObj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let distributorUserObj = {
                    user_name: distObj.user_namem,
                    user_id: distObj.user_id,
                    user_email: distObj.user_email,
                    user_randomPassword: distObj.randomPassword,
                    user_password: distObj.user_password,
                    user_mobile: distObj.user_mobile,
                    user_country: distObj.user_country,
                    user_role: distObj.user_role,
                    user_status: distObj.user_status,
                    user_referenceBy: distObj.referenceBy
                };
                let prodcut = {
                    product_id: "",
                    prodcut_name: ""
                };
                let distributor = {
                    distributor_id: distObj.user_id,
                    distributor_name: distObj.user_name,
                    products: [prodcut]
                };
                let referenceBy = distObj.referenceBy;
                if (referenceBy) {
                    let checkUserEmail = yield distributor_dao_1.DistributorDao.checkUser(referenceBy);
                    if (checkUserEmail) {
                        console.log(checkUserEmail);
                        if (ROLE.includes(checkUserEmail.user[0].user_role)) {
                            let userEmail = distObj.user_email;
                            let checkUser = yield distributor_dao_1.DistributorDao.checkUser(userEmail);
                            if (checkUser) {
                                return yield this.responseMsg(1, "user already registered");
                            }
                            else {
                                let addDistributor = yield distributor_dao_1.DistributorDao.distributorDao(distributorUserObj);
                                if (addDistributor.modifiedCount == 1) {
                                    let addProdcuts = yield distributor_dao_1.DistributorDao.addProducts(distributor);
                                    if (addProdcuts.modifiedCount == 1) {
                                        return yield this.responseMsg(0, "successfully registered");
                                    }
                                    else {
                                        return yield this.responseMsg(1, "failed while update the data");
                                    }
                                }
                                else {
                                    return yield this.responseMsg(1, "failed while update the data");
                                }
                            }
                        }
                        else {
                            return yield this.responseMsg(1, "user Not found");
                        }
                    }
                    else {
                        return yield this.responseMsg(1, "user not found");
                    }
                }
            }
            catch (err) {
                return err;
            }
        });
    }
    static responseMsg(status, msg) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = {
                status: status,
                message: msg
            };
            return data;
        });
    }
}
exports.DistributorService = DistributorService;
//# sourceMappingURL=distributor.services.js.map