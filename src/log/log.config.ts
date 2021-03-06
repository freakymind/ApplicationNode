/**
 * log config
 * @package src/log
 * @subpackage config/API/log.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */

//File import
const bunyan = require('bunyan');
const path = require('path');

export const log = bunyan.createLogger({
  name: 'dsc',
  streams: [
    {
      level: 'info',
      //stream : process.stdout,
      path: path.join(__dirname+'/info.log')            // log INFO and above to stdout
    },
    {
      level: 'warn',
      //stream : process.stdout,
      path: path.join(__dirname+'/info.log')            // log INFO and above to stdout
    },
    {
      level: 'error',
      //stream : process.stdout,
      path: path.join(__dirname+'/info.log')            // log INFO and above to stdout
    }
  ]
});