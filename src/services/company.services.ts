
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
import * as passwordHash from 'password-hash';
import * as jwt from 'jsonwebtoken';
import { NextFunction } from "express";




//Comapny cla
export class CompanyServices {
  private static secretKey:any = process.env.SECRETKEY;

  private static generateToken(id:string):any {
    return jwt.sign({email:id},this.secretKey,{
      expiresIn:60 * 60   
    })    
  }

  //Method for registering company.
  static async registerCompany(user: User, company: Company) {
    //Collection object
    let compnayDoc: object = {
      user: [user],
      comapny: company,
      distributor: [{
        distributor_id: "",
        distributor_name: "",
        products: [{
          product_id: "",
          product_name: ""
        }]
      }],
      products: [{
        product_id: "",
        product_name: "",
        mfg: "",
        batch: ""
      }]
    }

    try {
      log.info("Company service called")
      let saveComp = await CompanyDAO.saveCompany(compnayDoc);
      delete saveComp.ops[0].user[0].randomString;
      delete saveComp.ops[0].user[0].password;
      return saveComp;
    }
    catch (err) {
      log.error("Error occured at company services" + err);
      throw new Error(err);
    }
  }

  static async getDetails(userName:string,password:string,next:NextFunction):Promise<void> {   
    let usrPwd:string = password;
    let userData = {
      userEmail: userName,
      password: passwordHash.generate(password)
    }
    try {
      let getDetails:any = await CompanyDAO.getDetails_User(userData);
      if(getDetails){       
        for(let user of getDetails.user){        
          if(passwordHash.verify(usrPwd,user.password)) {
            let token:any =this.generateToken(userData.userEmail);
            if(token) {
             user.token = token; 
             user.status = 0;           
             delete user.password;
             return user;
            }              
          } else {
            let user: any = {};
            user["status"] = 1;
            user["message"] = 'invalid password';
            return user;
          }
        }
      } else {
        let user: any = {};
        user["status"] = 1;
        user["message"] = 'invalid userName';
        return user;
      }
    } catch (err) {
      log.error("Error occured at company services" + err);
      next(err);
    }
  } 
  
}