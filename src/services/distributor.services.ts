import { DistributorDao } from '../model/dao/distributor.dao';
import { response } from 'express';
/**
 * common config
 * This file will add the distributors
 * @package services
 * @subpackage /distributor.services.ts
 * @author krishnakanth<krishnakanth.r@ojas-it.com>
 */
interface data {
  status: number;
  message: string;
}
const ROLE = ["COMPANY_ADMIN", "DISTRIBUTOR"];

export class DistributorService {
  static async adddistributor(distObj: any) {
    try {
      let distributorUserObj: object = {
        user_name: distObj.user_namem,
        user_id: distObj.user_id,
        user_email: distObj.user_email,
        user_randomPassword: distObj.randomPassword,
        user_password: distObj.user_password,
        user_mobile: distObj.user_mobile,
        user_country: distObj.user_country,
        user_role: distObj.user_role,
        user_status: distObj.user_status,
        user_referenceBy: distObj.referenceBy
      }
      let prodcut: object = {
        product_id: "",
        prodcut_name: ""
      }
      let distributor: object = {
        distributor_id: distObj.user_id,
        distributor_name: distObj.user_name,
        products: [prodcut]
      }

      let referenceBy: string = distObj.referenceBy;
      if (referenceBy) {
        // checking the created user exit or not
        let checkUserEmail = await DistributorDao.checkUser(referenceBy);

        if (checkUserEmail) {
          console.log(checkUserEmail);
          //check the roles of the person
          if (ROLE.includes(checkUserEmail.user[0].user_role)) {
            let userEmail: string = distObj.user_email;
            //check the user exit or not
            let checkUser = await DistributorDao.checkUser(userEmail);
            if (checkUser) {

              return await this.responseMsg(1, "user already registered");

            } else {
              let addDistributor = await DistributorDao.distributorDao(distributorUserObj);

              if (addDistributor.modifiedCount == 1) {
                let addProdcuts = await DistributorDao.addProducts(distributor);
                if (addProdcuts.modifiedCount == 1) {
                  return await this.responseMsg(0, "successfully registered");
                } else {
                  return await this.responseMsg(1, "failed while update the data");
                }

              } else {
                return await this.responseMsg(1, "failed while update the data");
              }
            }

          } else {
            return await this.responseMsg(1, "user Not found");
          }
        } else {
          return await this.responseMsg(1, "user not found");
        }
      }
    } catch (err) {
      return err;
    }
  }

  static async responseMsg(status: number, msg: string): Promise<object> {
    let data: data = {
      status: status,
      message: msg
    }
    return data;
  }
}