'use strict';
const deanData = require('../data/dean');
const getDean = async(req,res,next) =>{
    try {
        const dean = await deanData.getDean(); 
        res.send(dean);
    } catch (error) {
        if(error.response){
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.header);
        }else if(error.requiest){
            console.log(error.requiest);
        }else{
            console.log(`deanAPI Error: ${error.message}`);
            res.status(400).send(error.message);
        } 
    }
}

module.exports = {
    getDean
}