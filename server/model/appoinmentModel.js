const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:false
    },
    selectedServices: [{
         type: String, 
         required: true 
        }],
    selectedSubServices:[{
        name: { type: String, required: true },
        price: { type: Number, required: true }
      }],
    

    staff:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    totalPrice: { 
        type: Number, 
        required: true
     },
     wage : {
        type: Number,
     }
})


const Appoinment = mongoose.model('User_Appoinment',userSchema)

module.exports = Appoinment