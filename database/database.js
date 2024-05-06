

const mongoose = require("mongoose")


const connectDB = (async()=>{

    try{
    
        const connect = await mongoose.connect("mongodb+srv://Naresh:Naresh05@cluster0.b9z0by5.mongodb.net/userserverlogin")

    }catch (error){
        throw new Error(error)
    }
})
module.exports = connectDB