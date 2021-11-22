const express=require('express');
const emoji=require("emoji.json");
const app=express();

app.get("/",(req,res,next)=>{
    return res.status(200).json({
        time: new Date().toISOString(),
        express: emoji[Math.floor(Math.random() * 4000)].char
    })
})


app.listen(3000,()=>{
    console.log("Server Started");
})