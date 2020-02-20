"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./../../../server");
const product_validation_1 = require("./../validation/product.validation");
const product_controller_1 = require("./../../controller/product.controller");
server_1.router.post('/product', product_validation_1.ProductValidation, product_controller_1.ProductController.productCreation);
server_1.router.patch('/product', product_validation_1.ProductValidation, product_controller_1.ProductController.productUpdation);
server_1.router.delete('/product', product_validation_1.ProductValidation, product_controller_1.ProductController.productDeletion);
module.exports = server_1.router;
//# sourceMappingURL=product.api.js.map