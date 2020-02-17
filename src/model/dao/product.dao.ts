import { Product } from './../class/Product.class';
import { DbConn } from './../../config/db.config';
import { log } from '../../log/log.config';

export class ProductDao {

  static async saveproduct(products: any) {
    try {

      let db = await DbConn.getCollObj();
      let saveproductdb = await db.updateOne({ "comapny.compName": products.companyRef }, {
        $push: {
          "products": {
            $each:
              [products]
          }
        }
      }
      );
      if (saveproductdb) {
        return saveproductdb;
      }
    }
    catch (err) {
      log.error("Company DAO error" + err);
    }

  }
  static async updateProducts(products: any) {
    try {

      let db = await DbConn.getCollObj();

      let updateproduct = await db.updateOne({ "comapny.compName": products.company_Ref }, {
        $push: {
          "products": {
            $each:
              [products]

          }
        }
      });
      if (updateproduct) {
        return updateproduct;
      }
    }
    catch (err) {
      console.log(err, "error")
    }

  }


  static async findProducts(productname: any) {
console.log(productname,"productname")
    try {
      let db = await DbConn.getCollObj();
      // let productdata = db.aggregate([{$unwind :'$products'},{$elemMatch:{
      //   "products.product_Name":productname
      // }}])

    let productdata=await db.findOne({"products.product_Name":productname},
      {"products.$":1}
    );
     
    
 if (productdata) {
        console.log(productdata,"find")
        return productdata;
      }
    }
    catch (err) {
      log.error("Company DAO error" + err);
    }
  }

  static async findCompany(companyref: any) {
    try {

      let db = await DbConn.getCollObj();
      let companydata = await db.findOne({ "comapny.compName": companyref });
      if (companydata) {
        return companydata;
      }
    }
    catch (err) {
      log.error("Company DAO error" + err);
    }

  }

  // static async findProduct(productname: any) {
  //   console.log(productname, "indao")
  //   try {
  //     console.log("enter to dao")
  //     let db = await DbConn.getCollObj();
  //     let productdata = await db.findOne({
  //       "products.product_Name": productname
  //     });

  //     if (productdata) {
  //       console.log("entersinto dbforupdate")
  //       return productdata;
  //     }



  //   }
  //   catch (err) {
  //     console.log(err)
  //   }


  // }
}

