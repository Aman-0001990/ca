const express=require('express');
const User=require('../models/user')
const mongoose=require('mongoose');

const router=express.Router();

router.post('/login',async (req,res) => {
    try {
        const existEmail= await User.findOne({ email:req.body.email });
        const password= await User.findOne({ password:req.body.password });

        

            if(!existEmail){
res.status(400).json({error:'Email cannot be empty'})
            }
            if(password){
res.status(400).json({error:'password cannot be empty'})
            }
if(req.body.email=''){
    res.json('Email cannot be empty')
}
if(req.body.password=''){
    res.json('password cannot be empty')
}
            const uNew=await User({
                user:req.body.user,
                email:req.body.email,
                password:req.body.password,
            });

            const saveU=await uNew.save();
            res.json(saveU);

    } catch (error) {
        res.status(500).json({error:error});

    }
    
})


router.get('/sign',async (req,res) => {
    try {
        const NewUser=User.find();
        res.json(NewUser);
    } catch (error) {
        res.status(500).json({error:error});
    }
})


module.exports=router;