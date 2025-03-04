const express=require('express');

const app=express();

const mongoose=require('mongoose')

const User=require('./models/user');

const Arouter=require('./router/user');

app.use(express.json());

app.use('/login',Arouter);

const Port=process.env.Port || 5009


app.listen(Port,()=>{
    console.log(`http://localhost:${Port}`);
    
})


