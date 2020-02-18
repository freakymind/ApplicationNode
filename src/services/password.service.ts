import {User} from "../model/class/user.class";
import {Company} from "../model/class/comapny.class";
import {log} from "../log/log.config";
import {CompanyDAO} from "../model/dao/company.dao";
import {ResponseHandler} from "../util/response.config";
import {MailConfiguration} from "../util/mailConfiguration";
import crypto from "crypto";
import { Utill } from '../util/utill.methods';


function encrypt(email: any) {
    var cipher = crypto.createCipher('aes-256-cbc', 'd6F3Efeq')
    var crypted = cipher.update(email, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

function decrypt(email: any) {
    var decipher = crypto.createDecipher('aes-256-cbc', 'd6F3Efeq')
    var dec = decipher.update(email, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}

export class PasswordService {


    static async forgotPassword(email:String) {


        try {
           let encrypted:any = await encrypt(email);
            let url = 'http://' + process.env.UI_HOST + ':' + process.env.UI_PORT + '/resetPassword/' + encrypted;

            let userEmail = await CompanyDAO.findUserByEmail(email);
            if(userEmail){
                let mailResponse = MailConfiguration.mailtrigger(email,"Reset Password",`Please Click below link to reset your Password ${url}`);
                if(mailResponse){
                    let response = ResponseHandler.info({},'Mail Successfully sent to reset Password.');
                    return response;
                }else{
                    let response = ResponseHandler.error({},'Mail Trigger Error.');
                    return response;
                }
            }
            else{
                let response = ResponseHandler.error({},'NO USER FOUND PLEASE REGISTER.');
                return response;
            }
        }
        catch(err){
            let response = ResponseHandler.error({},err);
            return response;
            log.error("Error occured at forgot Password Services" + err);
        }

    }

    static async resetPassword(data:any){
        try {
            let decryptedMail = await decrypt(data.email);
            let userEmail = await CompanyDAO.findUserByEmail(decryptedMail);
            if(userEmail){
                let salt : string = await Utill.generateSalt();
                let hashPw : string = await Utill.generatePassword(data.password, salt);


                let updatePass = await CompanyDAO.updatePassword(decryptedMail,hashPw,salt);
                if(updatePass){
                    let response = ResponseHandler.info({},'Password Updated Successfully');
                    return response;
                }else{
                    let response = ResponseHandler.error({},'Error while updating Password');
                    return response;
                }
            }
            else{
                let response = ResponseHandler.error({},'No User Found');
                return response;
            }
        }
        catch(err){
            let response = ResponseHandler.error({},err);
            return response;
        }


    }
}
