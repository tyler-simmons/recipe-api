const express = require('express');
const Router = express.Router();
const sql = require('../db');

Router.get('/', (req, res, next) => {
    let queryString = 'SELECT * FROM recipes';
    let resultArray = [];
    sql.query(queryString, function(err, result) {
        if (err) {
            console.log(err);
            res.send('Error');
        } else {
            resultArray = result;
        }
    });
    

});

exports.routes = Router;