'use strict';
const express = require('express');
const deanRouter = express.Router();
const axios = require('axios');
const config = require('../../config');
deanRouter.get('', async(req,res)=>{
    try {
        const deanAPI = await axios.get(`${config.url}/api/dean`); 
        res.render('index', { title: 'Home Page', layout: './layouts/sidebar', data : deanAPI.data});     
    } catch (error) {
        if(error.response){
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.header);
        }else{
            console.log(`deanClient Error: ${error.message}`);
        }
        
    }
})

module.exports = {
    routes: deanRouter
}