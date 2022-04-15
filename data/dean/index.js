'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getDean = async () => {
    try {
        let pool = await sql.connect(config.sql);
        console.log('DATABASE CONNECTED....');
        const sqlQueries = await utils.loadSqlQueries('dean');
        const list = await pool.request().query(sqlQueries.list_dean); 
        return list.recordset;
    } catch (error) {
        console.log(`Database Error: ${error.message}` );
        return error.message;
    }
}

module.exports = {
    getDean
}