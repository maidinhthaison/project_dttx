'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();
 const{PORT, HOST, HOST_URL, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER} = process.env;
 const sqlEncrypt = process.env.ENCRYPT === 'true';

 assert(PORT,'PORT IS REQUIRE');
 assert(HOST, 'HOST IS REQUIRE');

 module.exports = {
     port: PORT,
     host: HOST,
     url: HOST_URL,
     sql: {
         server : SQL_SERVER,
         user : SQL_USER,
         database : SQL_DATABASE,
         password : SQL_PASSWORD,
         options: {
             encrypt : sqlEncrypt,
             enableArithAbort: true
         }
     }
 }