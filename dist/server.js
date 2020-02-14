"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
exports.router = express_1.default.Router();
require('dotenv').config();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
app.use('/service', require('./src/routes/API/company.api'));
app.all('*', (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: 'Requested route not found'
    });
});
const server = app.listen(process.env.SERVER_PORT, () => {
    console.log('Server is running on port ' + process.env.SERVER_PORT + '...!!!');
});
const init_config_1 = require("./src/config/init.config");
init_config_1.Init.init();
process.on('unhandledRejection', (err) => {
    console.error('There was an uncaught error', err);
    server.close(() => {
        process.exit(1);
    });
});
module.exports = app;
//# sourceMappingURL=server.js.map