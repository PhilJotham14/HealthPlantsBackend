'use strict';

// import dbConnect from the db.config.js file in the configurations folder.
var dbConnect = require('./../../config/db.config');



//_____________ create comment object
var Comment = function(comment){ 
    this.comment_body = comment.comment_body;
    // this.comment_date = comment.comment_date;     
};

Comment.create =  function(newComment, result){
    
    dbConnect.query("INSERT INTO comment (comment_body) VALUES (?)", [newComment], (err, res) =>{
        // console.log(newCondition);
        if (err) {
            console.log("error: ", err);

            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Comment.findAll = function(result){
    
    // dbConnect.query("SELECT id, comment FROM comments",
    // dbConnect.query("SELECT comment_id, comment_body, comment_date, COUNT(*) FROM comment INNER JOIN remedy USING (remedy_id) INNER JOIN user USING (user_id)",
    // dbConnect.query("SELECT comment_id, comment_body, comment_date, COUNT(*) FROM comment INNER JOIN remedy USING (remedy_id) INNER JOIN user USING (user_id)",
    dbConnect.query("SELECT * FROM comment",
        (err, res) => {
            if(err){
                result(null, err);
                console.log(err);
            }else{
                result(null, res)
            }
        }
    )
}

Comment.findById = function(comment_id, result){
    dbConnect.query("SELECT * FROM comment WHERE comment_id = ?", comment_id , (err, res) =>{
        if(err){
            console.log("error: ", err);
            result( null , err);
        }else{
            result(err, null)
        }
    })
}

Comment.delete = function(comment_id, result){
    dbConnect.delete("DELETE FROM comment WHERE comment_id = ?", [comment_id], (err, res) =>{
        if(err){
            console.log("error: ", err);
            result(null, err)
        }else{
            result( null, res)
        }
    })
}

module.exports = Comment;