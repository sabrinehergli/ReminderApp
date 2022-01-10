var validator = require("email-validator");

exports.register=(req,res,next)=>{
    const {name,email,password}=req.body
    if (!name || !email || !password){
        return (res.status(401).json({msg:"Please complete all fields!"}))
    }
    if (!validator.validate(email)){
        return (res.status(402).json({msg:"Email is not valid!"}))
    }
    if (password.length<4){
        return (res.status(402).json({msg:"Password length must be more than 4 letters"}))
    }
    next()
}

exports.login=(req,res,next)=>{
    const {email,password}=req.body
    if (!email || !password){
        return (res.status(401).json({msg:"Please complete all fields!"}))
    }
    if (!validator.validate(email)){
        return (res.status(402).json({msg:"Email is not valid!"}))
    }
    if (password.length<4){
        return (res.status(402).json({msg:"Password length must be more than 4 letters"}))
    }
    next()
}