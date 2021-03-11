'use strict';

// import dbConnect from the db.config.js file in the configurations folder.
var dbConnect = require('./../../config/db.config');

//____________ Create a comment object.
var Comment = (comment) => { 
    this.comment_body = comment.comment_body;
    this.comment_date = comment.comment_date;    
};

Comment.create =  (newComment, result) =>{
    
    dbConnect.query("INSERT INTO comment set ?", newComment, (err, res) =>{
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

Comment.findAll = (result) =>{
    dbConnect.query("SELECT comment_id, comment_body, comment_date, COUNT(*) FROM comment INNER JOIN remedy USING (remedy_id) INNER JOIN user USING (user_id)",
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

module.exports = Comment;