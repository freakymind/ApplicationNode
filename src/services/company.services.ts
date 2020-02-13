
/**
 * common config
 * This file is to store common imports and config data for  the application.
 * @package src/config
 * @subpackage config/common.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>,krishnakanth<krishnakanth.r@ojas-it.com>
 */
import { User } from "../model/class/user.class";
import { Company } from '../model/class/comapny.class';
import { CompanyDAO } from '../model/dao/company.dao';
import { log } from "../log/log.config";
import { JWT } from '../model/class/jwt.class';
import * as passwordHash from 'password-hash';
import { NextFunction } from "express";

//Comapny class
export class CompanyServices {
  private static secretKey: any = process.env.SECRETKEY;

  //Method for registering company.
  static async registerCompany(user: User, company: Company) {
    //Collection object
    //TODO : Initial schema of collection will be created at time of server starting 
    let compnayDoc: object = {
      user: [user],
      company: company,
      distributor: [{
        distributor_id: "", distributor_name: "",
        products: [{ product_id: "", product_name: "" }]
      }],
      products: [{ product_id: "", product_name: "", mfg: "", batch: "" }]
    }
    
    try {
      log.info("Company service called")
      let saveComp = await CompanyDAO.saveCompany(compnayDoc);
      return await this.getResObj(saveComp);
    }
    catch (err) {
      log.error("Error occured at company services" + err);
      throw new Error(err);
    }
  }

  private static async getResObj(saveComp: any) {
    let resObj = {
      "user_name": saveComp.user[0].user_name,
      "user_email": saveComp.user[0].user_email,
      "user_mobile": saveComp.user[0].user_mobile,
      "user_country": saveComp.user[0].user_country,
      "user_role": saveComp.user[0].user_role,
      "user_status": saveComp.user[0].user_status,
      "company_name": saveComp.company.company_name,
      "company_email": saveComp.company.company_email,
      "company_mobile": saveComp.company.company_mobile,
      "company_address": saveComp.company.company_address,
      "token": await JWT.generateToken({
        'user_email': saveComp.user[0].user_email,
        'role': saveComp.user[0].user_role
      }),
      "created_on": saveComp.company.created_on,
      "updated_on": saveComp.company.updated_on,
    }
    return [resObj];
  }

  //TODO : authentication methods
  // static async getDetails(userName:string,password:string,next:NextFunction):Promise<void> {   
  //   let usrPwd:string = password;
  //   let userData = {
  //     userEmail: userName,
  //     password: passwordHash.generate(password)
  //   }
  //   try {
  //     let getDetails:any = await CompanyDAO.getDetails_User(userData);
  //     if(getDetails){       
  //       for(let user of getDetails.user){        
  //         if(passwordHash.verify(usrPwd,user.password)) {
  //           let token:any =this.generateToken(userData.userEmail);
  //           if(token) {
  //            user.token = token; 
  //            user.status = 0;           
  //            delete user.password;
  //            return user;
  //           }              
  //         } else {
  //           let user: any = {};
  //           user["status"] = 1;
  //           user["message"] = 'invalid password';
  //           return user;
  //         }
  //       }
  //     } else {
  //       let user: any = {};
  //       user["status"] = 1;
  //       user["message"] = 'invalid userName';
  //       return user;
  //     }
  //   } catch (err) {
  //     log.error("Error occured at company services" + err);
  //     next(err);
  //   }
  // } 

  // private static generateToken(id: string): any {
  //   return jwt.sign({ email: id }, this.secretKey, {
  //     expiresIn: 60 * 60
  //   })
  // }
}