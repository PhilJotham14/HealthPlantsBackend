
const bcrypt = require('bcrypt');
const dbConnect = require('../../config/db.config');
const saltRounds = 10;

exports.login = async function(req,res){
    console.log(req.body);
    var email= req.body.email;
    var password = req.body.password;
    dbConnect.query('SELECT * FROM user WHERE email = ?',[email], async function (error, results, fields) {
      if (error) {
        res.send({
          "code":400,
          "failed":"error ocurred"
        })
      }else{
        if(results.length >0){
          const comparision = await bcrypt.compare(password, results[0].password)
          if(comparision){
              res.send({
                "code":200,
                "success":"login sucessfull"
              })
          }
          else{
            res.send({
                 "code":204,
                 "success":"Email and password does not match"
            })
          }
        }
        else{
          res.send({
            "code":206,
            "success":"Email does not exits"
              });
        }
      }
      });
  }