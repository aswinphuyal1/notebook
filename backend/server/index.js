const express=require('express');
const mongoose=require('mongoose');

const app=express();
mongoose.connect("mongodb://localhost:27017/curd")

const userSchema=new mongoose.Schema({name:{type:String},age:{type:Number},city:{type:String}});

const UserModel=mongoose.model('User',userSchema);
app.get("/getUsers",(req,res)=>{

    res.json(UserModel.find());
})

app.listen(5000,()=>{
    console.log("server is running");
})