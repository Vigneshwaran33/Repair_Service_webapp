const db=require('../models/userdb');

module.exports ={
       renderLogin:(req,res)=>{
        const {login,reg}=req.query;
        res.render('index',{login,reg});
       },
       
       login:(req,res)=>{
        const{uname,pwd}=req.body;

        db.authenticateUser(uname,pwd,(err,user)=>{
            if(err){
                console.log(err);
                res.redirect('/?login=Login%20Failed.Try%20again')
            }
            else{
                req.session.user=user;
                res.redirect('/home');
            }
        })
       },

       renderHome:(req,res)=>{
        if(req.session.user){
            res.render('home',{user:req.session.user});
        }
        else {
            res.redirect('/');
        }
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