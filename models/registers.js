const mongoose = require("mongoose")

const regSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
   email : {
        type : String,  //It always shows error without type
        required : true, 
        unique : true
    },
     password : {
        type : String,
        required : true,
     }  

});

//now we need to create the collections

const Register = new mongoose.model("userInfo", regSchema)
module.exports = Register;