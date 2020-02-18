// @ts-ignore
import * as nodemailer from 'nodemailer';

export class MailConfiguration{

    static async mailtrigger(mail:any,subject:any,text:any){
        var transport = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: "shwnthu@gmail.com",
                pass: "yashu127001"
            }
        });
        var mailOptions = {
            from: "shwnthu@gmail.com",
            to:mail.toString(),
            subject: subject,
            text: text,
        }
        console.log(mailOptions,"maildata")
        transport.sendMail(mailOptions, function(error: any, response: any){
            if(error){

                console.log('Error');
            }else{
                console.log('mail sent');
                return response;

            }
        });

    }
}