const express = require('express');
const Router = express.Router();
const sql = require('../db');

//Get all tags
Router.get('/', (req, res, next) => {
    console.log('get');
    let query = 'SELECT * FROM tags;';
    sql.query(query, (err, results) => {
        if (err) {
            res.send('Database error');
        }
        res.send(JSON.stringify(results));
    });
});

//Create new tag
Router.post('/', (req, res, next) => {
    console.log('post');
    let title = req.body.title;

    queryString = `INSERT INTO tags (tagTitle) VALUES ('${title}')`;
    sql.query(queryString, function (err, result) {
        if (err) {
            console.log(err);
            res.send('Error');
        } else {
            res.send('db update success');
        }
    });
    
});

//Get specific tag
Router.get('/:title', (req, res, next) => {
    console.log('tag id get query');
    let queryString = `SELECT * FROM tags WHERE tagTitle='${req.params.title}'`;
    sql.query(queryString, function(err, result) {
        if (err) {
            console.log(err);
            res.send('error');
        } else {
            res.send(result);
        }
    })
});

//Update tag 
Router.patch('/:title', (req, res, next) => {
    console.log('tag update route');
    let queryString = `UPDATE tags SET tagTitle='${req.body.title}' WHERE tagTitle='${req.params.title}'`;
    console.log(queryString);
    sql.query(queryString, function(err, result){
        if (err) {
            console.log(err);
            res.send('error');
        } else {
            res.send(result);
        }
    });
});

//Delete tag
Router.delete('/:title', (req, res, next) => {
    console.log('tag delete route');
    let queryString = `DELETE FROM tags WHERE tagTitle='${req.params.title}'`;
    sql.query(queryString, function(err, result) {
        if (err) {
            console.log(err);
            res.send('error');
        } else {
            res.send(result);
        }
    });
});

exports.routes = Router;
