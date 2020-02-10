"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bunyan = require('bunyan');
const path = require('path');
exports.log = bunyan.createLogger({
    name: 'dsc',
    streams: [
        {
            level: 'info',
            path: path.join(__dirname + '/info.log')
        }
    ]
});
//# sourceMappingURL=log.config.js.map