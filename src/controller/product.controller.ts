


import { ResponseHandler } from './../util/response.config';
import { Product } from './../model/class/Product.class';
import { ProductService } from './../services/product.service';
import { Request, Response } from 'express';
import { log } from '../log/log.config';
import { validationResult } from '.././util/common.config'
import { message } from './../util/text.config';

export class ProductController {

    static async productCreation(req: Request, res: Response) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).send(await ResponseHandler.error(errors.array(), message.basic.req_body_validation_err));

        }

        let product_Name: String = req.body.product_Name;
        let brand: String = req.body.brand;
        let product_dimensions: String = req.body.product_dimensions;
        let company_Ref: String = req.body.company_Ref;
        let UPCA: Number = req.body.UPCA;
        let countrycode: Number = req.body.countrycode;
        let Weight: DoubleRange = req.body.Weight;
        let product = new Product(product_Name, product_dimensions, brand, company_Ref, UPCA, countrycode, Weight);
        try {
            log.info("product Controller called");
            console.log("service")
            console.log(product, "controller")
            let savePRod = await ProductService.saveProduct(product);
            if (savePRod) {
                return res.status(201).send(savePRod);
            }


        }
        catch (err) {
            log.error("Error at company controller");
            return res.status(500).send(ResponseHandler.error(err, message.product.err));
        }

    }

    static async productUpdation(req: Request, res: Response) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).send(await ResponseHandler.error(errors.array(), message.basic.req_body_validation_err));

        }
        // console.log("req.body", req.body)
        let product_id: String = req.body.product_id;
        let product_Name: String = req.body.product_Name;
        let brand: String = req.body.brand;
        let product_dimensions: String = req.body.product_dimensions;
        let company_Ref: String = req.body.company_Ref;
        let UPCA: Number = req.body.UPCA;
        let countrycode: Number = req.body.countrycode;
        let Weight: DoubleRange = req.body.Weight;
        let status: Boolean = req.body.status;
        let created_on: Date = req.body.created_on;

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

        }


        try {
            // console.log(product.product_Name, "productName")
            let updateproduct = await ProductService.updateProduct(product);
            if (updateproduct) {
              return updateproduct;
            }
        }
        catch (err) {

        }

    }


}


