
/**
 * common config
 * This file is to store common imports and config data for  the application.
 * @package src/config
 * @subpackage config/common.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { User } from "../model/class/user.class";
import { Company } from '../model/class/comapny.class';
import { CompanyDAO } from '../model/dao/company.dao';
import { log } from "../log/log.config";
import * as passwordHash from 'password-hash';
import * as jwt from 'jsonwebtoken';
import * as dotenv from "dotenv";
dotenv.config();
//Comapny cla
export class CompanyServices {
  private generateToken(id:string) {
    return jwt.sign({email:id},'BLOCKCHAIN',{
      expiresIn:'30MIN'      
    })    
  }

  //Method for registering company.
  static async registerCompany(user: User, company: Company) {
    //Collection object
    let compnayDoc: object = {
      user: [user],
      comapny: company
    }

    try {
      log.info("Company service called")
      let saveComp = await CompanyDAO.saveCompany(compnayDoc);
      return saveComp;
    }
    catch (err) {
      log.error("Error occured at company services" + err);
    }
  }

  async getDetails(userName:string,password:string):Promise<void> {
    const companyDao = new CompanyDAO();
    let usrPwd:string = password;
    let userData = {
      userEmail:userName,
      password:passwordHash.generate(password)
    }
    try {
      let getDetails:any = await companyDao.getDetails_User(userData);
      if(getDetails){
        console.log("getDetails",getDetails);
        for(let user of getDetails.user){
          console.log("user",user);
          if(passwordHash.verify(usrPwd,user.password)) {
            let token:any =this.generateToken(userData.userEmail);
            if(token) {
             user.token = token;
             delete user.password;
             return user;
            }
              
          }
        }
      }

    } catch(err) {
      log.error("Error occured at company services" + err);
    }
  }

}