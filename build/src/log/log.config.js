"use strict";
/**
 * log config
 * @package src/log
 * @subpackage config/API/log.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
//File import
var bunyan = require('bunyan');
var path = require('path');
console.log(path.join(__dirname + '/info.log'));
exports.log = bunyan.createLogger({
    name: 'dsc',
    streams: [
        {
            level: 'info',
            //stream : process.stdout,
            path: path.join(__dirname + '/info.log') // log INFO and above to stdout
        }
    ]
});
