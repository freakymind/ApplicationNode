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
class DistributorDao {
    static distributorDao(distObj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let Db = yield db_config_1.DbConn.getCollObj();
                let addDistributor = yield Db.updateOne({ "user.user_email": distObj.user_referenceBy }, {
                    $push: {
                        "user": {
                            $each: [distObj]
                        }
                    }
                });
                return addDistributor;
            }
            catch (err) {
                return err;
            }
        });
    }
    static checkUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let Db = yield db_config_1.DbConn.getCollObj();
                let checkUserDetails = yield Db.findOne({
                    "user.user_email": email
                });
                return checkUserDetails;
            }
            catch (err) {
                return err;
            }
        });
    }
    static addProducts(distObj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let Db = yield db_config_1.DbConn.getCollObj();
                let addDistributor = yield Db.updateOne({ "user.user_id": distObj.distributor_id }, {
                    $push: {
                        "distributor": distObj
                    }
                });
                return addDistributor;
            }
            catch (err) {
                return err;
            }
        });
    }
}
exports.DistributorDao = DistributorDao;
//# sourceMappingURL=distributor.dao.js.map