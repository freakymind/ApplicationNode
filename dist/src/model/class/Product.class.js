"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(product_Name, product_dimensions, brand, company_Ref, UPCA, countrycode, Weight) {
        this.product_id = this.generaterRondomProductID();
        this.product_Name = product_Name;
        this.brand = brand;
        this.product_dimensions = product_dimensions;
        this.company_Ref = company_Ref;
        this.UPCA = UPCA;
        this.countrycode = countrycode;
        this.Weight = Weight;
        this.status = true;
        this.created_on = new Date();
        this.updated_on = new Date();
    }
    generaterRondomProductID() {
        return 'DSC-PROD-' + Math.floor(Math.random() * 10000);
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.class.js.map