/**
 * company DAO
 * This file is to define the model methods for company company services.
 * @package src/dao
 * @subpackage dao/company
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { DbConn } from '../config/db.config';
import { log } from '../log/log.config';
//DAO class for Company services
export class ComapnyDAO {
  /** 
   * Saves company detail in database.
     @param {object} company - Company object with Company details.
     @returns {response} Returns either a "success" or an "error" Object
  */
  static async saveCompany(company) {
    log.info('saveCompany() method called');
    try {
      let coll = await DbConn.getCompanyColl();
      return coll.insertOne(company);
    } catch (err) {
      log.error(err);
      return err;
    }

  }
}