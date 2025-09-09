const mongoose = require('mongoose');
const userSchema  = new mongoose.Schema({
    fullname:{type:String,required:true,trim:true},
    email:{type:String,required:true,trim:true,unique:true},
    phone:{type:Number,required:true,trim:true,unique:true},
    profilePic:{type:String,default:''},
    password:{type:String,required:true,trim:true}
},{timestamps:true});

const userModel = mongoose.model("User",userSchema);

module.exports = userModel;