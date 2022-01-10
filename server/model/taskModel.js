const mongoose=require('mongoose')
const {Schema,model}=mongoose;

const taskSchema= new Schema({
    name:{type:String,required:true}
})

const tasks= model('tasks',taskSchema)

module.exports=tasks