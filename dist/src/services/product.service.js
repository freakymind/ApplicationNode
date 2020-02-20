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
const response_config_1 = require("./../util/response.config");
const product_dao_1 = require("./../model/dao/product.dao");
const log_config_1 = require("../log/log.config");
class ProductService {
    static saveProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                log_config_1.log.info("enters into the productservice");
                console.log("dao");
                let productarray = {
                    products: [product]
                };
                let getcompany = yield product_dao_1.ProductDao.findCompany(productarray.products[0].company_Ref);
                if (getcompany) {
                    let productexits = yield product_dao_1.ProductDao.findProducts(productarray.products[0].product_Name);
                    if (productexits) {
                        let response = response_config_1.ResponseHandler.error({}, "ProDuct Name Aleready Exists");
                        return response;
                    }
                    else {
                        let saveProduct = yield product_dao_1.ProductDao.updateProducts(productarray.products[0]);
                        if (saveProduct) {
                            let response = response_config_1.ResponseHandler.info({}, "product created successfully");
                            return response;
                        }
                    }
                }
                else {
                    let response = response_config_1.ResponseHandler.error({}, "Company Name Not Found");
                    return response;
                }
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    static updateProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            let getproduct = yield product_dao_1.ProductDao.findProducts(product.product_Name);
            if (getproduct) {
                let productupdate = yield product_dao_1.ProductDao.updateProduct(product);
                if (productupdate) {
                    let response = response_config_1.ResponseHandler.info({}, "product updated successfully");
                    return response;
                }
            }
            else {
                let response = response_config_1.ResponseHandler.error({}, "product not found");
                return response;
            }
        });
    }
    static deleteProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            let getproduct = yield product_dao_1.ProductDao.findProducts(product.product_Name);
            if (getproduct) {
                let deleteProduct = yield product_dao_1.ProductDao.deleteproduct(product);
                if (deleteProduct) {
                    let response = response_config_1.ResponseHandler.info({}, "Product Deleted Successfully");
                    return response;
                }
            }
            else {
                let response = response_config_1.ResponseHandler.error({}, "product not found");
                return response;
            }
        });
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map