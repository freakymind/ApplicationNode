import {User} from './user.class'; 
import passwordHash from 'password-hash';

export class Distributor {
  private user_name: string;
  private user_id :string;
  private user_email: string;
  private randomPassword: any;
  private user_password: any;
  private user_mobile: number;
  private user_country: number;
  private user_role: string;
  private user_status: boolean;
  private referenceBy ?:string;
  private product_id  ?:string
  private product_name ?:string

  constructor(name: string, email: string, mobile: number, country: number,referenceBy ?:string,productId ?:string,productName ?:string) {      
    this.user_name = name;
    this.user_id ="DSC-"+"DIST-"+Math.floor(Math.random()*10000);
    this.user_email = email;
    this.randomPassword = this.randomNumber();
   this.user_password = this.getPassword();
    this.user_mobile = mobile;
    this.user_country = country;
    this.user_role = "DISTRIBUTOR";
    this.user_status = false;
    this.referenceBy = referenceBy;
    this.product_id=productId;
    this.product_name=productName;
  }
  private randomNumber() {
    return "Ojas1525";
  }
  private getPassword() {
    return passwordHash.generate(this.randomPassword);
  }

}