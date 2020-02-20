
/**
 * Comapany DAO
 * This file is responsible for provide database access methods for company services.
 * @package src/model
 * @subpackage model/dao/company.dao
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { DbConn } from '../../config/db.config';
import { log } from '../../log/log.config';
import { Company } from '../class/comapny.class';
import { transactionOptions } from '../../util/common.config';
//Comapny DAO class

export class CompanyDAO {
  /** 
  @description Method for saving comapny object in DB.
  @param : Compnay collection document.
  @return Returns proper response for success and failure case.
  */

  static async saveCompany(company : any, session : any ) {
    try {
      let coll = await DbConn.getCompColl();
      let saveCompRes = await coll.insertOne(company, { session });
      log.info("Comapany DAO called");
      return saveCompRes.ops[0];
    }
    catch (err) {
      log.error("Company DAO error" + err);
      throw new Error(err);
    }
  }


  static async findUserByEmail(email:String) {
    try {
      let db = await DbConn.getUserColl();
      let saveCompRes = await db.findOne({"user.user_email":`${email}`});
      log.info("Comapany DAO called");
      return saveCompRes;
    }
    catch (err) {
      log.error("Company DAO error" + err);
    }
  }


  static async updatePassword(email:any,hasPwd:any,salt:any) {
    try {
      let db = await DbConn.getUserColl();
      let updatePass= db.updateOne({"user.user_email":email},{
        $set:{
          'user.$.user_password':hasPwd,
          'user.$.password_salt':salt
        }
      })
      log.info("Comapany DAO called");
      return updatePass;
    }
    catch (err) {
      return err;
      log.error("Company DAO error" + err);
    }
  }
}
