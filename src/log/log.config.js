/**
 * log config
 * @package src/config
 * @subpackage config/log.config
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
      level: 'error',
      path: path.join(__dirname+'/error.log')  // log ERROR and above to a file
    },
    {
      level: 'warn',
      path: path.join(__dirname+'/warn.log')  // log WARN and above to a file
    }
  ]
});