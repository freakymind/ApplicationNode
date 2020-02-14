import { DistributorDao } from '../model/dao/distributor.dao';
/**
 * common config
 * This file is 
 * @package src/config
 * @subpackage config/common.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>,krishnakanth<krishnakanth.r@ojas-it.com>
 */
interface data {
  status: number;
  message: string;
}

export class DistributorService {
  static async adddistributor(distObj: any) {
    try {
      let userEmail: string = distObj.email;
      let checkUser = await DistributorDao.checkUser(userEmail);
      console.log("kkkkkkkkkkk123",checkUser);
      if (checkUser.length) {
        let data: data = {
          status: 0,
          message: "user already registered"
        }
        return data;
      } else {
        let addDistributor = await DistributorDao.distributorDao(distObj);
        console.log("adddistributor", addDistributor.modifiedCount);
        if (addDistributor.modifiedCount == 1) {
          let data: data = {
            status: 1,
            message: "successfully registered"
          }
          return data;
        }
      }

    } catch (err) {
      console.log(err);
    }
  }
}