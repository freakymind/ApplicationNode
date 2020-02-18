/**
 * company route
 * This file to define routes for company file.
 * @package src/routes
 * @subpackage routes/API/company
 * @author krishna kanth <krishnakanth.r@ojas-it.com>
 */

import { Request, Response } from 'express';
import { router } from '../../../server';
import { CompRegValidation } from '../validation/company.validation';
import {DistributorClass} from '../../controller/distributor.controller';

router.post('/distributor/addDistributor',CompRegValidation,DistributorClass.addDistributor);
router.put('/distributor/addDistributor',CompRegValidation,DistributorClass.updateDistributor);
router.delete('/distributor/deleteDistributor/:email',CompRegValidation,DistributorClass.deleteDistributor);

module.exports = router;