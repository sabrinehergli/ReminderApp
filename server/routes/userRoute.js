const express=require('express')
const router=express.Router()
const users=require('../model/userModel')
const {register,login}=require('../middelwares/index')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config()
router.post('/users/register',register,async(req,res)=>{

    const {name,email,password}=req.body
    const searchUser=await users.findOne({email}).exec()
    if(searchUser){
        return(res.status(403).json({msg:'user already exists'}))
    }
    const hashedPassword=await bcrypt.hash(password,10)
    await users.create({name,email,password:hashedPassword},(err)=>{
        return (err?(res.status(501).json({msg:'failed to add user'}))
        :
        (res.status(200).json({msg:'user added to database'})))

    })

})

router.post('/users/login',login,async(req,res)=>{
    const {email,password}=req.body
    const searchUser= await users.findOne({email}).exec()
    if (!searchUser){
        return(res.status(405).json({msg:'user does not exist'}))
    }
    const verifyPassword=await bcrypt.compare(password,searchUser.password)
    if (!verifyPassword){
        return(res.status(406).json({msg:'Please verify your password'}))
    }
    else{
        var token = jwt.sign({email},process.env.secret,{expiresIn:"1h"});
        return(res.status(200).json({msg:'login Succeeded',token}))
    }
}
)

router.get('/users/auth',async(req,res)=>{

    const token=req.headers.authorization
    const tokenVerify=await jwt.verify(token,process.env.secret)
    if(!tokenVerify){
        return(res.status(505).json({msg:'you are not authorized'}))
    }
    else{
        return(res.status(200).json({msg:'you are authorized'}))

    }
})

module.exports=router