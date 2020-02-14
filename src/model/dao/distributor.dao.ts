import { DbConn } from '../../config/db.config';
import { log } from '../../log/log.config';


export class DistributorDao {

  static async distributorDao(distObj:any) {
    try {      
       let Db = await DbConn.getCollObj();
      let addDistributor = await Db.updateOne({"user.userEmail":distObj.email}, {
        $push: {
          "user":distObj
        }
      });
      console.log("add",addDistributor);
      return addDistributor;

    } catch (err) {
      console.log(err);

    }
  }
  static async checkUser(email:string) {
    try{
      let Db = await DbConn.getCollObj();
      //let checkUserDetails = await Db.findOne({"user.userEmail":email},{$exists: true}).count();
      let checkUserDetails = await Db.findOne({"user.userEmail":{
        $exists:true,$in:email
      }});
      console.log("check",checkUserDetails);
      return checkUserDetails;

    }catch(err) {
      console.log(err);
    }
  }
}

// {
//   $each: [distObj]
// }