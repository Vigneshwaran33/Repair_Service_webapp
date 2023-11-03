const db=require('../models/userdb');

module.exports ={
       renderLogin:(req,res)=>{
        const reg=req.query.reg;
        res.render('index',{reg});
       },
       renderSignup:(req,res)=>{
        res.render('signup');
       },
       signup:(req,res)=>{
        const {uname,email,pwd,address,city,phone}=req.body;
        db.createUser(uname,pwd,email,address,city,phone,(err,result)=>{
            if(err){
                console.log(err);
                res.render('signup',{errorMessage:'Try again'});
            }
            else{
                res.redirect('/?reg=success');
            }
        }); 

       }

}