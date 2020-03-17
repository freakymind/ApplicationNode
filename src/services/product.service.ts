
import { ResponseHandler } from './../util/response.config';

import { ProductDao } from './../model/dao/product.dao';
import { log } from "../log/log.config";


export class ProductService {

  static async saveProduct(product: any) {

    try {
      log.info("enters into the productservice");

      // console.log("dao")
      let productarray: any = {
        products: [product]
      }
      // console.log(productarray.products[0].company_Ref,"companyreference")
      let getcompany = await ProductDao.findCompany(productarray.products[0].company_Ref);

      if (getcompany) {
        let productexits = await ProductDao.findProducts(productarray.products[0].product_Name);
        if (productexits) {
          let response = ResponseHandler.error({}, "ProDuct Name Aleready Exists")
          return response;
        }
        else {
          let saveProduct = await ProductDao.updateProducts(productarray.products[0]);
          if (saveProduct) {
            // console.log(saveProduct,"product created successffully")
            let response = ResponseHandler.info({}, "product created successfully")
            return response;
          }
        }
      }
      else {
        let response = ResponseHandler.error({}, "Company Name Not Found");
        return response;

      }
    }
    catch (err) {
      throw new Error(err);

    }
  }



  static async updateProduct(product: any) {

    let getproduct = await ProductDao.findProducts(product.product_Name);

    if (getproduct) {
      //  console.log("enterstoupdate1")
      let productupdate = await ProductDao.updateProduct(product);
      if (productupdate) {
        let response = ResponseHandler.info({}, "product updated successfully");
        return response;
      }


    }
    else {
      let response = ResponseHandler.error({}, "product not found");
      return response;
    }



  }

  static async deleteProduct(product: any) {
    let getproduct = await ProductDao.findProducts(product.product_Name);
    if (getproduct) {
      let deleteProduct = await ProductDao.deleteproduct(product);
      if (deleteProduct) {
        let response = ResponseHandler.info({}, "Product Deleted Successfully");
        return response;
      }
    }
    else {
      let response = ResponseHandler.error({}, "product not found");
      return response;
    }


  }

}

