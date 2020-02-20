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
const Product_class_1 = require("./../model/class/Product.class");
const product_service_1 = require("./../services/product.service");
const log_config_1 = require("../log/log.config");
const common_config_1 = require(".././util/common.config");
const text_config_1 = require("./../util/text.config");
class ProductController {
    static productCreation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = common_config_1.validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).send(yield response_config_1.ResponseHandler.error(errors.array(), text_config_1.message.basic.req_body_validation_err));
            }
            let product_Name = req.body.product_Name;
            let brand = req.body.brand;
            let product_dimensions = req.body.product_dimensions;
            let company_Ref = req.body.company_Ref;
            let UPCA = req.body.UPCA;
            let countrycode = req.body.countrycode;
            let Weight = req.body.Weight;
            let product = new Product_class_1.Product(product_Name, product_dimensions, brand, company_Ref, UPCA, countrycode, Weight);
            try {
                log_config_1.log.info("product Controller called");
                console.log("service");
                console.log(product, "controller");
                let savePRod = yield product_service_1.ProductService.saveProduct(product);
                if (savePRod) {
                    return res.status(201).send(savePRod);
                }
            }
            catch (err) {
                log_config_1.log.error("Error at company controller");
                return res.status(500).send(response_config_1.ResponseHandler.error(err, text_config_1.message.product.err));
            }
        });
    }
    static productUpdation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = common_config_1.validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).send(yield response_config_1.ResponseHandler.error(errors.array(), text_config_1.message.basic.req_body_validation_err));
            }
            let product_id = req.body.product_id;
            let product_Name = req.body.product_Name;
            let brand = req.body.brand;
            let product_dimensions = req.body.product_dimensions;
            let company_Ref = req.body.company_Ref;
            let UPCA = req.body.UPCA;
            let countrycode = req.body.countrycode;
            let Weight = req.body.Weight;
            let status = req.body.status;
            let created_on = req.body.created_on;
            let product = {
                product_id: product_id,
                product_Name: product_Name,
                brand: brand,
                product_dimensions: product_dimensions,
                company_Ref: company_Ref,
                UPCA: UPCA,
                countrycode: countrycode,
                Weight: Weight,
                status: status,
                created_on: created_on,
                updated_on: new Date()
            };
            try {
                let updateproduct = yield product_service_1.ProductService.updateProduct(product);
                if (updateproduct) {
                    res.status(201).send(updateproduct);
                }
            }
            catch (err) {
                log_config_1.log.error("Error at company controller");
                return res.status(500).send(response_config_1.ResponseHandler.error(err, text_config_1.message.product.err));
            }
        });
    }
    static productDeletion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = common_config_1.validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).send(yield response_config_1.ResponseHandler.error(errors.array(), text_config_1.message.basic.req_body_validation_err));
            }
            try {
                log_config_1.log.info("product Controller called");
                let product_id = req.body.product_id;
                let product_Name = req.body.product_Name;
                let product = {
                    product_id: product_id,
                    product_Name: product_Name,
                    status: false
                };
                let deleteproduct = yield product_service_1.ProductService.deleteProduct(product);
                if (deleteproduct) {
                    res.status(201).send(deleteproduct);
                }
            }
            catch (err) {
                console.log("error at controller");
            }
        });
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map