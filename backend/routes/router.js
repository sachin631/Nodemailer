const express=require("express");
const router=new express.Router();
const nodemailer=require("nodemailer");


router.post("/register",(req,res)=>{
    const {email}=req.body
    try {
        const transporter=nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASSWORD
            }
        });
        const maileroption={
            from:process.env.EMAIL,
            to:email,
            subject:"sending email from react and nodejs",
            html:'<h1>Congratulation You successfuly send Email</h1>'

        }

        transporter.sendMail(maileroption,(error,info)=>{
            if(error){
                console.log("Error",error)
            }
            else{
                console.log("Email sent"+info.response);
                res.status(201).json({status:201,info})
            }
        })
       
    } catch (error) {
        res.status(201).json({status:401,error})
        
    }
    
})

module.exports=router

// ymwwcokzrztkhosd
