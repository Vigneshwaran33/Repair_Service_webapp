const express=require('express');
const hbs=require('hbs');
const bp=require('body-parser');
const mysql=require('mysql');

const app=express();

//hbs
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');

app.use(express.static('public'));
app.use(bp.urlencoded({extended:false}));

//route
const userRoutes=require('./routes/userRoutes');
app.use('/',userRoutes);

require('dotenv').config();
const db=require('./models/userdb');

const port=33;
app.listen(port,()=>{
    console.log(`Server Running on Port ${port}`);
})
