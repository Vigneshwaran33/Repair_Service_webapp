const mysql=require('mysql');
require('dotenv').config();

const con=mysql.createConnection({
       host:process.env.host,
       user:process.env.user,
       password:process.env.password,
       database:process.env.database
});

con.connect((err)=>{
    if(err) console.log('Database failed'+err.message);
    else console.log('connected to the database');
});

module.exports={
    createUser:(uname,pwd,email,address,city,phone,callback)=>{
        const query='INSERT INTO users(uname,pwd,email,address,city,phone_num) VALUES (?,?,?,?,?,?)';
        con.query(query,[uname,pwd,email,address,city,phone],(err,res)=>{
            if(err) callback(err,null);
            else callback(null,res);
        })
    }
}