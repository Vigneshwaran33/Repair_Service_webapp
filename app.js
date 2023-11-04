const express=require('express');
const hbs=require('hbs');
const helpers = require('handlebars-helpers');
const bp=require('body-parser');
const mysql=require('mysql');
const session=require('express-session');

const app=express();

//hbs
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');

app.use(express.static('public'));
app.use(bp.urlencoded({extended:false}));

//session
app.use(
    session({
        secret:'stark',
        resave:false,
        saveUninitialized:true
    })
)
//route
const userRoutes=require('./routes/userRoutes');
app.use('/',userRoutes);

require('dotenv').config();
require('./models/userdb');



const port=33;
app.listen(port,()=>{
    console.log(`Server Running on Port ${port}`);
})
