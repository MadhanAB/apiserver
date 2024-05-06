const express = require("express")
const app = express();
const cors = require("cors");
app.use(cors());
const db = require("./database/database")
app.get('/',(req,res)=>{

    res.send("data connected successfully")
})

port = 5003

app.listen(port,(req,res)=>{
    db();
    console.log(`data logged successfully ${port}`);
})