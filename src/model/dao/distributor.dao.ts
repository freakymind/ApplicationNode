import { DbConn } from '../../config/db.config';
import { log } from '../../log/log.config';


export class DistributorDao {

  static async distributorDao(distObj: any) {
    try {
      let Db = await DbConn.getCollObj();
      let addDistributor = await Db.updateOne({ "user.user_email": distObj.user_referenceBy }, {
        $push: {
          "user": {
            $each: [distObj]
          }
        }
      });
      return addDistributor;
    } catch (err) {
      return err;

    }
  }
  static async checkUser(email: string) {
    try {
      let Db = await DbConn.getCollObj();
      let checkUserDetails = await Db.findOne({
        "user.user_email": email
      });

      return checkUserDetails;
    } catch (err) {
      return err;
    }
  }

  static async addProducts(distObj: any) {
    try {
      let Db = await DbConn.getCollObj();
      let addDistributor = await Db.updateOne({ "user.user_id": distObj.distributor_id }, {
        $push: {
          "distributor": distObj
        }
      });
      return addDistributor;
    } catch (err) {
      return err;
    }
  }
}

