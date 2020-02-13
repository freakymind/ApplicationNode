/**
 * text config
 * This file is used for response message standardization.
 * @package src/config
 * @subpackage config/text.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */

export const message = {
  basic : {
    error : 'Something went wrong. Thsi could be due to network or server issue.',
    req_body_validation_err : 'Request body validation error. Please check the Request body.',
    key_missing : 'Key Missing',
    db_succ : 'DB Connected successfully...',
    db_err : 'Error while connecting to Db..'
  },
  login : {
    user_id_type : 'User id has to be of string type.',
    password_type : 'Password has to be od string type.',
    user_id_length : 'Length of the user_id has to be in between 1 to 50.',
    password_length : 'Length of the password has to be in between 1 to 50.',
  },
  company : {
    succ : 'Company registered successfully.',
    err : 'Error occured while registering company.',
    comp_email_exist : "Company email already exists",
    user_email_exist : "User email already exists.",
    name_type_err : 'Comapny name has to be of string type',
    invalid_email_err : 'Invalid email type',
    email_length_err : 'Email has to be with in the length between 8 to 50 characters.',
    address_type : 'Company address has to be of string type',
    address_length : 'Comapny address has to be of min 10 and max 150 character length',
    owner_name_type : 'Company owner name has to be of string type.',
    owner_name_length : 'Company owner name length has to be in between 5 to 50 character.',
    owner_mobile_type : 'Company owner mobile has to be of string type with country code at the begining.',
    owner_mobile_length : 'Company owner length has to be in between 8 to 15 character.',
    owner_country_type : 'Company country type has to be string.',
    owner_country_type_length : 'Company country type length has to be in between 1 to 4 character.'
  }
}