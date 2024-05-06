

const success = (res,status,success,message,data)=>{
    res.statusMessage(message)
    res.status(status)
    res.json({
        status:status,
        success:success,
        message:message,
        data:data
    })
}
module.exports = {success}