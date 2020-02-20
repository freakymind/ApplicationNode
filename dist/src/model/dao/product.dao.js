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
const Product_class_1 = require("./../class/Product.class");
const db_config_1 = require("./../../config/db.config");
const log_config_1 = require("../../log/log.config");
class ProductDao {
    static saveproduct(products) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let db = yield db_config_1.DbConn.getUserColl();
                let saveproductdb = yield db.updateOne({ "comapny.compName": products.companyRef }, {
                    $push: {
                        "products": {
                            $each: [products]
                        }
                    }
                });
                if (saveproductdb) {
                    return saveproductdb;
                }
            }
            catch (err) {
                log_config_1.log.error("Company DAO error" + err);
            }
        });
    }
    static updateProducts(products) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let db = yield db_config_1.DbConn.getUserColl();
                let updateproduct = yield db.updateOne({ "comapny.compName": products.company_Ref }, {
                    $push: {
                        "products": {
                            $each: [products]
                        }
                    }
                });
                if (updateproduct) {
                    return updateproduct;
                }
            }
            catch (err) {
                console.log(err, "error");
            }
        });
    }
    static findProducts(productname) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(productname, "productname");
            try {
                let db = yield db_config_1.DbConn.getUserColl();
                let productdata = yield db.aggregate([
                    { "$unwind": "$products" },
                    { "$match": { "products.product_Name": productname } },
                    { "$project": { "products": 1, _id: 0 } }
                ]).toArray();
                if (productdata) {
                    console.log(productdata, "find");
                    return productdata;
                }
            }
            catch (err) {
                log_config_1.log.error("Company DAO error" + err);
            }
        });
    }
    static findCompany(companyref) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let db = yield db_config_1.DbConn.getUserColl();
                let companydata = yield db.findOne({ "comapny.compName": companyref });
                if (companydata) {
                    return companydata;
                }
            }
            catch (err) {
                log_config_1.log.error("Company DAO error" + err);
            }
        });
    }
    static updateProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let db = yield db_config_1.DbConn.getUserColl();
                let updateproduct = yield db.updateOne({ 'products.product_id': product.product_id }, {
                    $set: {
                        "products.$.product_id": product.product_id,
                        "products.$.product_Name": product.product_Name,
                        "products.$.brand": product.brand,
                        "products.$.product_dimensions": product.product_dimensions,
                        "products.$.company_Ref": product.company_Ref,
                        "products.$.UPCA": product.UPCA,
                        "products.$.countrycode": product.countrycode,
                        "products.$.Weight": product.Weight,
                        "products.$.status": product.status,
                        "products.$.created_on": product.created_on,
                        "products.$.updated_on": product.updated_on
                    }
                });
                if (updateproduct) {
                    return updateproduct;
                }
            }
            catch (error) {
                console.log(error, "error at dao");
            }
            let db = yield db_config_1.DbConn.getUserColl();
            return Product_class_1.Product;
        });
    }
    static deleteproduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let db = yield db_config_1.DbConn.getUserColl();
                let deleteproduct = yield db.updateOne({
                    'products.product_id': product.product_id
                }, {
                    $set: {
                        "products.$.status": product.status,
                    }
                });
                if (deleteproduct) {
                    return deleteproduct;
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.ProductDao = ProductDao;
//# sourceMappingURL=product.dao.js.map