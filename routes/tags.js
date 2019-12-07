const express = require('express');
const Router = express.Router();
const Tag = require('../models/tag');


class ResponseObject {
    constructor(status, data) {
        this.status = status;
        if (data.length == 1) {
            this.data = [];
            this.data.push(data);
        } else {
            this.data = data;
        }
    }

    getResponse() {
        return this;
    }
}


//Get all tags
Router.get('/', (req, res, next) => {
    Tag.findAll((err, tags) => {
        if (err) {
            res.json(new ResponseObject('failure', []).getResponse());
        } else {
            res.json(new ResponseObject('success', tags).getResponse());
        }
    })
});


//Create new tag
Router.post('/', (req, res, next) => {
    console.log(typeof(req.body.title));
    const newTag = new Tag(req.body.title);
    newTag.save((err, result) => {
        if (err) {
            res.json(new ResponseObject('failure', []).getResponse());
        } else {
            res.json(new ResponseObject('success', {message: 'Successfully added new tag to db'}).getResponse());
        }
    });
});

//Get specific tag
Router.get('/:title', (req, res, next) => {
    const tag = Tag.findByTagTitle(req.params.title, (err, tag) => {
        if (err) {
            res.json(new ResponseObject('failure', []).getResponse());
        } else {
            res.json(new ResponseObject('success', tag).getResponse());
        }
    });
});

//Update tag 
Router.patch('/:title', (req, res, next) => {
    Tag.findByTagTitle(req.params.title, (err, result) => {
        if (err) {
            res.json(new ResponseObject('failure', []).getResponse());
        } else {
            res.json(new ResponseObject('success', {message: 'Successfully updated tag in db'}).getResponse());
        }
    });
});

//Delete tag
Router.delete('/:title', (req, res, next) => {
    Tag.findByTagTitle(req.params.title, (err, tag) => {
        if (err) {
            res.json(new ResponseObject('failure', []).getResponse());
        } else {
            tag.delete((err, result) => {
                if (err) {
                    res.json(new ResponseObject('failure', []).getResponse());
                } else {
                    res.json(new ResponseObject('success', {message: 'Successfully deleted tag from db'}).getResponse());
                }
            });
        }
    });
});

exports.routes = Router;