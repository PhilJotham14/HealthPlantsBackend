'use strict';
require('body-parser');
//__________ import the Comments model from the models folder
const Comment = require('../models/comment.model');

exports.findAll = (req, res) => {
    Comment.findAll((err, comment) =>{
        if(err){
            res.send(err);
        }else{
            res.send(comment)
        }
    })
}

exports.create = (req, res) => {
    const newComment = req.body.comment;
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({
            error:true,
            message: "you cannot comment a Blank space"
        });
    }else{
        Comment.create(newComment, (err, comment) =>{
            if(err){
                res.send(err)
            }else{
                res.json({
                    error: false,
                    message: "comment added",
                    data: comment
                })
            }
        })
    }
}


