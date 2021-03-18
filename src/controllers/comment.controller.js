'use strict';
require('body-parser');
//__________ import the Comments model from the models folder
const Comment = require('../models/comment.model');

exports.findAll = function(req, res){
    Comment.findAll((err, comment) =>{
        if(err){
            res.send(err);
        }else{
            res.send(comment)
        }
    })
}

exports.create = function(req, res){
    const newComment = new Comment(req.body)
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
                    message: comment,
                    data: comment
                })
            }
        })
    }
}

exports.findById = function(req, res){
    Comment.findById(req.param.id, (err, comment) =>{
        if(err){
            res.send(err)
        }else{
            res.json(comment)
        }
    })
}

exports.delete = function(req, res){
    Comment.delete(req.params.id, (err, comment) =>{
        if(err){
            res.send(err)
        }else{
            res.json({
                error:false,
                message: 'comment deleted successfully'
            })
        }
    })
}

