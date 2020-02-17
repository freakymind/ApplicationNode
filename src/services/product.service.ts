
import { ResponseHandler } from './../util/response.config';

import { ProductDao } from './../model/dao/product.dao';
import { log } from "../log/log.config";


export class ProductService {

  static async saveProduct(product: any) {

    try {
      log.info("enters into the productservice");

      console.log("dao")
      let productarray: any = {
        products: [product]
      }
    
      let getcompany = await ProductDao.findCompany(productarray.products[0].company_Ref);

      if (getcompany) {
        let productexits=await ProductDao.findProducts(productarray.products[0].product_Name);
         if(productexits){
         let response=ResponseHandler.error({},"ProDuct Name Aleready Exists")
         return response;
         }
         else{
          let saveProduct = await ProductDao.updateProducts(productarray.products[0]);
          if (saveProduct) {
            // console.log(saveProduct,"product created successffully")
            let response=ResponseHandler.info({},"product created successfully")
            return response;
          }
         }
      }
      else {
      let response=ResponseHandler.error({},"Company Name Not Found");
      return response;
        
      }
    }
    catch (err) {
      throw new Error(err);

    }
  }



  static async updateProduct(products:any){
 
    let getproduct = await ProductDao.findProducts(products.product_Name);

    if(getproduct){
      console.log("find the product existance",getproduct)
      return getproduct;
    }
  


  }

}

