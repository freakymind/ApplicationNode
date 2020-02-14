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
import {DistributorClass} from '../../controller/distributor.controller';

router.post('/distributor/addDistributor',CompRegValidation,DistributorClass.addDistributor);

module.exports = router;