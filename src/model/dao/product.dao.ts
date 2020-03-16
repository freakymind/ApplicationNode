import { Product } from './../class/Product.class';
import { DbConn } from './../../config/db.config';
import { log } from '../../log/log.config';

export class ProductDao {

  static async saveproduct(products: any) {
    try {

      let db = await DbConn.getCompColl();
      let saveproductdb = await db.updateOne({ "company_name": products.companyRef }, {
        $push: {
          "products": {
            $each:
              [products]
          }
        }
      }
      );
      if (saveproductdb) {
        // console.log(saveproductdb, "savedresult")
        return saveproductdb;
      }
    }
    catch (err) {
      log.error("Company DAO error" + err);
    }

  }
  static async updateProducts(products: any) {
    try {

      let db = await DbConn.getCompColl();

      let updateproduct = await db.updateOne({ "company_name": products.company_Ref }, {
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
    // console.log(productname, "productname")
    try {
      let db = await DbConn.getCompColl();
      // console.log("entry to query");
      let productdata =
        await db.aggregate([
          { "$unwind": "$products" },
          { "$match": { "products.product_Name": productname } },
          { "$project": { "products": 1, _id: 0 } }
        ]).toArray();


  //  console.log(productdata,"queryresult")
      if (productdata.length > 0) {
        return productdata;
      }
    }
    catch (err) {
      log.error("Company DAO error" + err);
    }
  }

  static async findCompany(companyref: any) {
    try {
      // console.log("enters into dao")
      let db = await DbConn.getCompColl();
      let companydata = await db.findOne({ "company_name": companyref });
      if (companydata) {
        return companydata;
      }
    }
    catch (err) {
      log.error("Company DAO error" + err);
    }

  }
  static async updateProduct(product: any) {
    try {
      // console.log("enterstoupdate2")
      // console.log(product,"updateobjectin dao")
      // console.log(product.updated_on,"productupdation in dao")
      let db = await DbConn.getCompColl();
      let updateproduct = await db.updateOne({ 'products.product_id': product.product_id }, {
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
        // console.log(updateproduct, "updateddata");
        return updateproduct;
      }


    }
    catch (error) {
      console.log(error, "error at dao");

    }
    let db = await DbConn.getUserColl();
    return Product;

  }

  static async deleteproduct(product: any) {
    try {
      let db = await DbConn.getUserColl();
      let deleteproduct = await db.updateOne({
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
      console.log(err)
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

