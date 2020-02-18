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
    static adddistributor(dist_obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let distributorUserObj = {
                    user_name: dist_obj.user_namem,
                    user_id: dist_obj.user_id,
                    user_email: dist_obj.user_email,
                    user_randomPassword: dist_obj.randomPassword,
                    user_password: dist_obj.user_password,
                    user_mobile: dist_obj.user_mobile,
                    user_country: dist_obj.user_country,
                    user_role: dist_obj.user_role,
                    user_status: dist_obj.user_status,
                    user_referenceBy: dist_obj.referenceBy
                };
                let prodcut = {
                    product_id: "",
                    prodcut_name: ""
                };
                let distributor = {
                    distributor_id: dist_obj.user_id,
                    distributor_name: dist_obj.user_name,
                    products: [prodcut]
                };
                let referenceBy = dist_obj.referenceBy;
                if (referenceBy) {
                    let checkUserEmail = yield distributor_dao_1.DistributorDao.checkUser(referenceBy);
                    if (checkUserEmail) {
                        console.log(checkUserEmail);
                        if (ROLE.includes(checkUserEmail.user[0].user_role)) {
                            let userEmail = dist_obj.user_email;
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
    static updateDistributorDetails(distObject) {
        return __awaiter(this, void 0, void 0, function* () {
            let update_by = distObject.referenceBy;
            let checkUserEmail = yield distributor_dao_1.DistributorDao.checkUser(update_by);
            if (checkUserEmail) {
                let getuserDetails = yield distributor_dao_1.DistributorDao.checkUser(distObject.user_email);
                if (getuserDetails) {
                    console.log("get user details", getuserDetails);
                    let updateUserDetails = yield distributor_dao_1.DistributorDao.updateUser(distObject, getuserDetails[0].user.user_id);
                    if (updateUserDetails.modifiedCount == 1) {
                        console.log(updateUserDetails);
                        console.log("successs");
                        return yield this.responseMsg(0, "successfully updated");
                    }
                    else {
                        return yield this.responseMsg(1, "failed to update");
                    }
                }
                else {
                    return yield this.responseMsg(1, "user Not found");
                }
            }
        });
    }
    static deleteDistributordetails(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let validateUser = yield distributor_dao_1.DistributorDao.checkUser(email);
                if (validateUser) {
                    let deleteDistributor = yield distributor_dao_1.DistributorDao.deleteUser(email);
                    if (deleteDistributor.modifiedCount == 1) {
                        return yield this.responseMsg(0, "successfully deleted");
                    }
                    else {
                        return yield this.responseMsg(1, "failed to delete");
                    }
                }
                else {
                    return yield this.responseMsg(1, "user not found");
                }
            }
            catch (err) {
                return yield this.responseMsg(1, `${err}`);
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