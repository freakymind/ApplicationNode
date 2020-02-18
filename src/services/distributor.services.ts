import { DistributorDao } from '../model/dao/distributor.dao';
import { response } from 'express';
import e = require('express');
/**
 * common config
 * This file will add the distributors,and update the distributors list,delete distributors
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

  /**
* @desc this method for adding the distributors.
* @method addDistributors 
* @param {Object} dist_Obj - It has the data of distributors* 
* @return return response
**/

  static async adddistributor(dist_obj: any) {
    try {
      let distributorUserObj: object = {
        user_name: dist_obj.user_namem,
        user_id: dist_obj.user_id,
        user_email: dist_obj.user_email,
        user_randomPassword: dist_obj.randomPassword,
        user_password: dist_obj.user_password,
        user_mobile: dist_obj.user_mobile,
        user_country: dist_obj.user_country,
        user_role: dist_obj.user_role,
        user_status: dist_obj.user_status,
        user_referenceBy: dist_obj.referenceBy
      }
      let prodcut: object = {
        product_id: "",
        prodcut_name: ""
      }
      let distributor: object = {
        distributor_id: dist_obj.user_id,
        distributor_name: dist_obj.user_name,
        products: [prodcut]
      }

      let referenceBy: string = dist_obj.referenceBy;
      if (referenceBy) {
        // checking the created user exit or not
        let checkUserEmail = await DistributorDao.checkUser(referenceBy);

        if (checkUserEmail) {
          console.log(checkUserEmail);
          //check the roles of the person
          if (ROLE.includes(checkUserEmail.user[0].user_role)) {
            let userEmail: string = dist_obj.user_email;
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


  /**
 * @desc this method for update the distributor details.
 * @method  updateDistributorDetails
 * @param {Object} distObject - It has the data of distributors* 
 * @return return message and status code
 **/

  static async updateDistributorDetails(distObject: any) {
    let update_by = distObject.referenceBy;
    let checkUserEmail = await DistributorDao.checkUser(update_by);
    if (checkUserEmail) {
      let getuserDetails = await DistributorDao.checkUser(distObject.user_email)
      if (getuserDetails) {
        console.log("get user details", getuserDetails);
        let updateUserDetails: any = await DistributorDao.updateUser(distObject,getuserDetails[0].user.user_id);
        if (updateUserDetails.modifiedCount == 1) {
          console.log(updateUserDetails);
          console.log("successs");
          return await this.responseMsg(0, "successfully updated");
        } else {
          return await this.responseMsg(1, "failed to update");
        }
      } else {
        return await this.responseMsg(1, "user Not found");
      }
    }
  }


   /**
 * @desc this method for delete the distributor .
 * @method deleteDistributorDetails
 * @param email:string -email of the distributor 
 * @return return message and status code
 **/
  
  static async deleteDistributordetails(email:string) {
    try{
      let validateUser  = await DistributorDao.checkUser(email);
      if(validateUser) {
        let deleteDistributor = await DistributorDao.deleteUser(email);
        if(deleteDistributor.modifiedCount == 1) {
          return await this.responseMsg(0,"successfully deleted");
        } else {
         return await this.responseMsg(1, "failed to delete");
        }
      } else {
        return await this.responseMsg(1,"user not found");
      }
     
    }catch(err) {
      return await this.responseMsg(1,`${err}`);
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
