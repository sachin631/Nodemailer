import React, { useState } from "react";

const Home = () => {
    const [email,setEmail]=useState();
    console.log(email)

    const sendEmail=async()=>{
        let res=await fetch("http://localhost:5000/register",{
            method:"POST",
            body:JSON.stringify({
                email
            }),
            headers:{
                "Content-Type":"application/json"
            }
        })
        res=await res.json()
        console.log(res)
        if(res.status==401 || !res){
          console.log("error")
        }
        else{
          console.log("successfully sent..")
          alert("sent successfully")
          setEmail(" ")
        }
    }
  return (
    <div>
      <form onSubmit={(event)=>{
        event.preventDefault();

      }}>
        <div className="flex flex-col justify-center items-center bg-slate-600 gap-4 h-[100vh] container mx-auto">
          <div className="flex flex-col justify-start items-start gap-2">
            <lable className="text-white text-start font-bold font-[Poppins] text-4xl">
              Enter Your Email
            </lable>
            <input
              type="email"
              value={email}
              required
              placeholder="Enter Your Email"
              className="rounded w-[50vw] px-4 py-4"
              onChange={(event)=>setEmail(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="bg-blue-500 px-4 py-4 rounded-md text-white active:bg-blue-400" onClick={sendEmail} >Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
