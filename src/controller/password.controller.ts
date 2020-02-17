// @ts-ignore
import {Request, Response} from "@types/express";
import {validationResult} from "../util/common.config";
import {ResponseHandler} from "../util/response.config";
import {message} from "../util/text.config";
import {log} from "../log/log.config";
import {PasswordService} from "../services/password.service";

export class PasswordController {




    static async forgotPasswordValidation(req: Request, res: Response) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).send(await ResponseHandler.error(errors.array(), message.basic.req_body_validation_err));
        }

    let email:String = req.body.email;
        try {
            let forgotPass = await PasswordService.forgotPassword(email);
            return res.status(201).send(forgotPass);

        }
        catch(err) {
            log.error("Error at password controller");
            return res.status(500).send(ResponseHandler.error(err , message.password.resetErr));
        }
    }


    static async resetPasswordValidation(req: Request, res: Response) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).send(await ResponseHandler.error(errors.array(), message.basic.req_body_validation_err));
        }
let data={
    email: req.body.email,
    password:req.body.password
}

        try {
            let resetPass = await PasswordService.resetPassword(data);
            return res.status(201).send(resetPass);

        }
        catch(err) {
            log.error("Error at password controller");
            return res.status(500).send(ResponseHandler.error(err , message.password.resetErr));
        }
    }

}
