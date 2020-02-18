"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../../../server");
const company_validation_1 = require("../validation/company.validation");
const distributor_controller_1 = require("../../controller/distributor.controller");
server_1.router.post('/distributor/addDistributor', company_validation_1.CompRegValidation, distributor_controller_1.DistributorClass.addDistributor);
server_1.router.put('/distributor/addDistributor', company_validation_1.CompRegValidation, distributor_controller_1.DistributorClass.updateDistributor);
server_1.router.delete('/distributor/deleteDistributor/:email', company_validation_1.CompRegValidation, distributor_controller_1.DistributorClass.deleteDistributor);
module.exports = server_1.router;
//# sourceMappingURL=distributor.api.js.map