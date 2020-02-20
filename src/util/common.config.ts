/**
 * common config
 * This file is to store common imports and config data for  the application.
 * @package src/config
 * @subpackage config/common.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */

//import passwordHash, { generate } from 'password-hash';


export const {
  check,
  validationResult,
  body,
  header
} = require('express-validator');

export const {
  Request,
  Response
} = require('express');

export enum status {
  pending = 'PENDING',
  verified = 'VERIFIED',
  rejected = 'REJECTED'
}

export enum role {
  super_admin = 'SUPER_AMIN',
  company_admin = 'COMPANY_ADMIN',
  distributor = 'DISTRIBUTOR',
  user = 'USER'
}

export const transactionOptions = {
  readPreference: 'primary',
  readConcern: { level: 'local' },
  writeConcern: { w: 'majority' }
};



