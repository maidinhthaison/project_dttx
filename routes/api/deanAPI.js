'use strict';
const express = require('express');
const deanController = require('../../controller/deanController');
const router = express.Router();

const {getDean} = deanController;

router.get('/dean', getDean);

module.exports = {
    routes : router
}