

const mongoose = require("mongoose")


const user = new mongoose.Schema (
    {
        email:{
            type:String
        },
        username:{
            type:String
        },
        mobilenumber:{
            type:Number
        },

        password:{
            type:String
        }
    }
)
module.exports = mongoose.model("user",user)