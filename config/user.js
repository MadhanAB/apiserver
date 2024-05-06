
const user = require("../module/register");
const {success}= require("../middleware/success");

const login = (async(req,res)=>{
  
const [username,password] = req.body;

try{

    const users = await user.find({username:username,password:password})
    if(users){
        success(res,201,true,"data logged successfully",user)
    }
    

}catch (error){
    throw error
}
})

const register = (async(req,res)=>{

    try{
    
        const users = await user.create(req.body);
        if(users){
            success(res,201,true,"data logged successfully",user)
        }

    }catch (error){
        throw error
    }
})
module.exports = {login,register,}



