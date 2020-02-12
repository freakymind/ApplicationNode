/**
 * company route
 * This file to define routes for company file.
 * @package src/routes
 * @subpackage routes/API/company
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */

import { Request, Response } from 'express';
import { router } from '../../../server';
import { CompRegValidation } from '../validation/company.validation';
import { CompanyController } from '../../controller/company.controller';

//Default route for checking server status
router.get('/test', (req  : Request, res : Response)=>{
  res.status(200).send({msg : 'Server running...!!!', status : 0});
});

//Router for Compeny registrtion
router.post('/registerCompany', CompRegValidation, CompanyController.companyValidation);
router.post('/login',CompRegValidation, new CompanyController().login)

module.exports = router;