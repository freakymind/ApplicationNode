import { DbConn } from '../../config/db.config';
import { log } from '../../log/log.config';


export class DistributorDao {

  static async distributorDao(distObj: any) {
    try {
      let Db = await DbConn.getUserColl();
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
      let Db = await DbConn.getUserColl();
     
      let checkUserDetails = await Db.aggregate([
        {"$unwind":"$user"},
        {"$match":{"user.user_email":email,"user.user_status":true}},
            {"$project":{"user":1,_id:0}}
      ]).toArray();
      console.log(checkUserDetails);
      return checkUserDetails;
    } catch (err) {
      return err;
    }
  }
  
  static async addProducts(distObj: any) {
    try {
      let Db = await DbConn.getUserColl();
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
  static async updateUser(distObj: any,id:number|string) {
    try {
      let Db = await DbConn.getUserColl();
      let updateDistributor = await Db.updateOne({
        "user": { $elemMatch: { user_id:id} },
        "distributor": { $elemMatch: { distributor_id:id } }
      },
        { $set: { "user.$.user_name": distObj.user_name,"user.$.user_mobile":distObj.user_mobile, "distributor.$[element].distributor_name": distObj.user_name } },
        { multi: true, arrayFilters: [{ "element.distributor_id": id }] });
        return updateDistributor;

    } catch (err) {
      return err;

    }
  }
  static async deleteUser(email:string) {
    try{
      let Db = await DbConn.getUserColl();
      let deleteDistributor = await Db.updateOne({
        "user.user_email":email
      },{$set:{"user.$.user_status":false}});
      return deleteDistributor;

    } catch(err) {
      return err;
    }
  }
}

