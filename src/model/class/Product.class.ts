/**
 * common config
 * This file is to store common imports and config data for  the application.
 * @package src/config
 * @subpackage config/common.config
 * @author keshavareddy chinthala <chintalakeshava251@gmail.com>
 */

//product class

export class Product {

 
    private product_id: String;
    private product_Name:String;
    private product_dimensions: String;
    private brand: String;
    private company_Ref: String;
    private UPCA: Number;
    private countrycode: Number;
    private Weight: DoubleRange;
    private created_on : Date;
    private updated_on : Date;
    private status:Boolean;

constructor(product_Name:String,product_dimensions: String,brand: String,company_Ref: String,UPCA: Number,countrycode: Number, Weight: DoubleRange) {
   this.product_id= this.generaterRondomProductID();
   this.product_Name=product_Name;
   this.brand=brand;
   this.product_dimensions=product_dimensions;
   this.company_Ref=company_Ref;
   this.UPCA=UPCA;
   this.countrycode=countrycode;
   this.Weight=Weight;
   this.status=true;
   this.created_on=new Date();
   this.updated_on=new Date();
   
    }

    generaterRondomProductID(){
        return 'DSC-PROD-'+Math.floor(Math.random()*10000);     
    }


}