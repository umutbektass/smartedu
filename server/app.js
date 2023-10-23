const express = require('express');
const app = express();

app.listen(5002,()=>{
    console.log("server is started.");
})

app.get("/home",(req,res)=>{
    res.status(200).json({message:"İstek başarılı."})
})