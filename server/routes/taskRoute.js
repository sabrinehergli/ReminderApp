var express = require('express')
var router = express.Router()

const tasks=require('../model/taskModel')

router.post('/tasks',(req,res)=>{
    const {name}=req.body
    tasks.create({name},err=>
        err?res.send('create task failed'):res.send('task added'))
})


router.get('/tasks',async(req,res)=>{
   try {
       const data=await tasks.find().exec()
       res.status(200).send(data)
   } catch (error) {
       error? res.send('sth went wrong'):res.send('succeeded')
   }
})

router.put('/tasks/:id',(req,res)=>{
    tasks.findByIdAndUpdate(req.params.id,req.body,err=>
        err?res.send('get task failed'):res.send('succeeded'))
})

router.delete('/tasks/:id',(req,res)=>{
    tasks.findByIdAndRemove(req.params.id,err=>
        err?res.send('delete task failed'):res.send('succeeded'))
})

module.exports=router