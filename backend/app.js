require("dotenv").config();
const cors=require("cors")

const express=require("express");
const app=express();
const router=require("./routes/router")


app.use(express.json())
app.use(cors())
app.use(router);


app.get("/",(req,res)=>{
    res.send("data")
})

app.listen(5000,()=>{
    console.log("server started")
})